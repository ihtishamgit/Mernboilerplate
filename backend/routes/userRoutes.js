import express from "express";
import { authUser, getAuth } from "../controllers/userController.js";

const router = express.Router();

router.post("/auth", authUser);
router.get("/getAuth", getAuth);

export default router;
