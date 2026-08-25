import React, { useEffect, useState } from "react";
import AnimatedPages from "../CONTENT/AnimatedPages";
import { useLocation } from "react-router-dom";
import "../STYLES/MemberStyle.css";
import { NavLink, Outlet } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaBell, FaCreditCard } from "react-icons/fa";
import { MdDashboard, MdEvent } from "react-icons/md";
import MemGallery from "../Membership/MemGallery";
const Members = () => {
  const [eventCount, setEventCount] = useState(0);
  const [msg, setMsg] = useState(0);
  const location = useLocation();
  const activePath = location.pathname.split("/").filter(Boolean).pop();

  useEffect(() => {
    fetch(
      "http://localhost:8500/event",
    )
      .then((res) => res.json())
      .then((data) => {
        setEventCount(data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(
      "http://localhost:8500/msg",
       
    )
      .then((res) => res.json())
      .then((data) => {
        setMsg(data.length);
        console.log(msg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <AnimatedPages>
      <div className="Members">
        <aside className="sidebar-sect">
          <h1>Menu</h1>
          <div className="navi">
            <NavLink to="notifications" title="notification">
              <p>Notifications </p>
              <FaBell className="icon" />
              <span>0</span>
            </NavLink>
            <NavLink to="contributions" title="add payment">
              <p>add payment </p>
              <FaCreditCard className="icon" />
            </NavLink>
            <NavLink to="messages" title="view messages">
              <p>messages </p>
              <FaEnvelope className="icon" />
              <span>{msg}</span>
            </NavLink>
            <NavLink to="events" title="view events">
              <p>events </p>
              <MdEvent className="icon" />
              <span>{eventCount}</span>
            </NavLink>
            <NavLink to="dashboard" title="Dashboard">
              <p>Dashboard </p>
              <MdDashboard className="icon" />
            </NavLink>
          </div>
        </aside>
        <section className="member-details">
          <h2>{activePath}</h2>
          <div className="table">
            {activePath != "members" ? <Outlet /> : <MemGallery />}
          </div>
        </section>
      </div>
    </AnimatedPages>
  );
};

export default Members;
