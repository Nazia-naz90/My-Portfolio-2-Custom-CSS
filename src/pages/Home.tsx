'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';


const HomeSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = contentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          element.classList.add('animate-slide-right');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-row">
        <div className="home-content hidden-on-load" ref={contentRef}>
          <h2 className="home-heading">
            Hello! I Am <br />
            <span className="highlight-text">Nazia Shoukat</span>
          </h2>
          <p className="home-description">
            I&apos;m a Web Developer with 1 years of experience, 
            specializing in creating fully responsive websites, including Frontend development.
          </p>
          <button className="h-btn">Hire Me</button>
        </div>
        <div className="home-image-container">
          <Image src={"/images/mypic.jpg"} className="home-image" alt="Nazia's Portfolio Banner" 
          width={300}
          height={300}/>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

