// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// // import { MONGO_URI, PORT } from "./config.js";
// import usersRouter from "./router/user.js";
// import router from "./router/post.js";
// import dotenv from "dotenv";
// const app = express();
// const uri = process.env.MONGO_URI || "";
// const port = process.env.PORT || 8000;
// app.use(express.json());
// app.use(cors());
// dotenv.config();
// app.use("/posts/", router);
// app.use("/users/", usersRouter);

// const connect = () => {
//   try {
//     mongoose.connect(uri, {}).then(() => {
//       console.log("Connected to DB");
//     });
//   } catch (error) {
//     console.error("could not connect to DB");
//     process.exit(1);
//   }
// };

// app.listen(port, async () => {
//   connect();
//   console.log("server running on " + port);
// });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./router/user.js";
import router from "./router/post.js";
const app = express();

dotenv.config();

// const myFirstMiddleware = (req, res, next)=>{
//   console.log('res iin mothodig hewlene',req.method)
//   next()
// }

const uri = process.env.MONGO_URI || "";
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use("/posts", router);
app.use("/users", usersRouter);

const connect = () => {
  console.log(uri);

  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected MongoDB");
    });
  } catch (error) {
    console.error("Couldn't connect");
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`Server running at localhost:${port}`);
});
