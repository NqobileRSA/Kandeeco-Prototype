"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Film, Award, Users } from "lucide-react";

const AboutUs = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

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

      {/* Stats Section */}
      <div
        className="relative z-20 max-w-7xl mx-auto px-6 -mt-32 mb-24"
        ref={statsRef}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900 border border-neutral-800 p-8 text-center group hover:bg-neutral-800 transition-all duration-300"
          >
            <div className="inline-flex justify-center mb-6 w-16 h-16 rounded-full bg-neutral-800 text-[#FF852A] group-hover:bg-[#FF852A]/10 transition-colors duration-300">
              <Camera className="w-8 h-8 m-auto" />
            </div>
            <div className="text-4xl text-white font-light mb-2">500+</div>
            <div className="text-white/60 uppercase tracking-wider text-sm">
              Projects Completed
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-900 border border-neutral-800 p-8 text-center group hover:bg-neutral-800 transition-all duration-300"
          >
            <div className="inline-flex justify-center mb-6 w-16 h-16 rounded-full bg-neutral-800 text-[#FF852A] group-hover:bg-[#FF852A]/10 transition-colors duration-300">
              <Film className="w-8 h-8 m-auto" />
            </div>
            <div className="text-4xl text-white font-light mb-2">15+</div>
            <div className="text-white/60 uppercase tracking-wider text-sm">
              Years Experience
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-neutral-900 border border-neutral-800 p-8 text-center group hover:bg-neutral-800 transition-all duration-300"
          >
            <div className="inline-flex justify-center mb-6 w-16 h-16 rounded-full bg-neutral-800 text-[#FF852A] group-hover:bg-[#FF852A]/10 transition-colors duration-300">
              <Award className="w-8 h-8 m-auto" />
            </div>
            <div className="text-4xl text-white font-light mb-2">50+</div>
            <div className="text-white/60 uppercase tracking-wider text-sm">
              Industry Awards
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FF852A] font-medium mb-4 inline-block uppercase tracking-[2px]">
              OUR MISSION
            </span>
            <h2 className="text-4xl font-light text-white mb-6 leading-tight">
              Elevating Visual Storytelling Through Innovation
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Kandee.co is more than a creative agency. We're visual
              storytellers dedicated to crafting compelling narratives through
              the power of imagery. Our approach combines technical expertise
              with artistic vision to deliver content that resonates with
              audiences and achieves your communication goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/80 group">
                  <span className="text-[#FF852A]">
                    <Camera className="w-5 h-5" />
                  </span>
                  Commercial Photography
                </li>
                <li className="flex items-center gap-3 text-white/80 group">
                  <span className="text-[#FF852A]">
                    <Film className="w-5 h-5" />
                  </span>
                  Corporate & Event Videography
                </li>
                <li className="flex items-center gap-3 text-white/80 group">
                  <span className="text-[#FF852A]">
                    <Users className="w-5 h-5" />
                  </span>
                  Wedding & Lifestyle Photography
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/80 group">
                  <span className="text-[#FF852A]">
                    <Camera className="w-5 h-5" />
                  </span>
                  Editorial & Branding Shoots
                </li>
                <li className="flex items-center gap-3 text-white/80 group">
                  <span className="text-[#FF852A]">
                    <Film className="w-5 h-5" />
                  </span>
                  Professional Post-Production
                </li>
                <li className="flex items-center gap-3 text-white/80 group">
                  <span className="text-[#FF852A]">
                    <Users className="w-5 h-5" />
                  </span>
                  Custom Visual Storytelling
                </li>
              </ul>
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF852A] text-white text-sm uppercase tracking-[2px] hover:bg-[#FF852A]/80 transition-all duration-300 group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/assets/img1.jpg"
              alt="Our creative process"
              className="rounded-lg w-full shadow-lg object-cover"
              style={{ height: "600px" }}
            />
            <img
              src="/assets/img2.jpg"
              alt="Behind the scenes"
              className="absolute top-1/4 -left-12 w-2/5 border-8 border-black rounded-lg hidden xl:block shadow-xl object-cover"
              style={{ height: "300px" }}
            />
            <div className="absolute bottom-8 right-8 bg-[#FF852A] text-white p-6 rounded-lg text-center min-w-[180px]">
              <h3 className="text-4xl font-bold">
                15+ <span className="text-lg">Years</span>
              </h3>
              <p className="text-sm mt-2 font-light">Of visual excellence</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Teaser Section */}
      <div className="relative bg-neutral-900 py-24">
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
      </div>
    </section>
  );
};

export default AboutUs;
