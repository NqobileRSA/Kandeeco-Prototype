'use client';
import React, { useEffect, useState, MouseEvent } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

// Type definitions for better type safety
interface Work {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
  direction: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const works: Work[] = [
  {
    category: "Wedding",
    title: "Alexandra & James",
    description: "An intimate celebration at The Ritz-Carlton",
    image: "/assets/img1.jpg",
    link: "/portfolio/wedding/alexandra-james",
    direction: 1,
  },
  {
    category: "Corporate",
    title: "Nike Global Summit",
    description: "Annual leadership conference in New York",
    image: "/assets/img2.jpg",
    link: "/portfolio/corporate/nike-summit",
    direction: -1,
  },
  {
    category: "Events",
    title: "Paris Fashion Week",
    description: "Behind the scenes with Vogue Magazine",
    image: "/assets/img5.jpg",
    link: "/portfolio/events/paris-fashion-week",
    direction: 1,
  },
  {
    category: "Commercial",
    title: "Luxury Timepieces",
    description: "Product campaign for Swiss watches",
    image: "/assets/img6.jpg",
    link: "/portfolio/commercial/timepieces",
    direction: -1,
  },
  {
    category: "Editorial",
    title: "Urban Landscapes",
    description: "City architecture series for Design Magazine",
    image: "/assets/img7.jpg",
    link: "/portfolio/editorial/urban",
    direction: 1,
  },
  {
    category: "Portrait",
    title: "Creative Minds",
    description: "Artist portrait series in their studios",
    image: "/assets/img8.jpg",
    link: "/portfolio/portrait/artists",
    direction: -1,
  },
];

const FeaturedWork: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  // Mouse movement handler
  const handleMouseMove = (e: MouseEvent<HTMLElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({
      x: (x * 2 - 1) * 10,
      y: (y * 2 - 1) * 10,
    });
  };

  useEffect(() => {
    setActiveImage(works[0].image); // Initialize with the first work's image

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="relative bg-black py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-out bg-cover bg-center"
          style={{
            backgroundImage: `url(${activeImage})`,
            opacity: 0.15,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center justify-center space-x-4 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <span className="text-[#D4AF37] text-sm uppercase tracking-[8px]">
              Featured Work
            </span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>
          <h2 className="text-5xl text-white font-light tracking-wide mb-8">
            Masterpieces in Motion
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {works.map((work, index) => {
            const translateY = (scrollY * 0.1 * work.direction) % 100;
            const delay = index * 100;

            return (
              <div
                key={work.title}
                className="group relative"
                style={{
                  transform: `translateY(${translateY}px)`,
                  transition: 'transform 0.1s ease-out',
                  animationDelay: `${delay}ms`,
                }}
                onMouseEnter={() => setActiveImage(work.image)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10 group-hover:bg-black/20 transition-all duration-700" />
                  <img
                    src={work.image}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 transition-colors duration-700" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="text-[#D4AF37] text-sm uppercase tracking-[4px] mb-3 flex items-center">
                      <span className="w-8 h-px bg-gradient-to-r from-[#D4AF37] to-transparent mr-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      {work.category}
                    </div>
                    <h3 className="text-white text-2xl font-light mb-2">
                      {work.title}
                    </h3>
                    <p className="text-white/70 mb-6 transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                      {work.description}
                    </p>
                    <a
                      href={work.link}
                      className="inline-flex items-center text-white text-sm uppercase tracking-[2px] group-hover:text-[#D4AF37] transition-all duration-500"
                    >
                      Explore Project
                      <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-32">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-4 px-16 py-6 border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white text-sm uppercase tracking-[4px] relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              View Full Portfolio
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500 group-hover:text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
