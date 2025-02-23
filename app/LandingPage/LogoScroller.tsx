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
    <section className="relative overflow-hidden py-2 bg-black">
      {/* Background Text - "Our Clients" */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0]">
        <h2 className="text-[13rem] font-bold text-orange-300/50 tracking-[2.5px] uppercase">
          Our Clients
        </h2>
      </div> */}

      {/* Gradient Fades for Smooth Transitions */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      {/* First Row - Left to Right */}
      <div className="relative my-2 z-20">
        <div className="flex animate-scroll-left">
          {doubledRow1.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex items-center justify-center min-w-[200px] px-8 group"
            >
              <div className="relative p-4 rounded-lg border border-white/10 hover:border-[#D4AF37] transition-all duration-300 group-hover:shadow-lg">
                <span className="text-white text-xl tracking-[4px] font-light hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-105">
                  {company}
                </span>
                <div className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative z-20">
        <div className="flex animate-scroll-right">
          {doubledRow2.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex items-center justify-center min-w-[200px] px-8 group"
            >
              <div className="relative p-4 rounded-lg border border-white/10 hover:border-[#D4AF37] transition-all duration-300 group-hover:shadow-lg">
                <span className="text-white text-xl tracking-[4px] font-light hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-105">
                  {company}
                </span>
                <div className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlays for Scrolling Effect */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-30" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-30" />
    </section>
  );
};

export default LogoScroller;
