import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../../constants.js";

dotenv.config({
  path: ".env",
});

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${"mongodb://localhost:27017"}/${DB_NAME}`
    );
    console.log(
      `\n 👍👍 MongoDB connected to : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Error", error);
    process.exit(1);
  }
};

export { connectDB };
