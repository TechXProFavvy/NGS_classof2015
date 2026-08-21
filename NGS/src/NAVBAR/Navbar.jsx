import React, { useContext, useEffect, useState } from "react";
import menuBar from "../assets/bars-solid.png";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../App.css";
import { LoginContext } from "../CONTENT/Global";
import { ProfileContext } from "../CONTENT/ProfileContext";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(true);
  const location = useLocation();
  const { activeUser } = useContext(ProfileContext);

  useEffect(() => {
    setSideBar(true);
  }, [location, setSideBar]);

  const handleBar = (e) => {
    e.preventDefault();

    setSideBar((prev) => !sideBar);
  };

  return (
    <div className="NavBar">
      <header className={sideBar === true ? "Navbar" : "hide"}>
        <nav className="logo">
          <Link to="/">Great Achievers</Link>
        </nav>
        <nav className="links">
          <NavLink to="">home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/members">members</NavLink>
          <NavLink to="/contactus">contact us</NavLink>
          <div
            className={
              activeUser === "Guest" ? "profile-offline" : "profile-online"
            }
            onClick={() => window.location.reload()}
          >
            Active:{activeUser}
          </div>
        </nav>
      </header>
      <div className="menubar">
        <button onClick={handleBar}>
          <img src={menuBar} alt="Menu bar" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
