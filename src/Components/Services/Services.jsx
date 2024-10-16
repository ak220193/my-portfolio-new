import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="Services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
        {/* UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating seamless and visually appealing user interfaces for both web and mobile platforms.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing user experiences that focus on usability, accessibility, and the overall customer journey.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing and prototyping using tools like Figma, Adobe XD, and Sketch to visualize user flows.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Using AI-driven design tools like <strong>Uizard</strong> and <strong>Figma's AI plugins</strong> to speed up prototyping and improve design quality.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing responsive layouts and interactive elements using tools like Figma, Adobe Photoshop, and other online AI design platforms.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing scalable and secure RESTful APIs and integrating third-party services for enhanced functionality.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Working with No-Code platforms like <strong>Wix Studio</strong> and <strong>WordPress</strong> for fast deployment and CMS-driven projects.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating dynamic front-end interfaces with React.js, ensuring responsive and mobile-friendly design.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Using Git for version control and collaborating through GitHub for seamless team workflows.</p>
            </li>
          </ul>
        </article>

        {/* Content Creation & Digital Marketing */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation & Digital Marketing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating engaging content for blogs, social media, and websites with a focus on SEO optimization.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Utilizing AI tools like <strong>ChatGPT</strong> for writing, generating ideas, and improving content quality.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Using <strong>Namelix</strong> for generating brand names, logos, and other creative assets for digital presence.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimizing YouTube content using <strong>YouTube Studio</strong>, including video editing, captions, and analytics.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Conducting digital marketing campaigns across platforms such as Google Ads, Facebook, Instagram, and LinkedIn.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Managing SEO strategies, keyword research, and content distribution to improve online visibility and engagement.</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  );
};

export default Services;
