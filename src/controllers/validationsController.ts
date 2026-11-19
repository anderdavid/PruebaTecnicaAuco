import { Request, Response } from "express";
import { connectDB } from "../config/database";

export const createValidations = async (req: Request, res: Response) => {
 await connectDB();
 return res.status(200).json({
  message: "createValidations",
 });
};

export const getByIdValidations = async (req: Request, res: Response) => {
 await connectDB();
 return res.status(200).json({
  message: "get by id validations",
 });
};
