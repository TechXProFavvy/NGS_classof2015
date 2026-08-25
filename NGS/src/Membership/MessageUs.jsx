import React, { useContext, useEffect, useState } from "react";
import "../STYLES/globalstyle.css";

import { ProfileContext } from "../CONTENT/ProfileContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const MessageUs = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { activeUser } = useContext(ProfileContext);
  const getMessages = async () => {
    try {
      let res =
        (await fetch("http://localhost:8500/msg"))
      let data = await res.json();
      setMessages(data);
    } catch (error) {
      throw new Error("couldn't fetch messages from the browser");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMessages();
  }, []);
  async function clearMsg() {
    if (!confirm("Are you sure you want to clear?")) return;
    const response = await fetch(
      "http://localhost:8500/msg",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();
    if (!response.ok) return toast.error("Messages not deleted try again!");
    toast.success("messages cleared successfully");
  }
  if (loading) return <p className="loading">loading...</p>;

  return (
    <div className="Messages">
      <h1>Hello:{activeUser}</h1>
      {messages.length < 1 ? (
        <div>you have No messages</div>
      ) : (
        <div className="msg-card">
          {messages.map((item, index) => {
            return (
              <ul key={index}>
                <li>
                  <span>Sender:</span>
                  {item.name}
                </li>
                <li>
                  <span>Email:</span>
                  {item.email}
                </li>
                <li>
                  <span>Body:</span>
                  {item.msgBody}
                </li>
              </ul>
            );
          })}
        </div>
      )}
      {messages.length < 1 ? (
        <></>
      ) : (
        <button className="clear" onClick={clearMsg}>
          clear messages
        </button>
      )}
    </div>
  );
};

export default MessageUs;
