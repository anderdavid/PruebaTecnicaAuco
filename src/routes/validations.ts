import { Router } from "express";

import {
 createValidations,
 getByIdValidations,
 getAllValidations,
 deleteValidation,
} from "../controllers/validationsController";

import { validate } from "../middleware/validate";
import { validateCreateValidations } from "../middleware/validateValidations";

const router = Router();

router.post(
 "/validations",
 validate(validateCreateValidations),
 createValidations
);
router.get("/validations/:id", getByIdValidations);

/** endpoints adicionales */
router.get("/validations", getAllValidations);
router.delete("/validations/:id", deleteValidation);

export default router;
