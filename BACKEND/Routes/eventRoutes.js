import express from "express";
import {
  deleteEvent,
  getAllEvents,
  postNewEvents,
  updateEvent,
} from "../Controllers/EventControllers.js";
const router = express.Router();
router.get("/api/event", getAllEvents);
router.post("/api/event", postNewEvents);
router.put("/api/event/:id", updateEvent);
router.delete("/api/event/:id", deleteEvent);

export default router;
