import React from "react";
import fillerImg2 from "../assets/Filler2.png"
import leaf2 from "../assets/Leaf2.png"


const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2>About us</h2>
            <p>
              At DormMate, we believe that managing dorm life should be simple,
              seamless, and accessible to everyone. Whether you're a dormer, a
              transient or a dorm admin, our platform is designed to put you in
              control. We provide an all-in-one solution for handling everything
              from filing permits, managing room availability and transient
              bookings—whenever and wherever you need it.
            </p>
          </div>
          <div>
            <img src={fillerImg2} className="filler-img2" alt="filler-image" />
          </div>
        </div>
        <img src={leaf2} alt="" className="leaf2-img"/>
      </section>
    </>
  );
};

export default About