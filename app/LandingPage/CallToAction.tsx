import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative bg-black py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="text-[#D4AF37] text-sm uppercase tracking-[8px] mb-6 flex items-center">
              <span className="w-8 h-px bg-[#D4AF37] mr-4" />
              Let&apos;s Connect
            </div>
            
            <h2 className="text-4xl text-white font-light tracking-wide mb-8">
              Transform Your Vision Into Reality
            </h2>
            
            <p className="text-white/70 leading-relaxed mb-12">
              Ready to create something extraordinary? Our team of creative professionals is here to bring your ideas to life. Let's discuss your next project and explore the possibilities together.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/60 hover:text-[#D4AF37] transition-colors group">
                <Mail className="w-5 h-5" />
                <a href="mailto:Kandee.c@studio.com" className="text-sm tracking-wide">
                  Kandee.co@studio.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-white/60 hover:text-[#D4AF37] transition-colors group">
                <Phone className="w-5 h-5" />
                <a href="tel:+1234567890" className="text-sm tracking-wide">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white/5 p-12 border border-white/10 group hover:border-[#D4AF37]/30 transition-all">
            <div className="space-y-8">
              {/* Name Field */}
              <div>
                <label className="block text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">
                  Your Name
                </label>
                <input 
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-black border border-white/20 text-white p-4 focus:border-[#D4AF37] outline-none transition-colors placeholder:text-white/30"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">
                  Email Address
                </label>
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black border border-white/20 text-white p-4 focus:border-[#D4AF37] outline-none transition-colors placeholder:text-white/30"
                />
              </div>

              {/* Phone Field */}
              {/* <div>
                <label className="block text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">
                  Phone Number
                </label>
                <input 
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-black border border-white/20 text-white p-4 focus:border-[#D4AF37] outline-none transition-colors placeholder:text-white/30"
                />
              </div> */}

              {/* Service Selection */}
              <div>
                <label className="block text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">
                  I&apos;m Interested In
                </label>
                <select className="w-full bg-black border border-white/20 text-white p-4 focus:border-[#D4AF37] outline-none transition-colors">
                  <option>Video Production</option>
                  <option>Photography</option>
                  <option>Graphic Design</option>
                  <option>Virtual Tours</option>
                </select>
              </div>

              {/* Start Project Button */}
              <button className="w-full group relative overflow-hidden">
                <div className="relative z-10 flex items-center justify-center gap-4 bg-[#D4AF37]/5 border border-[#D4AF37]/30 px-12 py-4">
                  <span className="text-white text-sm uppercase tracking-[4px] group-hover:text-black transition-colors">
                    Start Your Project
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </div>
                <div className="absolute inset-0 bg-[#D4AF37] transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;