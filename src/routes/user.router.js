import express from "express";
import { healthCheck, registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/healthCheck").get(healthCheck);
router.route("/register").post(registerUser);

export { router };
