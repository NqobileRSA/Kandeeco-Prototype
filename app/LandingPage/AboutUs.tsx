"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Play, Calendar, Users } from "lucide-react";

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
    <section className="relative bg-black min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-screen"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Image (shown when video is not playing) */}
        {/* <div className="absolute inset-0 bg-[url('/assets/img1.jpg')] bg-cover bg-center" /> */}

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-white font-light text-center max-w-xl"
          >
            Creating Since 2010
          </motion.h1>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="/assets/pepsi.mp4"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center">
              <Play className="w-6 h-6 ml-1" />
            </div>
            <span className="text-lg">Watch Our Story</span>
          </motion.a>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 -mt-32 mb-24">
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
      </div>
      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[url('/assets/img2.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-2xl mb-4">Film Production</h3>
              <p className="text-white/70 mb-4">
                Award-winning cinematography and storytelling
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#D4AF37]"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[500px] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[url('/assets/img3.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-2xl mb-4">Commercial Photography</h3>
              <p className="text-white/70 mb-4">
                Capturing moments that sell your vision
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#D4AF37]"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative h-[500px] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[url('/assets/img4.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-2xl mb-4">Brand Design</h3>
              <p className="text-white/70 mb-4">
                Visual identities that stand out
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#D4AF37]"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Actions */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8"
          >
            <h3 className="text-2xl text-white mb-4">Start Your Project</h3>
            <p className="text-white/60 mb-6">
              Book a call with our creative team
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#D4AF37] text-black text-sm uppercase tracking-wider hover:bg-[#D4AF37]/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="#calendar"
                className="inline-flex items-center gap-2 px-8 py-3 border border-[#D4AF37] text-[#D4AF37] text-sm uppercase tracking-wider hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Schedule Meeting
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8"
          >
            <h3 className="text-2xl text-white mb-4">Meet Our Team</h3>
            <p className="text-white/60 mb-6">
              Get to know the creatives behind the magic
            </p>
            <a
              href="#team"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 text-white text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              <Users className="w-4 h-4" />
              View Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
