import express from "express";
import {
  deleteEvent,
  getAllEvents,
  postNewEvents,
  updateEvent,
} from "../Controllers/EventControllers.js";
const router = express.Router();
router.get("/api/", getAllEvents);
router.post("/api/", postNewEvents);
router.put("/api/:id", updateEvent);
router.delete("/api/event/:id", deleteEvent);

export default router;
