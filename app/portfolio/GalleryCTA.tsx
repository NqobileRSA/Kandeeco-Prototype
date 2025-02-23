"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const GalleryCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 h-[100vh] flex items-center justify-center"
    >
      {/* Fixed Background with Container Clipping */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/l3.jpg')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            willChange: "transform",
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#343E48]/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF852A]/20 to-transparent z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-[#FF852A] text-sm uppercase tracking-[5px] mb-6 font-galano"
          >
            <span className="w-8 h-px bg-[#FF852A]" />
            Complete Collection
            <span className="w-8 h-px bg-[#FF852A]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-white font-light mb-6 font-galano"
          >
            Discover Our <span className="text-[#FF852A]">Full Portfolio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[#DCDCDC] text-lg mb-10 font-avenir"
          >
            Explore our complete collection of high-resolution images and
            videos, organized by project and available for browsing in our
            Pixieset gallery.
          </motion.p>

          <motion.a
            href="https://kandeephotography.pixieset.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-block group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative overflow-hidden bg-[#FF852A] text-white py-4 px-8 rounded-sm font-avenir flex items-center gap-3">
              <span>View Full Gallery</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isHovered ? (
                  <ExternalLink className="w-5 h-5" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.4 }}
                style={{ mixBlendMode: "difference" }}
              />
            </div>
          </motion.a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#343E48] to-transparent z-10" />
    </section>
  );
};

export default GalleryCTA;
