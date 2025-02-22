"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, PlayCircle } from "lucide-react";

import DetailedServices from "./DetailedServices";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ServicesPage = () => {
  const [, setShowreel] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
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
            VISUAL EXCELLENCE
            <span className="w-16 h-[1px] bg-[#FF852A] ml-6 opacity-50" />
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-9xl font-extralight text-center mb-8 leading-tight"
          >
            Craft Your Vision
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
      <DetailedServices />

      {/* CTA Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#FF852A]/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-extralight mb-8"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-xl max-w-2xl mx-auto mb-12 font-light"
            >
              Let&apos;s create something extraordinary together
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#FF852A] hover:bg-[#FF852A]/90 text-black px-10 py-5 rounded-sm text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FF852A]/20"
            >
              Book a Consultation
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
