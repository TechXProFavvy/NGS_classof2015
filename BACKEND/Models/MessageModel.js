import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    msgBody: String,
  },
  { timestamps: true },
);

export const MessageModel = mongoose.model("Messages", MessageSchema);
