import { Router } from "express";

import { getAllAuditories } from "../controllers/auditoryContorller";

const router = Router();

router.get("/auditories", getAllAuditories);

export default router;
