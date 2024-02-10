import React from "react";
import "./Testimonial.css";
import User1 from "../../Assets/artist-white.jpg";
import User2 from "../../Assets/image2 2.jpg";
import User3 from "../../Assets/man-with-his-arms-crossed.jpg";
import User4 from "../../Assets/image4.jpg";

// swiper import modules

// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: User1,
    name: "Shiva Mongia",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in blanditiis? Error, molestiae cum culpa accusamus dolores est aliquid temporibus debitis excepturi exercitationem pariatur dolor ipsum esse voluptatem aspernatur ipsa?"
  },
  {
    image: User2,
    name: "Esabella",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in blanditiis? Error, molestiae cum culpa accusamus dolores est aliquid temporibus debitis excepturi exercitationem pariatur dolor ipsum esse voluptatem aspernatur ipsa?"
  },
  {
    image: User3,
    name: "Shakuth",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in blanditiis? Error, molestiae cum culpa accusamus dolores est aliquid temporibus debitis excepturi exercitationem pariatur dolor ipsum esse voluptatem aspernatur ipsa?"
  },
  {
    image: User4,
    name: "Nazima",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in blanditiis? Error, molestiae cum culpa accusamus dolores est aliquid temporibus debitis excepturi exercitationem pariatur dolor ipsum esse voluptatem aspernatur ipsa?"
  }
];

const Testimonial = () => {
  return (
    <section id="Testimonial">
      <h5> Review from Clients </h5>
      <h2> Testimonials </h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: false }}
        autoplay={{ delay: 20 }}
        loop={true}
        className="container testomonials__container"
      >
        {data.map(({ image, name, review }) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client-name">{name}</h5>
              <p className="client-review">{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
