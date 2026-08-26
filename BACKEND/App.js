import express from "express";
import cors from "cors";
import session from "express-session";
import dotEnv from "dotenv";
import router from "./Routes/eventRoutes.js";
import dbconnection from "./Database/DataBase.js";
import { messageRouter } from "./Routes/messageRoutes.js";
import { paymentRouter } from "./Routes/paymentRoutes.js";
dotEnv.config();

export const PORT = process.env.PORT;
export const app = express();
//-----------custom middlewares--------------//

// ----middle wares-----//

app.use(
  cors({
    origin: "https://great-achievers-ngs-classof2015.netlify.app",
    allowedHeaders: ["Content-Type", "Authorozation"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax",
      secure: true,
      httpOnly: true,
    },
  }),
);

app.use(express.json());
app.use("/api/event", router);
app.use("/api/msg", messageRouter);
app.use("/api/payment", paymentRouter);
