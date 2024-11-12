'use client'; 

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  

const SkillSection = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <section className="skill mt-5 py-5" id="about">
  <div className="row justify-content-evenly align-items-center">
    
    <div className="col-10 col-md-6 skill-with-progress" data-aos="slide-right">
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6">
          <div className="progress-card ms-3 ms-md-0">
            <div className="circular-progress html-css">
              <span className="progress-value html-progress">80%</span>
            </div>
            <br />
            <span className="text">HTML & CSS</span>
          </div>
        </div>
        <div className="col-10 col-md-6 mt-4 mt-md-0">
          <div className="progress-card ms-3 ms-md-0">
            <div className="circular-progress javascript">
              <span className="progress-value javascript-progress">75%</span>
            </div>
            <br />
            <span className="text">JavaScript</span>
          </div>
        </div>
      </div>
      <div className="row justify-content-evenly mt-4">
        <div className="col-10 col-md-6">
          <div className="progress-card ms-3 ms-md-0">
            <div className="circular-progress php">
              <span className="progress-value php-progress">70%</span>
            </div>
            <br />
            <span className="text">NextJs</span>
          </div>
        </div>
        <div className="col-10 col-md-6 mt-4 mt-md-0">
          <div className="progress-card ms-3 ms-md-0">
            <div className="circular-progress reactjs">
              <span className="progress-value reactjs-progress">40%</span>
            </div>
            <br />
            <span className="text">Python</span>
          </div>
        </div>
      </div>
    </div>
    <div className="col-10 col-md-6 skill-detail" data-aos="slide-left">
      <div className="heading">
        <small>My Skills</small>
        <h3>Beautiful & Unique Digital Experiences</h3>
        <p className="text-muted">
          I strive to create beautiful and intuitive digital experiences that connect users to the content they need.
        </p>
        <p className="text-muted">
          Through my expertise in web development, I bring together creativity and technical skills to deliver seamless, 
          user-friendly solutions.
        </p>
        <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
          <a
            href="Entry Level Web Developer Resume.pdf"
            download="SampleCV"
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default SkillSection;