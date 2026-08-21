import mongoose from "mongoose";
const PaymentSchema = new mongoose.Schema(
  {
    dateOfPayment: String,
    amountPaid: Number,
    payer: String,
    recorder: String,
  },
  { timeStamps: true },
);

export const PaymentModel = mongoose.model("payments", PaymentSchema);
