import express from "express";
import { healthCheck, registerUser ,loginUser ,allUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/healthCheck").get(healthCheck);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/users").get(allUser)

export { router };
