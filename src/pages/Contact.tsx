"use client";

import { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa"; 

const ContactSection = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById("btn-back-to-top");

    if (backToTopButton) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      };

      window.addEventListener("scroll", handleScroll);

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
        backToTopButton.removeEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      };
    }
  }, []);

  return (
    <section className="contact py-5" id="contact">
      <div className="heading text-center">
        <small>Get in Touch</small>
        <h3>Any Questions? Feel Free to Contact</h3>
      </div>
      <div className="row justify-content-evenly mt-5">
        <div className="col-md-5 col-10 contact-details" data-aos="slide-right">
          <div className="row justify-content-evenly">
            <div className="col-1">
              <FaMapMarkerAlt size={30} />
            </div>
            <div className="col-11">
              <p> Korangi {"No:01"}, Sec-32/B Karachi, Pakkstan</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <FaPhoneAlt size={30} />
            </div>
            <div className="col-11">
              <p>+92 3193539706</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <FaEnvelope size={30} />
            </div>
            <div className="col-11">
              <p>nazianazshouakt90@gmail.com</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <FaGlobe size={30} />
            </div>
            <div className="col-11">
              <p>coding.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
          <div className="contact-form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="E-mail"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Mobile No."
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="submit-btn">
            <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
              Submit
            </button>
            </div>

          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-floating btn-lg rounded-pill"
        id="btn-back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </section>
  );
};

export default ContactSection;