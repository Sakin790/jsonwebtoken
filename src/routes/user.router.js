import express from "express";
import { healthCheck } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/healthCheck").get(healthCheck);

export { router };
