import express from "express";
import {
  deleteEvent,
  getAllEvents,
  postNewEvents,
  updateEvent,
} from "../Controllers/EventControllers.js";
const router = express.Router();
router.get("/", getAllEvents);
router.post("/", postNewEvents);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
