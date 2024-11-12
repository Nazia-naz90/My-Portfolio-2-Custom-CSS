"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa"; 

const FooterSection = () => {
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

      return () => {
        window.removeEventListener("scroll", handleScroll);
        backToTopButton.removeEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      };
    }
  }, []);

  return (
    <footer className="footer">
      <h3 className="text-white pt-4" data-aos="fade-up">
        Portfolio
      </h3>
      <div className="link-group mt-5" data-aos="fade-up">
        <a href="# ">Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="../Portfolio">Portfolio</a>
        <a href="../ContactSection">Contact</a>
      </div>
      <div className="social-links mt-5" data-aos="fade-up">
        <button className="rounded-pill linkedin" title="LinkedIn">
          <FaLinkedin />
        </button>
        <button className="rounded-pill whatsapp" title="WhatsApp">
          <FaWhatsapp />
        </button>
        <button className="rounded-pill github" title="GitHub">
          <FaGithub />
        </button>
      </div>
      <hr className="text-muted my-4" />
      <p>Copyright 2024 Portfolio |Nazia Shoukat| All Rights Reserved </p>

      <button
        type="button"
        className="btn btn-floating btn-lg rounded-pill"
        id="btn-back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </footer>
  );
};

export default FooterSection;