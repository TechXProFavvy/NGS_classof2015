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
// ----middle wares-----

const allowedOrigins = [
  "http://localhost:5173",
  "https://greactachievers-ngs-classof2015.netlify.app",
  "https://vercel.com/tech-0411/ngs-classof2015/",
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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
app.use("/event", router);
app.use("/msg", messageRouter);
app.use("/payment", paymentRouter);
