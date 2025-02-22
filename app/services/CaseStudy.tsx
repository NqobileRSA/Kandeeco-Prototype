"use client";
import React, { useState } from "react";
import { ChevronDown, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudy = () => {
  const caseStudies = [
    {
      title: "Luxury Brand Video Campaign",
      description:
        "How we helped a high-end fashion brand boost engagement by 200% through cinematic storytelling.",
      image: "/assets/img1.jpg",
      stats: {
        engagementIncrease: "+200% Engagement",
        views: "1M+ Video Views",
        conversionRate: "+35% Conversion Rate",
      },
    },
    {
      title: "Tech Startup Product Launch",
      description:
        "Our video production helped a tech startup generate massive pre-launch hype, reaching over 500K users.",
      image: "/assets/img2.jpg",
      stats: {
        engagementIncrease: "+150% Social Reach",
        views: "500K+ Impressions",
        conversionRate: "+40% Early Signups",
      },
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl text-white mb-8 text-center">Success Stories</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-neutral-800 rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition"
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl text-white mb-2">{caseStudy.title}</h3>
              <p className="text-white/60 mb-4">{caseStudy.description}</p>
              <div className="grid grid-cols-3 gap-4 text-center text-sm text-white/80 mb-4">
                <div className="p-2 bg-black/20 rounded-lg">
                  {caseStudy.stats.engagementIncrease}
                </div>
                <div className="p-2 bg-black/20 rounded-lg">
                  {caseStudy.stats.views}
                </div>
                <div className="p-2 bg-black/20 rounded-lg">
                  {caseStudy.stats.conversionRate}
                </div>
              </div>
              <button className="flex items-center gap-2 text-[#FF852A] group">
                <span>Read More</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
