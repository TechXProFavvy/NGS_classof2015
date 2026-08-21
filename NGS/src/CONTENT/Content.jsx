import React from "react";
import "../App.css";
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import Home from "../PAGES/Home";
import About from "../PAGES/About";
import ContactUs from "../PAGES/ContactUs";
import { Auth } from "../Auth/Auth";
import Members from "../PAGES/Members";
import { AnimatePresence } from "framer-motion";
import Protected from "./Protected";
import Dashboard from "../Membership/Dashboard";
import Contributions from "../Membership/Contributions";
import MessageUs from "../Membership/MessageUs";
import EventsSchedule from "../Membership/Events";
import Notify from "../Membership/Notify";
import ProtectedMemPage from "../Auth/ProtectedMemPage";
import EventForm from "../Membership/EventForm";

const Content = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Auth />} />

        <Route element={<Protected />}>
          <Route path="/members" element={<Members />}>
            <Route element={<ProtectedMemPage />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="contributions" element={<Contributions />} />
              <Route path="eventform" element={<EventForm />} />
            </Route>

            <Route path="notifications" element={<Notify />} />
            <Route path="events" element={<EventsSchedule />} />
            <Route path="messages" element={<MessageUs />} />
          </Route>
        </Route>

        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Content;
