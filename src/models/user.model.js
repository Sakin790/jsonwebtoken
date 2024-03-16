import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const userScema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
  },
});

userScema.pre("save", async function (next) {
  if (this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

export const User = mongoose.model("user", userScema);
