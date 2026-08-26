import express from "express";
import {
  deleteEvent,
  getAllEvents,
  postNewEvents,
  updateEvent,
} from "../Controllers/EventControllers.js";
const router = express.Router();
router.get("/event", getAllEvents);
router.post("/event", postNewEvents);
router.put("/event/:id", updateEvent);
router.delete("/event/:id", deleteEvent);

export default router;
