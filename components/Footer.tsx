import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  LucideIcon,
} from "lucide-react";

// Type for social media icons mapping
type SocialIcons = {
  [key in "Instagram" | "Facebook" | "Twitter" | "Youtube"]: LucideIcon;
};

// Type for contact information items
interface ContactItem {
  Icon: LucideIcon;
  text: string;
  href?: string;
}

// Type for navigation items
type NavigationItem = {
  label: string;
  href: string;
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons: SocialIcons = {
    Instagram,
    Facebook,
    Twitter,
    Youtube,
  };

  const navigationItems: NavigationItem[] = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact",
  ].map((item) => ({
    label: item,
    href: `/${item.toLowerCase()}`,
  }));

  const serviceItems: NavigationItem[] = [
    "Video Production",
    "Photography",
    "Graphic Design",
    "Virtual Tours",
  ].map((service) => ({
    label: service,
    href: `/services/${service.toLowerCase().replace(" ", "-")}`,
  }));

  const contactItems: ContactItem[] = [
    {
      Icon: Mail,
      text: "studio@kandee.co",
      href: "mailto:studio@kandee.co",
    },
    {
      Icon: Phone,
      text: "+1 (234) 567-890",
      href: "tel:+1234567890",
    },
    {
      Icon: MapPin,
      text: "123 Creative Street\nNew York, NY 10001",
    },
  ];

  return (
    <footer className="relative bg-neutral-900">
      {/* Modern geometric pattern overlay */}
      {/* <div className="absolute inset-0 bg-[url('/assets/img1.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#343E48]/95 to-[#343E48]" /> */}

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-12">
        {/* Top section with animated border */}
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-[#DCDCDC]/10 relative">
          <div className="absolute -top-4 left-0 w-24 h-[1px] bg-gradient-to-r from-[#FF852A] to-transparent" />

          {/* Column 1 - Logo & About */}
          <div className="space-y-8">
            <h2 className="text-3xl text-white font-light tracking-wider">
              KANDEE<span className="text-[#FF852A]">CO</span>
            </h2>
            <p className="text-[#DCDCDC] leading-relaxed">
              Crafting visual narratives that resonate. Where creativity meets
              precision in every frame.
            </p>
            <div className="flex items-center gap-6">
              {(Object.keys(socialIcons) as Array<keyof SocialIcons>).map(
                (social) => {
                  const Icon = socialIcons[social];
                  return (
                    <a
                      key={social}
                      href="#"
                      className="group relative p-2 rounded-lg bg-white/5 hover:bg-[#FF852A]/10 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-[#FF852A] transition-colors" />
                    </a>
                  );
                }
              )}
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-[#FF852A] text-sm uppercase tracking-[4px] mb-8 font-medium">
              Explore
            </h3>
            <ul className="space-y-4">
              {navigationItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group text-[#DCDCDC] hover:text-white transition-colors flex items-center"
                  >
                    <span className="relative">
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF852A] group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-[#FF852A] text-sm uppercase tracking-[4px] mb-8 font-medium">
              Services
            </h3>
            <ul className="space-y-4">
              {serviceItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group text-[#DCDCDC] hover:text-white transition-colors flex items-center"
                  >
                    <span className="relative">
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF852A] group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-[#FF852A] text-sm uppercase tracking-[4px] mb-8 font-medium">
              Get in Touch
            </h3>
            <ul className="space-y-6">
              {contactItems.map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 text-[#DCDCDC] hover:text-white transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#FF852A]/10 transition-all">
                        <item.Icon className="w-5 h-5 group-hover:text-[#FF852A] transition-colors" />
                      </div>
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 text-[#DCDCDC]">
                      <div className="p-2 rounded-lg bg-white/5">
                        <item.Icon className="w-5 h-5" />
                      </div>
                      <span className="whitespace-pre-line">{item.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with gradient line */}
        <div className="relative mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#DCDCDC]/60">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF852A]/20 to-transparent" />
          <div>© {currentYear} Studio. All rights reserved.</div>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-[#FF852A] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
