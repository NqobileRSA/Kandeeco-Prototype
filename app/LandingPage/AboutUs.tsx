'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Compass } from 'lucide-react';

const AboutUs = () => {
  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "From concept to final edit, we create compelling video content that tells your story. Our full-service production team handles scripting, filming, and post-production."
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Elevate your brand with our comprehensive design services. We craft everything from logos and business cards to marketing materials that capture your brand's essence."
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services spanning product, lifestyle, and commercial shoots. We deliver stunning visuals that make your brand stand out."
    },
    {
      icon: Compass,
      title: "Virtual Tours",
      description: "Immersive virtual experiences that showcase your space in stunning detail. Perfect for real estate, venues, and businesses wanting to provide interactive experiences."
    }
  ];

  return (
    <section className="relative bg-black min-h-screen py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm uppercase tracking-[8px] mb-6 flex items-center justify-center"
          >
            <span className="w-8 h-px bg-[#D4AF37] mr-4" />
            About Us
            <span className="w-8 h-px bg-[#D4AF37] ml-4" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl text-white font-light tracking-wide mb-8"
          >
            Your Vision, Our Expertise
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-white/70 leading-relaxed"
          >
            We are your one-stop destination for all things visual. Our team of creative professionals combines technical expertise with artistic vision to bring your ideas to life through multiple mediums.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className="group relative bg-white/5 p-8 border border-white/10 hover:border-[#D4AF37]/30 transition-colors"
            >
              <div className="flex items-start gap-6">
                <service.icon className="w-8 h-8 text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity" />
                <div>
                  <h3 className="text-white text-lg mb-3">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 h-px w-full bg-[#D4AF37]/30"
                whileHover={{ scaleX: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center px-12 py-4 border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white text-sm uppercase tracking-[4px] relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#D4AF37] transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 group-hover:text-black transition-colors">Start Your Project</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;