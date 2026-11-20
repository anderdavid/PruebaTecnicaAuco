import { Request, Response } from "express";
import mongoose from "mongoose";
import configDatabase from "../config/database";
import Validation from "../models/Validations";
import { fetchCurrencyByCoutry } from "../services/validationsService";
import { createAuditory } from "../services/createAuditory";

export const createValidations = async (req: Request, res: Response) => {
 await configDatabase();

 let body = req.body;

 try {
  const response = await fetchCurrencyByCoutry();
  console.log("response", response);
  if (response?.status === 200) {
   body = { ...body, data: response.data };
  }
  const newValidation = await Validation.create(body);
  await createAuditory({
   idDocumento: body?.numeroDocumento,
   fecha: new Date().toISOString(),
   data: response.data,
  });
  return res.status(201).json({ id: newValidation._id });
 } catch (error) {
  console.log("error creating validation", error);
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

/***
 * Endpoints adicionales
 * **/

export const getAllValidations = async (req: Request, res: Response) => {
 await configDatabase();
 try {
  const validations = await Validation.find();
  return res.status(200).json(validations);
 } catch (error) {
  return res.status(500).send({
   error: `Internal server error ${error}`,
  });
 }
};

export const deleteValidation = async (req: Request, res: Response) => {
 await configDatabase();
 const validationId = req.params.id;
 console.log("validationId", validationId);

 try {
  const validation = await Validation.findByIdAndDelete(validationId);
  console.log("validationn", validation);
  if (!validation) {
   return res.status(404).send({ error: "validation not found" });
  }
  return res.status(200).json(validation);
 } catch (error) {
  return res.status(500).send({ error: `Internal Server Error ${error}` });
 }
};

/******************
 ******************
 ***/
