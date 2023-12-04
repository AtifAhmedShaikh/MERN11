import express from "express";
import { login, refresh, register } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/refresh", refresh);

export default router;
