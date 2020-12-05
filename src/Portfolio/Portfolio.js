import React, { useState } from "react";
import App from "../App.css";
import logo from "../images/me.jpg";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";
import { FaLinkedin } from "react-icons/fa";
import gif from "../images/premierleague1.gif";

const Portfolio = () => {
  return (
    <>
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1>Hi, I'm Adam Lang</h1>
          </div>
        </div>
      </section>

      <section className="s2">
        <div className="main-container">
          <h2>
            <strong>About</strong>
          </h2>
          <img id="profile_pic" alt="" src={logo} />
          <h3 id="quote">
            I am a software developer who studied app development in Stockholm
            where I graduated in May 2020. <br /> I like to build projects to
            keep my brain going and learn new things.
            <br />
            <br /> I am currently working as a web developer at{" "}
            <a href="https://animech.com/en/" target="_blank">
              Animech
            </a>{" "}
            where I'm working with React and a WordPress
            <br /> backend and will in the future start working with 3D
            configuration.
          </h3>
          <div id="line-divider" />
          <h4>Skills</h4>

          <div id="skills-container">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React & React Native</li>
              <li>Swift</li>
              <li>UX/UI</li>
            </ul>

            <ul>
              <li>Firebase</li>
              <li>Object Oriented Programming</li>
              <li>C#</li>
              <li>Java</li>
              <li>Xamarin</li>
              <li>GIT</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section className="s3">
        <div className="main-container">
        </div>
      </section> */}

      <section className="s4">
        <div className="main-container">
          <h3 style={{ textAlign: "center" }}>
            Find me on LinkedIn or send me an email.
          </h3>
          <SocialMedia />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
