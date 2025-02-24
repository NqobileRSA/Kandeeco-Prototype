"use client";
import { motion } from "framer-motion";

const ServiceCTA = () => {
  return (
    <div className="relative min-h-[50vh] overflow-hidden isolate">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-top bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage: 'url("/assets/l5.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-black/60 " />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-32 relative">
        <div className="relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extralight mb-8"
          >
            Ready to Start Your Project?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xl max-w-2xl mx-auto mb-12 font-light"
          >
            Let&apos;s create something extraordinary together
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#FF852A] hover:bg-[#FF852A]/90 text-black px-10 py-5 rounded-sm text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FF852A]/20"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA;
