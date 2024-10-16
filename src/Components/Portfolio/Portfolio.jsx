import React from "react";
import "./Portfolio.css";
import Qtrip from "../../Assets/Qtrip-static.png";
import Xboard from "../../Assets/Xboard.png";
import Qkart from "../../Assets/Qkart.png";
import Qtify from "../../Assets/qtify.png";
import Bistro from "../../Assets/food .jpg";
import Tattoo from "../../Assets/tattoo.avif"
import Lawfrimland from "../../Assets/law.jpg";


<p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>;

//  Data Array for Map Function

const data = [
  {
    id: 1,
    image: Qtrip,
    title: "Qtrip Travel Website",
    github: "https://github.com/ak220193",
    demo: "https://qtriptest1.netlify.app/",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },

  {
    id: 2,
    image: Qtrip,
    title: " Qtrip -- dynamic version",
    github: "https://github.com/ak220193",
    demo: "https://qtrip-dyamic-frontend1.netlify.app/",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },

  {
    id: 3,
    image: Xboard,
    title: "Xboard- NewsFeed",
    github: "https://github.com/ak220193",
    demo: "https://crionewsfeedsite.netlify.app/",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },

  {
    id: 4,
    image: Qkart,
    title: "Qkart-Ecommerce",
    github: "https://github.com/ak220193",
    demo: "https://akash-qkart-frontend-main.vercel.app/",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },

  {
    id: 5,
    image: Qtify,
    title: "Music-app concept",
    github: "https://github.com/ak220193",
    demo: "https://qtify-crio-six.vercel.app/",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },

  {
    id: 6,
    image: Bistro,
    title: "Spicy-Bistro",
    github: "https://github.com/ak220193",
    demo: "https://spice-bistro-ak-react-project.netlify.app/",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },

  {
    id: 7,
    image: Tattoo,
    title: "Mirror Tattoos",
    github: "https://github.com/ak220193",
    demo: "https://mirror-final.vercel.app/",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },
  {
    id: 8,
    image: Lawfrimland,
    title: "Lawfirm website",
    github: "https://github.com/ak220193",
    demo: "https://lawfirm-landingpage.vercel.app",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },
  
];

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5> My Recent Works </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="details">
                <h3> {title} </h3>
                <p> {description}</p>
              </div>

              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
