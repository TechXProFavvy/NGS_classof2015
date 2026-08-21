import React, { useContext } from "react";
import HomeStyles from "../STYLES/Home.module.css";
// import HeroLogo from "../assets/Great_A.png";
import { Navigate, NavLink } from "react-router-dom";
import IMAGES from "../assets/Images.js";
import AnimatedPages from "../CONTENT/AnimatedPages.jsx";
import { ProfileContext } from "../CONTENT/ProfileContext.jsx";
const Home = () => {
  const { activeUser } = useContext(ProfileContext);
  return (
    <AnimatedPages>
      <div className={HomeStyles.Home}>
        <h1>Welcome legends! aka great achievers - ngs class of 2015</h1>
        <section className={HomeStyles.hero}>
          <div className={HomeStyles.text}>
            <h1>Empowering the Next Generation of Leaders</h1>
            <h3>
              Connect, inspire, and grow with the Great Achievers community.
              Together, we turn ambition into impact.
            </h3>
            {activeUser == "Guest" ? (
              <NavLink to="/login">Explore</NavLink>
            ) : (
              <NavLink to="/members/dashboard">Go to Dashboard</NavLink>
            )}
          </div>
          <div className={HomeStyles.image}>
            <img src={IMAGES.IMG} alt="second-Logo" />
          </div>
        </section>
      </div>
    </AnimatedPages>
  );
};

export default Home;
