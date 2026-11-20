import { check } from "express-validator";

export const validateCreateValidations = [
 check("nombre")
  .trim()
  .notEmpty()
  .withMessage("El campo nombre es requerido")
  .isLength({ min: 3, max: 100 })
  .withMessage("El nombre debe tener entre 3 y 100 caracteres"),
 check("numeroDocumento")
  .trim()
  .notEmpty()
  .withMessage("El numero de documento es obligatorio")
  .matches(/^[0-9]+$/)
  .withMessage("El número de documento solo debe contener números"),
];
