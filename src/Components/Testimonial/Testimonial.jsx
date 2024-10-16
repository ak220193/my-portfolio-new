import React from "react";
import "./Testimonial.css";
import User1 from "../../Assets/artist-white.jpg";
import User2 from "../../Assets/image2 2.jpg";
import User3 from "../../Assets/man-with-his-arms-crossed.jpg";
import User4 from "../../Assets/image4.jpg";

// Swiper import modules
import { Pagination, Autoplay } from "swiper"; // Corrected import
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: User1,
    name: "Shiva Mongia",
    review:
      "Akash was an absolute pleasure to work with. He took the time to understand our vision and delivered a fantastic web application that exceeded our expectations. His knowledge of the MERN stack and attention to detail is unparalleled!"
  },
  {
    image: User2,
    name: "Esabella",
    review:
      "I highly recommend Akash for any web development project. He was able to bring our ideas to life quickly and efficiently. His expertise in React.js and backend development made the whole process seamless. Truly an exceptional developer!"
  },
  {
    image: User3,
    name: "Shakuth",
    review:
      "Working with Akash was a game changer for our project. He provided innovative solutions and ensured that everything was optimized for performance. We were extremely impressed with his professionalism and the quality of his work!"
  },
  {
    image: User4,
    name: "Nazima",
    review:
      "Akash delivered beyond what we anticipated. His responsiveness, creativity, and dedication to quality were outstanding. He made sure every aspect of the project was executed flawlessly. I couldn’t be happier with the results!"
  }
];

const Testimonial = () => {
  return (
    <section id="Testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination, Autoplay]}  
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}  
        autoplay={{ delay: 5000, disableOnInteraction: false }}  
        loop={true}
        className="container testimonials__container"
      >
        {data.map(({ image, name, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={image} alt={name} />
            </div>
            <h5 className="client-name">{name}</h5>
            <p className="client-review">{review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
