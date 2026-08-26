import express from "express";
import {
  deleteMessage,
  getMessages,
  postMessage,
} from "../Controllers/messageController.js";
export const messageRouter = express.Router();

messageRouter.get("/api/msg", getMessages);
messageRouter.post("/api/msg", postMessage);
messageRouter.delete("/api/msg", deleteMessage);
