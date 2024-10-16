import React from "react";
import "./Experience.css";
import { IoShieldCheckmark } from "react-icons/io5";

const Experience = () => {
  return (
    <section id="Experience">
      <h5> What Skills I have </h5>
      <h2> My Experience </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Front-End Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />

              <div>
                <h4> HTML </h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />
              <div>
                <h4> CSS </h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />
              <div>
                <h4> JavaScript </h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />
              <div>
                <h4> Bootstrap </h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />
              <div>
                <h4> React JS </h4>
                <small className="text-light"> Experienced  </small>
              </div>
            </article>

            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />
              <div>
                <h4> NEXT JS </h4>
                <small className="text-light"> Entry level Beginner </small>
              </div>
            </article>

            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />
              <div>
                <h4> Tailwind CSS </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />
              <div>
                <h4>React-Redux</h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3> Back-End Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />
              <div>
                <h4> Node JS </h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />
              <div>
                <h4> Express JS </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <IoShieldCheckmark className="experience__detail-icon" />
              <div>
                <h4> MongoDB </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
            <IoShieldCheckmark className="experience__detail-icon" />
            <div>
              <h4> Niginx </h4>
              <small className="text-light"> Entry level Beginner </small>
            </div>
          </article>
          <article className="experience__details">
            <IoShieldCheckmark className="experience__detail-icon" />
            <div>
              <h4> FireBase </h4>
              <small className="text-light"> Entry level Beginner </small>
            </div>
          </article>
          <article className="experience__details">
            <IoShieldCheckmark className="experience__detail-icon" />
            <div>
              <h4> AWS EC-2 </h4>
              <small className="text-light"> Entry level Beginner </small>
            </div>
          </article>
          <article className="experience__details">
            <IoShieldCheckmark className="experience__detail-icon" />
            <div>
              <h4>CI/CD  </h4>
              <small className="text-light"> Entry level Beginner </small>
            </div>
          </article>
          <article className="experience__details">
            <IoShieldCheckmark className="experience__detail-icon" />
            <div>
              <h4> System Design (HLD & LLD) </h4>
              <small className="text-light"> Entry level Beginner </small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
