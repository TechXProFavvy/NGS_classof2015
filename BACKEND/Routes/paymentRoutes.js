import express from "express";
import { addPayment } from "../Controllers/PaymentController.js";
export const paymentRouter = express.Router();

paymentRouter.get("/", getPayments);
paymentRouter.post("/", addPayment);
