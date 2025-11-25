import { Router } from "express";
import { register, updateRole } from "../controllers/auth.controller";
import { authenticate, requireRole } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", register);

router.patch("/:uid/role", authenticate, requireRole("admin"), updateRole);

export default router;
