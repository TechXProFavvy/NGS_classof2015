import mongoose from "mongoose";
const EventSchema = mongoose.Schema(
  {
    EventName: {
      type: String,
      require: true,
    },
    EventDate: {
      type: String,
      require: true,
    },
    EventVenue: {
      type: String,
      require: true,
    },
    EventInvitor: {
      type: String,
      require: true,
    },
    EventCount: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true },
);

export const EventModel = new mongoose.model("events", EventSchema);
