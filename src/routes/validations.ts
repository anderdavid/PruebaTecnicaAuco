import { Router } from "express";

import {
 createValidations,
 getByIdValidations,
 getAllValidations,
 deleteValidation,
} from "../controllers/validationsController";

const router = Router();

router.post("/validations", createValidations);
router.get("/validations/:id", getByIdValidations);

/** endpoints adicionales */
router.get("/validations", getAllValidations);
router.delete("/validations/:id", deleteValidation);

export default router;
