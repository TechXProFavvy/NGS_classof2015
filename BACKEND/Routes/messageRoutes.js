import express from "express";
import {
  deleteMessage,
  getMessages,
  postMessage,
} from "../Controllers/messageController.js";
export const messageRouter = express.Router();

messageRouter.get("/api/", getMessages);
messageRouter.post("/api/", postMessage);
messageRouter.delete("/api/", deleteMessage);
