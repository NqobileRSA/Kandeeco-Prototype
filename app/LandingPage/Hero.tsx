'use client';
import React, { useEffect, useState } from "react";

const slides = [
  {
    label: "Wedding Photography",
    title: "Capturing Love Stories With Artistry",
    image: "/assets/img1.jpg",
    button: "View Wedding Portfolio",
  },
  {
    label: "Authentic Moments",
    title: "Your Story, Beautifully Preserved",
    image: "/assets/img2.jpg",
    button: "Explore Our Work",
  },
  {
    label: "Professional Excellence",
    title: "Award-Winning Photography",
    image: "/assets/img3.jpg",
    button: "See Our Recognition",
  },
  {
    label: "Timeless Memories",
    title: "Photography That Tells Your Story",
    image: "assets/img4.jpg",
    button: "Start Your Journey",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />

            {/* Animated Hero Image */}
            <div
              className={`absolute top-0 right-0 w-[75%] h-full bg-cover bg-center transition-transform duration-[6s] ${
                index === currentSlide
                  ? "scale-100 skew-x-[-5deg] opacity-90"
                  : "scale-[1.05] skew-x-[-5deg] opacity-50"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            />

            {/* Text Content */}
            <div className="absolute top-1/2 left-32 transform -translate-y-1/2 z-20 max-w-[700px]">
              <div className="text-[#D4AF37] text-sm uppercase tracking-[8px] mb-6 flex items-center before:content-[''] before:w-10 before:h-[1px] before:bg-[#D4AF37] before:mr-6">
                {slide.label}
              </div>
              <h1 className="text-white text-6xl font-light leading-tight tracking-[-1px] mb-10">
                {slide.title}
              </h1>
              <a
                href="#work"
                className="inline-flex items-center px-14 py-6 border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white text-sm uppercase tracking-[4px] relative transition-all overflow-hidden group"
              >
                <span className="absolute inset-0 bg-[#D4AF37] transform -translate-x-full skew-x-[-25deg] group-hover:translate-x-0 transition-transform" />
                <span className="relative z-10 group-hover:text-black">
                  {slide.button}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex items-center gap-12 bg-black/60 p-4 px-8 backdrop-blur">
  {/* Previous Button */}
  <button
    onClick={handlePrev}
    className="bg-none border-none text-[#D4AF37] cursor-pointer px-2 py-1 opacity-60 transition-opacity duration-300 uppercase text-sm tracking-[3px] hover:opacity-100"
  >
    Previous
  </button>

  {/* Slide Counter */}
  <span className="text-white text-sm tracking-[3px]">
    {String(currentSlide + 1).padStart(2, "0")} — {String(slides.length).padStart(2, "0")}
  </span>

  {/* Next Button */}
  <button
    onClick={handleNext}
    className="bg-none border-none text-[#D4AF37] cursor-pointer px-2 py-1 opacity-60 transition-opacity duration-300 uppercase text-sm tracking-[3px] hover:opacity-100"
  >
    Next
  </button>
</div>

{/* Progress Bar */}
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37]/10">
  <div
    className="h-full bg-[#D4AF37] origin-left transition-transform duration-[5000ms]"
    style={{ transform: `scaleX(${(currentSlide + 1) / slides.length})` }}
  />
</div>


      {/* Bottom Info Section */}
      <div className="absolute bottom-12 left-32 z-20 grid grid-cols-2 gap-16 bg-black/60 p-8 backdrop-blur">
        <div>
          <h3 className="text-[#D4AF37] text-sm uppercase tracking-[4px] mb-3 flex items-center before:content-[''] before:w-5 before:h-[1px] before:bg-[#D4AF37] before:mr-4">
            Featured
          </h3>
          <p className="text-white text-lg">Luxury Brand Experience</p>
        </div>
        <div>
          <h3 className="text-[#D4AF37] text-sm uppercase tracking-[4px] mb-3 flex items-center before:content-[''] before:w-5 before:h-[1px] before:bg-[#D4AF37] before:mr-4">
            Recognition
          </h3>
          <p className="text-white text-lg">Grand Prix Cannes Lions 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
