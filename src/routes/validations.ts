import { Router } from "express";

import {
 createValidations,
 getByIdValidations,
} from "../controllers/validationsController";

const router = Router();

router.post("/validations", createValidations);
router.get("/validations/:id", getByIdValidations);

export default router;
