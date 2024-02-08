import React from "react";
import "./Portfolio.css";
import Qtrip from "../../Assets/Qtrip-static.png";
import Xboard from "../../Assets/Xboard.png";
import Qkart from "../../Assets/Qkart.png";
import Qtify from "../../Assets/qtify.png";

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5> My Recent Works </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={Qtrip} alt="qtrip" />
           
          </div>
          <h3> This is the Title </h3>
          <div className="portfolio__item-cta">
          
          <a href="https://github.com" className="btn">Github</a>
          <a
            href="https://local.host.com"
            className="btn btn-primary"
            target="blank"
          >
            Live Demo
          </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
