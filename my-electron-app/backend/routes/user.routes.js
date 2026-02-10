import express from "express";
import { register, login, viewUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", viewUsers);

export default router;
