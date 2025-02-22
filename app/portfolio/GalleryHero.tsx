"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, ArrowDown } from "lucide-react";

const GalleryHero = () => {
  const [, setShowreel] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // const FilterButton = ({
  //   name,
  //   label,
  //   icon: Icon,
  // }: {
  //   name: string;
  //   label: string;
  //   icon: any;
  // }) => (
  //   <motion.button
  //     className={`flex items-center gap-2 px-4 py-2 ${
  //       activeFilter === name
  //         ? "bg-[#FF852A] text-white"
  //         : "text-gray-300 hover:text-white"
  //     } transition-all duration-300 rounded-sm`}
  //     whileHover={{ scale: 1.05 }}
  //     whileTap={{ scale: 0.95 }}
  //     onClick={() => setActiveFilter(name)}
  //   >
  //     <Icon
  //       className={`w-4 h-4 ${activeFilter === name ? "text-white" : "text-[#FF852A]"}`}
  //     />
  //     <span className="font-avenir">{label}</span>
  //   </motion.button>
  // );

  return (
    <section className="relative overflow-hidden bg-[#343E48] ">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/pepsi.mp4" type="video/mp4" />
        </video>

        <div className="relative h-full flex flex-col items-center justify-center px-6 z-20">
          <motion.div
            {...fadeInUp}
            className="text-[#FF852A] text-sm tracking-[0.3em] mb-8 flex items-center"
          >
            <span className="w-16 h-[1px] bg-[#FF852A] mr-6 opacity-50" />
            Our Portfolio
            <span className="w-16 h-[1px] bg-[#FF852A] ml-6 opacity-50" />
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-extralight text-center mb-8 leading-tight"
          >
            Capturing Moments That Tell Your Story
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-2xl text-white/70 max-w-3xl text-center mb-12 font-light"
          >
            Innovative visual storytelling for brands that demand excellence
          </motion.p>

          <motion.button
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            onClick={() => setShowreel(true)}
            className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-sm border border-white/10 hover:border-white/20"
          >
            <PlayCircle className="w-6 h-6 text-[#FF852A]" />
            <span className="text-lg font-light">Watch Showreel</span>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 rotate- text-white/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHero;
