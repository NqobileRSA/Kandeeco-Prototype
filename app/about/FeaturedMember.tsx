import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Linkedin, ExternalLink } from "lucide-react";

const FeaturedMember = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="David Khumalo - Creative Director"
              className="w-full rounded-lg shadow-2xl object-cover transition-transform duration-700 hover:scale-105"
              style={{ height: "600px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white p-6 rounded-sm text-center min-w-[280px] shadow-lg"
            >
              <h3 className="text-2xl font-galano">David Khumalo</h3>
              <p className="text-[#FF852A] text-sm mt-1 font-avenir">
                Creative Director & Founder
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="https://instagram.com/davidkhumalo"
                  className="text-white/70 hover:text-[#FF852A] transition-colors duration-300"
                  aria-label="David's Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:david@kandee.co"
                  className="text-white/70 hover:text-[#FF852A] transition-colors duration-300"
                  aria-label="Email David"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/davidkhumalo"
                  className="text-white/70 hover:text-[#FF852A] transition-colors duration-300"
                  aria-label="David's LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-block relative mb-6">
            <span className="text-[#FF852A] font-medium uppercase tracking-[2px] relative z-10 font-galano">
              MEET THE FOUNDER
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF852A]/20"></div>
          </div>

          <h2 className="text-4xl font-light text-white mb-8 leading-tight font-galano">
            &quot; is the art of capturing <br />
            moments that should last forever.&quot;
          </h2>

          <p className="text-white/70 mb-6 leading-relaxed font-avenir">
            With over 15 years of experience in commercial and documentary
            photography, David founded Kandee.co with a vision to elevate visual
            storytelling in South Africa. His work has been featured in leading
            publications across the continent and has earned numerous awards for
            innovation in visual communication.
          </p>

          <p className="text-white/70 mb-10 leading-relaxed font-avenir">
            David&apos;s approach combines technical precision with an artistic
            sensitivity that reveals the authentic essence of each subject. His
            leadership has shaped our studio&apos;s reputation for excellence
            and fostered a collaborative environment where creativity thrives.
          </p>

          <a
            href="#david-portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF852A] text-white text-sm uppercase tracking-[2px] hover:bg-[#FF852A]/90 transition-all duration-300 group overflow-hidden relative"
          >
            <span className="relative z-10 font-galano">
              View David&apos;s Portfolio
            </span>
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
            <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 opacity-10"></div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedMember;
