"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video && video.readyState >= 2) {
      video.play().catch((e) => console.log("Video playback failed:", e));
    }
  };
  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <div
        className="relative h-screen"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
          src="/assets/pepsi.mp4"
          muted
          loop
          playsInline
          preload="auto"
          style={{ opacity: 0 }}
          onPlay={(e) => (e.currentTarget.style.opacity = "1")}
          onPause={(e) => (e.currentTarget.style.opacity = "0")}
        />

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" /> */}

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-white font-light text-center max-w-xl"
          >
            Creating Since 2010
          </motion.h1>

          {/* Enhanced "Call Us" CTA */}
          {/* <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="tel:+15551234567"
            className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37]/5 border border-[#D4AF37]/30 text-white text-sm uppercase tracking-[4px] hover:bg-[#D4AF37]/10 transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
              Call Us
            </span>
            <div className="absolute inset-0 bg-[#D4AF37] transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300" />
          </motion.a> */}
        </div>
      </div>

      {/* Achievement Stats */}
      {/* <div className="relative z-10 max-w-7xl mx-auto px-4 -mt-32 mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 text-center"
          >
            <div className="text-4xl text-[#D4AF37] font-light mb-2">500+</div>
            <div className="text-white/60">Projects Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 text-center"
          >
            <div className="text-4xl text-[#D4AF37] font-light mb-2">13</div>
            <div className="text-white/60">Years Experience</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-8 text-center"
          >
            <div className="text-4xl text-[#D4AF37] font-light mb-2">50+</div>
            <div className="text-white/60">Industry Awards</div>
          </motion.div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutUs;
