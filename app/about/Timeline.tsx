"use client";
import React from "react";
import { motion } from "framer-motion";
import { Camera, Award, Users, Building2, Globe2, Star } from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2010",
      title: "The Beginning",
      description:
        "Kandee.co was founded in Johannesburg with a vision to revolutionize visual storytelling in South Africa.",
      icon: Camera,
      highlight: "First studio opened in Braamfontein",
    },
    {
      year: "2012",
      title: "First Major Recognition",
      description:
        "Won the South African Photography Awards for Best Commercial Photography Studio.",
      icon: Award,
      highlight: "3 National Awards",
    },
    {
      year: "2015",
      title: "Team Expansion",
      description:
        "Grew to a team of 15 professionals, expanding our service offerings to include videography and post-production.",
      icon: Users,
      highlight: "15+ Team Members",
    },
    {
      year: "2017",
      title: "New Headquarters",
      description:
        "Moved to our current state-of-the-art studio in Sandton, featuring multiple shooting spaces and editing suites.",
      icon: Building2,
      highlight: "2000m² Facility",
    },
    {
      year: "2020",
      title: "International Recognition",
      description:
        "Expanded services across Africa, working with major global brands and opening a second studio in Cape Town.",
      icon: Globe2,
      highlight: "Pan-African Presence",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: `Celebrating our position as one of Africa's premier visual content creation studios.`,
      icon: Star,
      highlight: "1000+ Projects",
    },
  ];

  return (
    <section className="bg-black relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FF852A]/5 blur-3xl" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-sm bg-[#FF852A]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-6 text-[#FF852A] text-sm uppercase tracking-[8px] mb-8 font-galano">
            <span className="w-12 h-px bg-[#FF852A]" />
            Our Journey
            <span className="w-12 h-px bg-[#FF852A]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight font-galano">
            Growing Together Since 2010
          </h2>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Central line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-px bg-neutral-800"
          />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={event.year}
                className="relative md:grid md:grid-cols-2 gap-8 mb-16"
              >
                {/* Timeline content */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative ${isLeft ? "md:text-right" : "md:col-start-2"}`}
                >
                  <div className="bg-neutral-900 p-8 rounded-sm border border-neutral-800 hover:border-[#FF852A]/50 transition-all duration-300 group hover:shadow-lg hover:shadow-[#FF852A]/10">
                    {/* Hover effect line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF852A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <span className="text-[#FF852A] font-bold text-3xl mb-4 block font-galano">
                      {event.year}
                    </span>
                    <h3 className="text-white text-xl mb-3 font-galano">
                      {event.title}
                    </h3>
                    <p className="text-white/70 mb-4 font-avenir">
                      {event.description}
                    </p>
                    <div className="inline-block bg-[#FF852A]/10 px-4 py-2 rounded-sm">
                      <span className="text-[#FF852A] text-sm font-avenir">
                        {event.highlight}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-full bg-neutral-900 border-4 border-[#FF852A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#FF852A]" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
