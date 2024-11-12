"use client";

import React, { useState } from "react";
import Image from "next/image";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (category: string) => {
    setFilter(category);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="heading text-center pt-5">
        <small>Creative Work</small>
        <h3>Check My Portfolio</h3>
      </div>

      <div id="myBtnContainer" className="text-center mt-4">
        <button className="filter-item" onClick={() => handleFilterClick("all")}>
          All
        </button>
        <button className="filter-item" onClick={() => handleFilterClick("game")}>
          Game
        </button>
        <button className="filter-item" onClick={() => handleFilterClick("app")}>
          App
        </button>
        <button className="filter-item" onClick={() => handleFilterClick("website")}>
          Website
        </button>
      </div>

      <div className="portfolio-body">
        <div className="row justify-content-evenly px-4">
          <div className={`post col-md-4 ${filter === "all" || filter === "game" ? "show" : "hide"} game all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
              <Image src="/images/Online-fashion-shop.jpeg" width={500} height={300} className="card-img-top" alt="2048 Game" />
              <div className="card-body text-center">
                <h4 className="card-title">Ecommerce Web</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">TypScript</span>
                <span className="badge bg-secondary badge-pill mb-2">Website</span>
                <span className="badge bg-secondary badge-pill mb-2">Next Js</span>
                <br />
                <a href="#" className="link">Read More</a>
              </div>
            </div>
          </div>
          <div className={`post col-md-4 ${filter === "all" || filter === "website" ? "show" : "hide"} website all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
              <Image src="/images/figma-tere-website-UI.jpeg " width={500} height={300} className="card-img-top" alt="Currency Converter App" />
              <div className="card-body text-center">
                <h4 className="card-title">Figma Tere Website</h4>
                <span className="badge bg-secondary badge-pill">NextJs</span>
                <span className="badge bg-secondary badge-pill">CustomCss</span>
                <span className="badge bg-secondary badge-pill mb-2">App</span>
                <br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div className={`post col-md-4 ${filter === "all" || filter === "webapp" ? "show" : "hide"} webapp all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
              <Image src="/images/food-web.png" width={500} height={300} className="card-img-top" alt="Dictionary App" />
              <div className="card-body text-center">
                <h4 className="card-title">Food Web</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">Website</span>
                <br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-evenly mt-4 px-4">
          <div className={`post col-md-4 ${filter === "all" || filter === "game" ? "show" : "hide"} game all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
              <Image src="/images/games.png" width={500} height={300} className="card-img-top" alt="PicEditor App" />
              <div className="card-body text-center">
                <h4 className="card-title">Game Apps</h4>
                <span className="badge bg-secondary badge-pill">NextJs</span>
                <span className="badge bg-secondary badge-pill">TelwindCss</span>
                <span className="badge bg-secondary badge-pill mb-2">Games</span>
                <br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div className={`post col-md-4 ${filter === "all" || filter === "website" ? "show" : "hide"} website all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
              <Image src="/images/to-dp-list.jpg" width={500} height={300} className="card-img-top" alt="TicTacToe Game" />
              <div className="card-body text-center">
                <h4 className="card-title">To Do List</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">App</span>
                <br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div className={`post col-md-4 ${filter === "all" || filter === "webapp" ? "show" : "hide"} all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
              <Image src="/images/learning-app.png" width={500} height={300} className="card-img-top" alt="Lang Translator App" />
              <div className="card-body text-center">
                <h4 className="card-title">Learning App</h4>
                <span className="badge bg-secondary badge-pill">NextJs</span>
                <span className="badge bg-secondary badge-pill">css</span>
                <span className="badge bg-secondary badge-pill mb-2">Api</span>
                <br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
