import { EventModel } from "../Models/EventModels.js";
import mongoose from "mongoose";

export const getAllEvents = async (req, res, next) => {
  try {
    const eventData = await EventModel.find({}).lean();
    res.send(eventData);
    console.log(eventData);
  } catch (error) {
    res.status(500).send(`error fetching Events:${error}`);
  }
  next();
};
// Post new events
export const postNewEvents = async (req, res, next) => {
  const { EventName, EventDate, EventVenue, EventInvitor, EventCount } =
    req.body;
  if (!EventName) return res.status(400).json({ msg: "Please add events" });
  const newEvent = new EventModel({
    EventName,
    EventDate,
    EventVenue,
    EventInvitor,
    EventCount,
  });

  const savedEvents = await newEvent.save();
};

export const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const deletedUser = await EventModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User deleted successfully",
      deletedId: id,
    });
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const updateEvent = async (req, res, next) => {};
