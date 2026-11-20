import { ContextRunner } from "express-validator";
import express from "express";

export const validate = (validations: ContextRunner[]) => {
 return async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
 ) => {
  for (const validation of validations) {
   const result: any = await validation.run(req);
   if (!result.isEmpty()) {
    const errors = result.array();
    const error = errors[0].msg;
    console.log("error", error);
    return res.status(400).json({ error });
   }
  }

  next();
 };
};
