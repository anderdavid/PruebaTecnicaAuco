import { Request, Response } from "express";
import mongoose from "mongoose";
import configDatabase from "../config/database";
import Validation from "../models/Validations";

export const createValidations = async (req: Request, res: Response) => {
 await configDatabase();

 let body = req.body;

 try {
  const newValidation = await Validation.create(body);
  return res.status(201).json(newValidation);
 } catch (error) {
  console.log("error creating role", error);
  return res.status(500).send({ error: `Internal Server Error ${error}` });
 }
};

export const getByIdValidations = async (req: Request, res: Response) => {
 await configDatabase();

 const validationId = req.params.id;
 console.log("validationId", validationId);

 try {
  if (!mongoose.isValidObjectId(validationId)) {
   return res.status(400).json({
    success: false,
    message: "El identificador no es válido",
   });
  }
  const validation = await Validation.findById(validationId);
  console.log("validation", validation);

  if (!validation) {
   return res.status(404).send({ error: "validation not found" });
  }

  const mValidation = validation.toObject();

  return res.status(200).json(mValidation);
 } catch (error) {
  res.status(500).send({ error: `Internal Server Error ${error}` });
 }
};
