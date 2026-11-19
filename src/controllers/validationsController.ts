import { Request, Response } from "express";

export const createValidations = (req: Request, res: Response) => {
 return res.status(200).json({
  message: "createValidations",
 });
};

export const getByIdValidations = (req: Request, res: Response) => {
 return res.status(200).json({
  message: "get by id validations",
 });
};
