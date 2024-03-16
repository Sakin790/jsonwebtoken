import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.table(username, email, password);
});

const healthCheck = (req, res) => {
  res.status(200).json({
    message: "Server is OK",
  });
};

export { healthCheck };
