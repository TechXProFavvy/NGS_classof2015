import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
// import app from "../FirebaseConfig";
// import { getDatabase, ref, set, push } from "firebase/database";
const addToDatabase = async (e) => {};

const EventForm = () => {
  const [events, setEvents] = useState([]);

  const [eventObj, setEventObj] = useState({
    EventName: "",
    EventDate: "",
    EventVenue: "",
    EventInvitor: "",
    EventCount: "",
  });
  const getEvents = async (e) => {
    let { name, value } = e.target;

    setEventObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const addEvent = async (e) => {
    e.preventDefault();
    console.log(eventObj);
    if (!eventObj) return toast.warn(`fill in the Form to add Event`);
    try {
      const response = await axios.post(
        "http://localhost:8500/event",
        eventObj,
      );

      setStatus(`Success! Server response: ${JSON.stringify(response.data)}`);
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      toast.error(`Something went wrong ${error}`);
      setStatus(`Error: ${errorMsg}`);
    }
  };

  return (
    <div className="Event-form">
      <form>
        <h2>Fill Event Details accordingly</h2>
        <div className="e-name">
          <input
            type="text"
            name="EventName"
            id="event-name"
            placeholder="enter event name"
            onChange={getEvents}
            value={eventObj.EventName}
          />
        </div>
        <div className="e-date">
          <input
            type="date"
            name="EventDate"
            id="event-date"
            placeholder="enter event date"
            onChange={getEvents}
            value={eventObj.EventDate}
          />
        </div>
        <div className="e-venue">
          <input
            type="text"
            name="EventVenue"
            id="event-venue"
            placeholder="enter event location"
            onChange={getEvents}
            value={eventObj.EventVenue}
          />
        </div>
        <div className="e-owner">
          <input
            type="text"
            name="EventInvitor"
            id="event-invitor"
            placeholder="invitor"
            onChange={getEvents}
            value={eventObj.EventInvitor}
          />
        </div>
        <div className="e-count">
          <input
            type="text"
            name="EventCount"
            id="e-count"
            placeholder=" have you invites us before?"
            onChange={getEvents}
            value={eventObj.EventCount}
          />
        </div>
        <div className="btn">
          <button className="addEvent" onClick={addEvent}>
            submit event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
