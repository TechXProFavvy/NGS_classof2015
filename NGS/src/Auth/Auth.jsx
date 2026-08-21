import React, { createContext, useContext, useEffect, useState } from "react";
import usersCreds from "../Auth/Users.json";
import { REG_USERS } from "./MembersCred";
import "../STYLES/AuthStyle.css";
import { toast } from "react-toastify";
import { Navigate, replace, useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../CONTENT/Global";
import { ProfileContext } from "../CONTENT/ProfileContext";

export const Auth = () => {
  const [formType, setFormType] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthorized, setIsAuthorized } = useContext(LoginContext);
  const { activeUser, setActiveUser } = useContext(ProfileContext);


  async function submitFormData(e) {
    e.preventDefault();
    let accessUser = {
      username: username.toLowerCase().trim(),
      password: password.trim(),
    };

    let logName = REG_USERS.find((logger) => {
      if (
        (logger.name.toLowerCase() === accessUser.username) &
        (logger.password === accessUser.password)
      ) {
        return logger.name;
      } else return false;
    });
    if (!logName) {
      toast.error(`invalid Credentials`);
    } else {
      setActiveUser(`${logName.name}`)
      setIsAuthorized(true);
      navigate("/members", { replace: true });
      toast.success(`${logName.name} ! Loggedin successfully !`);
    }
  }
  return (
    <div className="Authorize">
      <div className="form">
        <form autoComplete="off">
          <h1>{formType}</h1>

          <section className="username">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </section>
          <section className="password">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </section>

          <section className="authenticate">
            <div className="login">
              <button data-text="signin" onClick={submitFormData}>
                signin
              </button>
            </div>
          </section>
        </form>
      </div>
      <div className="text">
        <div className="message-section">
          <h2>Welcome to the Home of Great Achievers</h2>
          <p>
            Here, we do not just set goals—we work together to surpass them. Log
            in today to sync with your team, share your latest ideas, and take
            your next big step toward excellence.
          </p>
        </div>

        <div className="message-section">
          <h2>Connect & Grow</h2>
          <p>
            Every great milestone begins with a single connection. By joining
            Great Achievers, you are stepping into a community dedicated to
            growth, innovation, and mutual support. Sign in now to unlock your
            potential.
          </p>
        </div>
      </div>
    </div>
  );
};
