import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative bg-white py-16">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/assets/img1.jpg')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="text-[#FF852A] text-sm uppercase tracking-[8px] mb-6 flex items-center font-['Galano_Grotesque']">
              <span className="w-8 h-px bg-[#FF852A] mr-4" />
              Let&apos;s Connect
            </div>

            <h2 className="text-4xl text-[#343E48] font-light tracking-wide mb-8 font-['Galano_Grotesque']">
              Transform Your Vision Into Reality
            </h2>

            <p className="text-[#343E48]/70 leading-relaxed mb-12 font-['Avenir_Next']">
              Ready to create something extraordinary? Our team of creative
              professionals is here to bring your ideas to life. Let&apos;s
              discuss your next project and explore the possibilities together.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 font-['Avenir_Next']">
              <div className="flex items-center gap-4 text-[#343E48]/60 hover:text-[#FF852A] transition-colors group">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:Kandee.c@studio.com"
                  className="text-sm tracking-wide"
                >
                  Kandee.co@studio.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-[#343E48]/60 hover:text-[#FF852A] transition-colors group">
                <Phone className="w-5 h-5" />
                <a href="tel:+1234567890" className="text-sm tracking-wide">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-[#DCDCDC]/20 p-12 border border-[#DCDCDC] group hover:border-[#FF852A]/30 transition-all">
            <div className="space-y-8 font-['Avenir_Next']">
              {/* Name Field */}
              <div>
                <label className="block text-[#FF852A] text-sm uppercase tracking-[4px] mb-4 font-['Galano_Grotesque']">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-white border border-[#DCDCDC] text-[#343E48] p-4 focus:border-[#FF852A] outline-none transition-colors placeholder:text-[#343E48]/30"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-[#FF852A] text-sm uppercase tracking-[4px] mb-4 font-['Galano_Grotesque']">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-[#DCDCDC] text-[#343E48] p-4 focus:border-[#FF852A] outline-none transition-colors placeholder:text-[#343E48]/30"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[#FF852A] text-sm uppercase tracking-[4px] mb-4 font-['Galano_Grotesque']">
                  I&apos;m Interested In
                </label>
                <select className="w-full bg-white border border-[#DCDCDC] text-[#343E48] p-4 focus:border-[#FF852A] outline-none transition-colors">
                  <option>Video Production</option>
                  <option>Photography</option>
                  <option>Graphic Design</option>
                  <option>Virtual Tours</option>
                </select>
              </div>

              {/* Start Project Button */}
              <button className="w-full group relative overflow-hidden">
                <div className="relative z-10 flex items-center justify-center gap-4 bg-[#FF852A]/5 border border-[#FF852A]/30 px-12 py-4">
                  <span className="text-[#343E48] text-sm uppercase tracking-[4px] group-hover:text-white transition-colors font-['Galano_Grotesque']">
                    Start Your Project
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#343E48] group-hover:text-white transition-colors" />
                </div>
                <div className="absolute inset-0 bg-[#FF852A] transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
