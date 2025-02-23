import React from "react";

const ContactHero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden pt-16" role="banner">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1F24]/90 to-[#1A1F24] z-10" />
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105 transform hover:scale-100 transition-transform duration-700"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/assets/ciroc.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-20">
        <div
          className="flex items-center space-x-4 text-[#FF852A] text-sm tracking-[0.4em] mb-8 opacity-90"
          role="text"
          aria-label="Create with us"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#FF852A] to-transparent" />
          <span className="animate-pulse">CREATE WITH US</span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#FF852A] to-transparent" />
        </div>
        <h1 className="text-7xl md:text-9xl font-extralight text-white text-center leading-tight tracking-tight">
          Let&apos;s Capture
          <br />
          <span className="bg-gradient-to-r from-white via-[#FF852A] to-white bg-clip-text text-transparent">
            Your Story
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ContactHero;
