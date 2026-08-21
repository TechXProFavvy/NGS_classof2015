import express from "express";
import {
  deleteMessage,
  getMessages,
  postMessage,
} from "../Controllers/messageController.js";
export const messageRouter = express.Router();

messageRouter.get("/", getMessages);
messageRouter.post("/", postMessage);
messageRouter.delete("/", deleteMessage);
