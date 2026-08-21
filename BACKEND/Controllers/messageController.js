import mongoose from "mongoose";
import { MessageModel } from "../Models/MessageModel.js";

export const getMessages = async (req, res, next) => {
  try {
    let messages = await MessageModel.find({});
    if (!messages) return;
    res.send(messages);
  } catch (error) {
    throw new Error("Error in getting messages", error);
  }
  next();
};
export const postMessage = async (req, res, next) => {
  try {
    let { name, email, msgBody } = req.body;
    if (!name && !msgBody) return res.json({ msg: "Invalid message" });
    const newMessage = new MessageModel({
      name,
      email,
      msgBody,
    });
    let savedMessage = newMessage.save();
  } catch (err) {
    throw new Error("Can't add messages", err);
  }
  next();
};
export const deleteMessage = async (req, res, next) => {
  try {
    const deletedMsg = await MessageModel.deleteMany({});
    if (!deletedMsg) {
      return res.status(404).json({ message: "message not found" });
    }

    return res.status(200).json({
      message: "message deleted successfully",
    });
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
