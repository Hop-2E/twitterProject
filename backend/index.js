import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { MONGO_URI, PORT } from "./config.js";
import usersRouter from "./router/user.js";



const app = express();

app.use(express.json());
app.use(cors());

app.use("/users/", usersRouter);

const connect = () => {
  try {
    mongoose.connect(MONGO_URI, {}).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.error("could not connect to DB");
    process.exit(1);
  }
};

app.listen(PORT, async () => {
  connect();
  console.log("server running on " + PORT);
});
