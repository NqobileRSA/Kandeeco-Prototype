"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Film Production",
    description: "Award-winning cinematography and storytelling",
    image: "/assets/img2.jpg",
    link: "#contact",
  },
  {
    title: "Commercial Photography",
    description: "Capturing moments that sell your vision",
    image: "/assets/img3.jpg",
    link: "#contact",
  },
  {
    title: "Brand Design",
    description: "Visual identities that stand out",
    image: "/assets/img4.jpg",
    link: "#contact",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-12">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative h-[500px] group cursor-pointer overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl text-white font-light mb-4">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
