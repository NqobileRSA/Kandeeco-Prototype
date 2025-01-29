"use client";
import React from "react";

const LogoScroller = () => {
  const row1Companies = [
    "VOGUE",
    "CHANEL",
    "DIOR",
    "GUCCI",
    "PRADA",
    "HERMÈS",
    "CARTIER",
    "LOUIS VUITTON",
    "TIFFANY",
    "BVLGARI",
  ];

  const row2Companies = [
    "VERSACE",
    "FENDI",
    "BURBERRY",
    "OMEGA",
    "ROLEX",
    "BALENCIAGA",
    "VALENTINO",
    "ARMANI",
    "YSL",
    "GIVENCHY",
  ];

  const doubledRow1 = [...row1Companies, ...row1Companies];
  const doubledRow2 = [...row2Companies, ...row2Companies];

  return (
    <section className="relative overflow-hidden py-10 bg-black">
      {/* Section Title */}
      {/* <div className="text-center mb-16">
        <div className="text-[#D4AF37] text-sm uppercase tracking-[8px] mb-4 flex items-center justify-center">
          <span className="w-8 h-[1px] bg-[#D4AF37] mr-4" />
          Our Clients
          <span className="w-8 h-[1px] bg-[#D4AF37] ml-4" />
        </div>
      </div> */}

      {/* First Row - Left to Right */}
      <div className="relative mb-16">
        <div className="flex animate-scroll-left">
          {doubledRow1.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex items-center justify-center min-w-[200px] px-8 group"
            >
              <span className="text-white text-xl tracking-[4px] font-light hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-110">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {doubledRow2.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex items-center justify-center min-w-[200px] px-8 group"
            >
              <span className="text-white text-xl tracking-[4px] font-light hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-110">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
    </section>
  );
};

export default LogoScroller;
