import { Request, Response } from "express";
import configDatabase from "../config/database";

export const createValidations = async (req: Request, res: Response) => {
 return res.status(200).json({
  message: "createValidations1",
 });
};

export const getByIdValidations = async (req: Request, res: Response) => {
 await configDatabase();
 return res.status(200).json({
  message: "get by id validations1",
 });
};
