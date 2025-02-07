"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    label: "CINEMATIC & INNOVATIVE",
    title: "Elevating Brands Through Storytelling",
    description:
      "Creating Premium Commercial Films That Elevate Your Brand Through Strategic Storytelling and Creative Direction.",
    image: "/assets/img1.jpg",
    button: "VIEW SHOWREEL",
  },
  {
    label: "VISUAL & AUTHENTIC",
    title: "Transforming Stories into Captivating Narratives",
    description:
      "Professional videography that turns your brand's essence into compelling visual narratives.",
    image: "/assets/img3.jpg",
    button: "EXPLORE WORK",
  },
  {
    label: "PREMIUM & PROGRESSIVE",
    title: "Unleashing Creative Excellence",
    description:
      "High-end video production tailored to capture your brand’s unique vision and values.",
    image: "/assets/img2.jpg",
    button: "START PROJECT",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section
      className="relative h-screen overflow-hidden bg-[#343e4856]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Background Image with Zoom Effect */}
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />

                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#343E48]/90 via-[#343E48]/70 to-transparent" /> */}

                <div className="relative h-full bg-[#17171772]  bg-gradient-to-r from-[rgba(21,25,29,0.72)] via-[#46444527] to-[#fe852910]" />

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-24">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative max-w-3xl"
                  >
                    {/* Label */}
                    <div className="text-[#FF852A] text-sm tracking-[0.25em] mb-4 flex items-center">
                      <div className="h-px w-12 bg-[#FF852A] mr-4" />
                      {slide.label}
                    </div>

                    {/* Title */}
                    <h1 className="text-white text-5xl md:text-7xl font-light leading-tight mb-6">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-[#DCDCDC] text-lg md:text-xl font-light mb-8 max-w-xl leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Button */}
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="relative px-10 py-4 bg-transparent border border-[#FF852A] text-white text-sm tracking-[0.25em] overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-[#FF852A] transition-transform translate-x-[-100%] group-hover:translate-x-0 duration-300" />
                      <span className="relative z-10 group-hover:text-[#343E48]">
                        {slide.button}
                      </span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (currentSlide + 1) / slides.length }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-[#FF852A] origin-left"
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#FF852A] w-6" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
