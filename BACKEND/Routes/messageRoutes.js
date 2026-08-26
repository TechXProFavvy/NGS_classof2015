import express from "express";
import {
  deleteMessage,
  getMessages,
  postMessage,
} from "../Controllers/messageController.js";
export const messageRouter = express.Router();

messageRouter.get("/msg", getMessages);
messageRouter.post("/msg", postMessage);
messageRouter.delete("/msg", deleteMessage);
