import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-12">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Column 1 - Logo & About */}
          <div className="space-y-8">
            <h2 className="text-2xl text-white font-light">STUDIO</h2>
            <p className="text-white/60 leading-relaxed">
              Creating exceptional visual content that tells your story and captures your vision.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-[#D4AF37] text-sm uppercase tracking-[4px] mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="text-white/60 hover:text-[#D4AF37] transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 -translate-y-0 group-hover:-translate-y-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-[#D4AF37] text-sm uppercase tracking-[4px] mb-8">Services</h3>
            <ul className="space-y-4">
              {['Video Production', 'Photography', 'Graphic Design', 'Virtual Tours'].map((service) => (
                <li key={service}>
                  <a href={`/services/${service.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-[#D4AF37] transition-colors flex items-center group">
                    {service}
                    <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 -translate-y-0 group-hover:-translate-y-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-[#D4AF37] text-sm uppercase tracking-[4px] mb-8">Contact</h3>
            <ul className="space-y-6">
              <li>
                <a href="Kandee.co@studio.com" className="text-white/60 hover:text-[#D4AF37] transition-colors flex items-center gap-4">
                  <Mail className="w-5 h-5" />
                  <span>Kandee.co@studio.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-white/60 hover:text-[#D4AF37] transition-colors flex items-center gap-4">
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <div className="text-white/60 flex items-center gap-4">
                  <MapPin className="w-5 h-5" />
                  <span>123 Creative Street<br />New York, NY 10001</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <div>
            © {currentYear} Studio. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;