"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AboutUs = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // const statsRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current
              .play()
              .catch((e) => console.log("Video autoplay failed:", e));
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <section id="about-us" className="relative bg-black overflow-hidden">
      {/* Hero Video Section */}
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
          onPlay={(e) => (e.currentTarget.style.opacity = "0.6")}
          onPause={(e) => (e.currentTarget.style.opacity = "0")}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-10 px-6">
          <div className="inline-flex items-center justify-center gap-6 text-[#FF852A] text-sm uppercase tracking-[8px] mb-8 font-galano">
            <span className="w-12 h-px bg-[#FF852A]" />
            About Us
            <span className="w-12 h-px bg-[#FF852A]" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl text-white font-light text-center max-w-4xl leading-tight"
          >
            Creating Timeless Visuals Since 2010
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg max-w-2xl text-center leading-relaxed mt-4"
          >
            Kandee.co is a Johannesburg-based creative agency specializing in
            photography and videography. Our mission is to create timeless
            photographs and cinematic visuals that tell your unique story.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            href="#work"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 border border-[#FF852A] text-[#FF852A] hover:bg-[#FF852A] hover:text-white transition-all duration-300 group"
          >
            <span className="text-sm uppercase tracking-[2px] font-medium">
              View Our Work
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </div>
      </div>

      {/* Team Teaser Section */}
      {/* <div className="relative bg-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#FF852A] text-sm uppercase tracking-[8px] mb-4 inline-block">
            Meet Our Team
          </span>
          <h2 className="text-4xl font-light text-white mb-8">
            Passionate Creatives Behind The Lens
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12">
            Our award-winning team combines technical expertise with creative
            vision to deliver exceptional visual content for our clients across
            industries.
          </p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="#team"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#FF852A] text-[#FF852A] hover:bg-[#FF852A] hover:text-white transition-all duration-300 group"
          >
            <span className="text-sm uppercase tracking-[2px]">
              Meet The Team
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </div>
      </div> */}
    </section>
  );
};

export default AboutUs;
