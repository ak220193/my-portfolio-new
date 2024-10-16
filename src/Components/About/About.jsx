import React from "react";
import "./About.css";
import Image2 from "../../Assets/mypic.png";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { GoProjectSymlink } from "react-icons/go";

const About = () => {
  return (
    <section id="About">
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me image">
            <img src={Image2} alt="image2"  />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience </h5>
              <small> 1+ years of Experience </small>
            </article>
            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5> Clients </h5>
              <small> 100+ clients </small>
            </article>
            <article className="about__card">
              <GoProjectSymlink className="about__icon" />
              <h5> Projects </h5>
              <small> 20+ projects </small>
            </article>
          </div>

          <p>
          I’m Akash, a passionate MERN Stack Developer with 1+ years of experience building cutting-edge web applications. From crafting dynamic user interfaces with React.js to developing robust backends with Node.js and MongoDB, I love bringing ideas to life using the latest technologies.

          Having worked with over 100+ clients and delivered 20+ projects, I’m driven by creating clean, scalable code and solutions that make an impact.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
