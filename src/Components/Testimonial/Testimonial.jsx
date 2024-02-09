import React from "react";
import "./Testimonial.css";
import User1 from "../../Assets/artist-white.jpg";
import User2 from "../../Assets/image2 2.jpg";
import User3 from "../../Assets/man-with-his-arms-crossed.jpg";
import User4 from "../../Assets/image4.jpg";



const data = [
  {
    image: User1,
    name: "Shiva Mongia",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in blanditiis? Error, molestiae cum culpa accusamus dolores est aliquid temporibus debitis excepturi exercitationem pariatur dolor ipsum esse voluptatem aspernatur ipsa?",
  },
  {
    image: User2,
    name: "Esabella",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in blanditiis? Error, molestiae cum culpa accusamus dolores est aliquid temporibus debitis excepturi exercitationem pariatur dolor ipsum esse voluptatem aspernatur ipsa?",
  },
  {
    image: User3,
    name: "Shakuth",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in blanditiis? Error, molestiae cum culpa accusamus dolores est aliquid temporibus debitis excepturi exercitationem pariatur dolor ipsum esse voluptatem aspernatur ipsa?",
  },
  {
    image: User4,
    name: "Nazima",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in blanditiis? Error, molestiae cum culpa accusamus dolores est aliquid temporibus debitis excepturi exercitationem pariatur dolor ipsum esse voluptatem aspernatur ipsa?",
  },
]

const Testimonial = () => {
  return (
    <section id="Testimonial">
      <h5> Review from Clients </h5>
      <h2> Testimonials </h2>

      <div className="container testomonials__container">
      {
        data.map(({ image, name, review }) => {
          return (
            <article className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client-name">{name}</h5>
              <p className="client-review">{review}</p>
            </article>
          );
        })
      }
      </div>
    </section>
  );
};

export default Testimonial;
