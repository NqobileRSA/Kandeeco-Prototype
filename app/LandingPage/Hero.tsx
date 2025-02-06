"use client";
import React, { useEffect, useState } from "react";

const slides = [
  {
    topText: "CINEMATIC",
    bottomText: "& INNOVATIVE",
    description:
      "Creating Premium Commercial Films That Elevate Your Brand Through Strategic Storytelling and Creative Direction.",
    image: "/assets/img1.jpg",
    button: "VIEW SHOWREEL",
  },
  {
    topText: "VISUAL",
    bottomText: "& AUTHENTIC",
    description:
      "Transforming Brand Stories into Compelling Visual Narratives Through Professional Commercial Videography.",
    image: "/assets/img3.jpg",
    button: "EXPLORE WORK",
  },
  {
    topText: "PREMIUM",
    bottomText: "& PROGRESSIVE",
    description:
      "Delivering High-End Video Production Services That Capture Your Brand's Unique Vision and Values.",
    image: "/assets/img2.jpg",
    button: "START PROJECT",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#171717]  bg-gradient-to-r from-[rgba(52,62,72,0.72)] via-[rgba(70,68,69,1)] to-[#fe8429] bg-cover bg-center bg-no-repeat">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute rounded-lg p-8 top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[#343E48]/40 z-10" />

            {/* Background Image/Video */}
            <div
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[6s] ${
                index === currentSlide ? "scale-100" : "scale-110"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-24 z-20">
              <div className="max-w-4xl">
                {/* Main Heading */}
                <h1 className="flex flex-col">
                  <span className="text-[#FFFFFF] text-6xl md:text-8xl font-light tracking-wide mb-2">
                    {slide.topText}
                  </span>
                  <span className="text-[#FFFFFF] text-6xl md:text-8xl font-light tracking-wide">
                    {slide.bottomText}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-[#DCDCDC] text-lg md:text-xl font-light mt-8 mb-12 max-w-2xl leading-relaxed">
                  {slide.description}
                </p>

                {/* Button */}
                <a
                  href="#work"
                  className="inline-flex items-center px-10 py-4 border-2 border-[#FFFFFF] text-[#FFFFFF] text-sm tracking-[2px] hover:bg-[#FF852A] hover:border-[#FF852A] hover:text-[#FFFFFF] transition-all duration-300"
                >
                  {slide.button}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DCDCDC]/10">
        <div
          className="h-full bg-[#FF852A] origin-left transition-transform duration-[5000ms]"
          style={{ transform: `scaleX(${(currentSlide + 1) / slides.length})` }}
        />
      </div>
    </section>
  );
};

export default Hero;
