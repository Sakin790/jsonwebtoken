
import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./src/db/index.js";


console.log(process.env.PORT);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Error!!!", error);
  });
