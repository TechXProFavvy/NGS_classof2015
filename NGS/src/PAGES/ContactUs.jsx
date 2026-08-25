import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedPages from "../CONTENT/AnimatedPages";
import "../STYLES/ContactUs.css";
import ContactUsImg from "../assets/vision.png";
import { toast } from "react-toastify";
import { FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";
import { MdCheck, MdChecklist } from "react-icons/md";
import axios from "axios";

const ContactUs = () => {
  const [body, setBody] = useState({
    name: "",
    email: "",
    msgBody: "",
  });

  async function postMessages(e) {
    e.preventDefault();
    window.navigator.vibrate(50);
    if (!body.name & !body.email)
      return toast.warn("message must not be empty");
    console.log(body);

    try {
      const response = await axios.post(
        "https://ngs-classof2015-api.onrender.com/msg",

        body,
      );
      toast.success("Message sent !");
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      toast.error(`Something went wrong ${error}`);
    }
  }
  const getMessages = (e) => {
    let { name, value } = e.target;
    setBody((prv) => ({
      ...prv,
      [name]: value,
    }));
  };

  return (
    <AnimatedPages>
      <div className="Contactus">
        <section className="Message-Us">
          <div className="message">
            <form onSubmit={postMessages}>
              <h1>Send A Message</h1>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={body.name}
                onChange={getMessages}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="name@example.com"
                value={body.email}
                onChange={getMessages}
              />
              <textarea
                name="msgBody"
                id="msgBody"
                placeholder="Enter your message"
                value={body.msgBody}
                onChange={getMessages}
                maxLength={200}
              ></textarea>
              <input type="submit" value="Send" id="send" />
            </form>
          </div>
          <div className="image">
            <div className="photo">
              <img src={ContactUsImg} alt="Image" />
            </div>
            <div className="text">
              <h1>hello legend!</h1>
              <h3>
                We would love to hear from you. Please fill out the form or
                reach us using our direct details.
              </h3>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPages>
  );
};

export default ContactUs;
