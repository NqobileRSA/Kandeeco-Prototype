"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Film, Users } from "lucide-react";

const AboutSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (video.readyState >= 2) {
        video.play().catch((e) => console.log("Video playback failed:", e));
        setIsPlaying(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
          video.currentTime = 0;
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ServiceItem = ({
    icon: Icon,
    text,
  }: {
    icon: React.ElementType;
    text: string;
  }) => (
    <motion.li
      className="flex items-center gap-4 text-gray-300 group"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative">
        <motion.div
          className="w-10 h-10 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <Icon className="w-5 h-5 text-[#FF852A] relative z-10" />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-[#FF852A]/10 rounded-full"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </div>
      <span className="font-avenir group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </motion.li>
  );

  return (
    <section id="about-us" className="relative overflow-hidden bg-[#343e4830]">
      <div className="relative h-screen">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          src="/assets/pepsi.mp4"
          muted
          loop
          playsInline
          preload="auto"
          style={{ opacity: isPlaying ? 0.7 : 0 }}
        />
        {/* Overlay with blur */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#FF852A]/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative inline-flex items-center justify-center gap-6 text-[#FF852A] text-sm uppercase tracking-[8px] mb-8 font-galano"
          >
            <motion.span
              className="w-12 h-px bg-[#FF852A]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8 }}
            />
            Our Story
            <motion.span
              className="w-12 h-px bg-[#FF852A]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl text-white font-light text-center max-w-4xl leading-tight mb-6 font-galano"
          >
            <span className="block">Creating Timeless Visuals</span>
            <span className="block mt-2 text-[#FF852A]">Since 2010</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[#DCDCDC] text-lg max-w-2xl text-center leading-relaxed mt-4 font-avenir"
          >
            Kandee.co is a Johannesburg-based creative agency specializing in
            photography and videography. Our mission is to create timeless
            photographs and cinematic visuals that tell your unique story.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <motion.a
              href="#work"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#FF852A] text-[#FF852A] hover:bg-[#FF852A] hover:text-white transition-all duration-500 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm uppercase tracking-[2px] font-medium font-galano relative z-10">
                View Our Work
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-[#FF852A]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block relative mb-6">
              <motion.span
                className="text-[#FF852A] font-medium uppercase tracking-[2px] relative z-10 font-galano"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                OUR MISSION
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF852A]/20"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>

            <h2 className="text-4xl font-light text-white mb-8 leading-tight font-galano">
              Elevating Visual Storytelling
              <br />
              Through Innovation
            </h2>

            <p className="text-[#DCDCDC] mb-8 leading-relaxed font-avenir">
              Kandee.co is more than a creative agency. We&apos;re visual
              storytellers dedicated to crafting compelling narratives through
              the power of imagery. Our approach combines technical expertise
              with artistic vision to deliver content that resonates with
              audiences and achieves your communication goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.ul
                className="space-y-6"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceItem icon={Camera} text="Commercial Photography" />
                <ServiceItem icon={Film} text="Corporate & Event Videography" />
                <ServiceItem
                  icon={Users}
                  text="Wedding & Lifestyle Photography"
                />
              </motion.ul>
              <motion.ul
                className="space-y-6"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ServiceItem icon={Camera} text="Editorial & Branding Shoots" />
                <ServiceItem icon={Film} text="Professional Post-Production" />
                <ServiceItem icon={Users} text="Custom Visual Storytelling" />
              </motion.ul>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF852A] text-white text-sm uppercase tracking-[2px] hover:bg-[#FF852A]/90 transition-all duration-500 group overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-galano">Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/assets/img1.jpg"
                alt="Our creative process"
                className="rounded-lg w-full shadow-xl object-cover transition-transform duration-700"
                style={{ height: "600px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#343E48]/40 to-transparent opacity-60" />
            </motion.div>

            <motion.img
              src="/assets/img2.jpg"
              alt="Behind the scenes"
              className="absolute top-1/4 -left-12 w-2/5 border-[6px] border-[#343E48] rounded-lg hidden xl:block shadow-2xl object-cover"
              style={{ height: "300px" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-8 right-8 bg-[#FF852A] text-white p-6 rounded-lg text-center min-w-[180px] shadow-lg hover:shadow-xl hover:shadow-[#FF852A]/20 transition-all duration-300"
            >
              <h3 className="text-4xl font-bold font-galano">
                15+ <span className="text-lg">Years</span>
              </h3>
              <p className="text-sm mt-2 font-light font-avenir">
                Of visual excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
