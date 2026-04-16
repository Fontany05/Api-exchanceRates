import { Router } from "express";
import { getExchanceRates } from "./items.controller";

const router = Router();

router.get("/external-data", getExchanceRates);

export default router;