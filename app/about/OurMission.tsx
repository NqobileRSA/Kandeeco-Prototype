"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Film, Users } from "lucide-react";

const OurMission = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [, setIsPlaying] = useState(false);

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
    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-4">
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
            storytellers dedicated to crafting compelling narratives through the
            power of imagery. Our approach combines technical expertise with
            artistic vision to deliver content that resonates with audiences and
            achieves your communication goals.
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
  );
};

export default OurMission;
