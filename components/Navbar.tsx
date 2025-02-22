"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Phone, Calendar } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const DropdownMenu = ({ item }: { item: NavItem }) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 w-64 mt-4"
    >
      <div className="relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-[#FF852A]/30" />
        <div className="bg-[#343E48]/90 backdrop-blur-lg border border-white/5 rounded-sm p-1">
          <div className="bg-[#343E48]/40 p-4 space-y-1">
            {item.subItems?.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className="block group"
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 py-2 px-4"
                >
                  <span className="w-5 h-[1px] bg-[#FF852A]/30 group-hover:bg-[#FF852A] transition-colors" />
                  <span className="text-sm tracking-[2px] text-[#DCDCDC] group-hover:text-[#FF852A] transition-colors">
                    {subItem.label}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#343E48]/90 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      {/* Top bar with contact info */}
      <motion.div
        initial={{ height: 40 }}
        animate={{ height: isScrolled ? 0 : 40 }}
        className="bg-[#343E48]/40 backdrop-blur-sm overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between text-xs tracking-[2px]">
          <span className="text-[#DCDCDC]">Creating Timeless Memories</span>
          <div className="flex items-center space-x-8">
            <a
              href="tel:+1234567890"
              className="text-[#DCDCDC] hover:text-[#FF852A] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3 h-3" />
              <span>+123 456 7890</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main navbar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="relative group">
              <span className="text-[#FF852A] text-xl font-light tracking-[6px]">
                KANDEE.CO
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-px bg-[#FF852A]/30"
                whileHover={{ scaleX: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navigation.map((item) => (
                <div key={item.href} className="relative group">
                  <div
                    className="flex items-center cursor-pointer py-8"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`text-sm tracking-[3px] transition-colors ${
                        pathname === item.href
                          ? "text-[#FF852A]"
                          : "text-[#DCDCDC] group-hover:text-[#FF852A]"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <ChevronDown className="w-4 h-4 ml-1 text-[#FF852A] transition-transform group-hover:rotate-180" />
                    )}
                    {item.subItems && activeDropdown === item.label && (
                      <DropdownMenu item={item} />
                    )}
                  </div>
                  <motion.div
                    className={`absolute bottom-6 left-0 w-full h-px bg-[#FF852A]/30 transition-transform ${
                      pathname === item.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}

              {/* Book Now button */}
              <Link
                href="/booking"
                className="relative overflow-hidden group px-8 py-3 bg-[#343E48]/20 border border-[#FF852A]/30 hover:border-[#FF852A]"
              >
                <span className="relative z-10 text-sm tracking-[3px] text-white group-hover:text-[#343E48] transition-colors flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  BOOK NOW
                </span>
                <motion.div className="absolute inset-0 bg-[#FF852A] transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative group"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <motion.div
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 0 }
                      : { rotate: 0, y: -5 }
                  }
                  className="absolute w-full h-px bg-[#DCDCDC]"
                />
                <motion.div
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute w-full h-px bg-[#DCDCDC]"
                />
                <motion.div
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: 0 }
                      : { rotate: 0, y: 5 }
                  }
                  className="absolute w-full h-px bg-[#DCDCDC]"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#343E48]/95 backdrop-blur-lg border-t border-white/5"
          >
            <div className="px-8 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.href} className="space-y-2">
                  <motion.div
                    className="flex items-center justify-between"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    <Link
                      href={item.href}
                      className={`text-sm tracking-[3px] transition-colors ${
                        pathname === item.href
                          ? "text-[#FF852A]"
                          : "text-[#DCDCDC] hover:text-[#FF852A]"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <ChevronDown
                        className={`w-4 h-4 text-[#FF852A] transition-transform duration-300 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </motion.div>
                  <AnimatePresence>
                    {item.subItems && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-3 py-2"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="group flex items-center space-x-3"
                          >
                            <span className="w-4 h-px bg-[#FF852A]/30 group-hover:bg-[#FF852A] transition-colors" />
                            <span className="text-[#DCDCDC] text-sm tracking-[2px] group-hover:text-[#FF852A] transition-colors">
                              {subItem.label}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                href="/booking"
                className="block text-center py-3 border border-[#FF852A]/30 text-[#DCDCDC] text-sm tracking-[3px] hover:bg-[#FF852A] hover:text-[#343E48] transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                BOOK NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
