import React from "react";
import AboutStyles from "../STYLES/About.module.css";
import { AboutText } from "../Apis/About.js";
import VisionImg from "../assets/vision.png";
import whoweAre from "../assets/hatIMG.jpg";
import Unity from "../assets/unity.png";
import AnimatedPages from "../CONTENT/AnimatedPages.jsx";

const About = () => {
  return (
    <AnimatedPages>
      <div className={AboutStyles.About}>
        <h1>{AboutText.website.heading}</h1>
        <h2>{AboutText.website.introduction}</h2>
        <div className={AboutStyles.cards}>
          <div className={AboutStyles.card}>
            <section className={AboutStyles.section}>
              <h3>Vision</h3>
              <p>{AboutText.website.vision}</p>
            </section>
            <div className={AboutStyles.cardImg}>
              <img src={VisionImg} alt="VisionImage" loading="lazy" />
            </div>
          </div>
          {/* First card */}
          <div className={AboutStyles.card}>
            <div className={AboutStyles.cardImg}>
              <img src={whoweAre} alt="who We are" loading="lazy" />
            </div>
            <section className={AboutStyles.section}>
              <h3>Who we are!</h3>
              <p>{AboutText.website.whoWeAre}</p>
            </section>
          </div>
        </div>
        <div className={AboutStyles.Pillars}>
          <h1>Pillars</h1>
          {AboutText.website.pillars.map((text, index) => {
            return (
              <div className={AboutStyles.list}>
                <section className={AboutStyles.Text}>
                  {
                    <h3 key={index + 1}>
                      {text.name}! {text.icon}
                    </h3>
                  }
                  {<li key={index + 2}>{text.description}</li>}
                </section>
              </div>
            );
          })}
          <section className={AboutStyles.desc}>
            <img src={Unity} alt="unity" />
          </section>
        </div>
      </div>
    </AnimatedPages>
  );
};

export default About;
