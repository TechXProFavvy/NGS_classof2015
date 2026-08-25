import React, { useEffect, useState } from "react";
import "../STYLES/globalstyle.css";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { Navigate, NavLink, Link, data } from "react-router-dom";
import { MdDeleteOutline, MdDelete, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import "../STYLES/globalstyle.css";

const EventsSchedule = () => {
  const [activeEvents, setActiveEvents] = useState([]);
  const [loading, setLoding] = useState(true);
  useEffect(() => {
    async function eventReq() {
      try {
        let res = await fetch(
          "http://localhost:8500/event" ||
            "https://ngs-classof2015-api.onrender.com/event",
        );
        if (!res.ok) {
          toast.error("Something went wrong!");
          throw new Error(`Error in fetching Events`);
        }
        let data = await res.json();
        setActiveEvents(data);
      } catch (err) {
        console.log(`Error in fetching Events: ${err}`);
      } finally {
        setLoding(false);
      }
    }
    eventReq();
  }, []);
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response =
        (await fetch(`http://localhost:8500/event/${id}`, {
          method: "DELETE", // Specify the method
        })) ||
        fetch(`https://ngs-classof2015-api.onrender.com/${id}`, {
          method: "DELETE", // Specify the method
        });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Delete failed");
      }

      toast.success("Event Removed successfully");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  if (loading) return <h4 className="loading">loading...</h4>;

  return (
    <div className="Event-container">
      {activeEvents.length < 1 ? (
        <h3 className="msg">You have no scheduled events</h3>
      ) : (
        <div className="event-table">
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>event</th>
                <th>invitor</th>
                <th>location</th>
                <th>date</th>
                <th>invited us Previously</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {activeEvents.map((event, index) => {
                return (
                  <tr key={event._id}>
                    <td>{index + 1}</td>
                    <td>{event.EventName}</td>
                    <td>{event.EventInvitor}</td>
                    <td>{event.EventVenue}</td>
                    <td>{event.EventDate}</td>
                    <td>{event.EventCount}</td>
                    <td className="del">
                      <MdDeleteForever
                        className="del-ic"
                        onClick={() => handleDelete(event._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="e-card">
            {activeEvents.map((card, index) => {
              return (
                <ol key={card._id}>
                  <li>
                    <span>s/n</span>
                    {index + 1}
                  </li>
                  <li>
                    <span>event</span>
                    {card.EventName}
                  </li>
                  <li>
                    <span>invitor</span>
                    {card.EventInvitor}
                  </li>
                  <li>
                    <span>location</span>
                    {card.EventVenue}
                  </li>
                  <li>
                    <span>date</span>
                    {card.EventDate}
                  </li>
                  <li>
                    <span>invited us Previously</span>
                    {card.EventCount}
                  </li>
                  <li
                    className="del"
                    title="delete-event"
                    onClick={() => handleDelete(card._id)}
                  >
                    <span>action</span>
                    <MdDeleteForever className="del-ic" />
                  </li>
                </ol>
              );
            })}
          </div>
        </div>
      )}

      <div className="events-scedule">
        <NavLink to="/members/eventform" className="addEvents">
          <FaPlus /> add Events
        </NavLink>
      </div>
    </div>
  );
};

export default EventsSchedule;
