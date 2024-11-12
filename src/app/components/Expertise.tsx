import React from 'react';
import { FaPaintBrush, FaUserAlt, FaMobileAlt } from 'react-icons/fa';

const Expertise = () => {
  return (
    <section className="expertise" id="service">
      <div className="heading">
        <small>My Expertise</small>
        <h3>
          Providing a Wide Range of <br />
          Digital Services
        </h3>
      </div>
      <div className="service-cards">
        <div className="service-card" data-aos="fade-up">
          <div className="icon-circle">
            <FaPaintBrush size={40} color="#333" />
          </div>
          <div className="content">
            <h4>Web Design</h4>
            <p className="text-muted">
              Creating visually engaging and user-friendly websites that align with modern design principles and aesthetics.
            </p>
            <a href="#" className="link">Read More</a>
          </div>
        </div>

        <div className="service-card" data-aos="fade-up">
          <div className="icon-circle">
            <FaUserAlt size={40} color="#333" />
          </div>
          <div className="content">
            <h4>UI/UX Design</h4>
            <p className="text-muted">
              Designing intuitive user interfaces and experiences to ensure user satisfaction and seamless interaction.
            </p>
            <a href="#" className="link">Read More</a>
          </div>
        </div>

        <div className="service-card" data-aos="fade-up">
          <div className="icon-circle">
            <FaMobileAlt size={40} color="#333" />
          </div>
          <div className="content">
            <h4>Responsive Design</h4>
            <p className="text-muted">
              Optimizing layouts to be mobile-friendly, ensuring consistent usability across all device types.
            </p>
            <a href="#" className="link">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
