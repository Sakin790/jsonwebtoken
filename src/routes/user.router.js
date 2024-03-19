import { verifyJWT } from "../middlewares/auth.middleware.js";
import express from "express";
import {
  healthCheck,
  registerUser,
  loginUser,
  allUser,
  deleteUser,
  logoutUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/healthCheck").get(healthCheck);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/users").get(allUser);
router.route("/delete").delete(deleteUser);

router.route("/logout").get(verifyJWT, logoutUser);

export { router };
