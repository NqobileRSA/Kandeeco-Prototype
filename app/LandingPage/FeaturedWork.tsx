'use client'
import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeaturedWork = () => {
  const [scrollY, setScrollY] = useState(0);

  // Expanded works data with more projects
  const works = [
    {
      category: "Wedding",
      title: "Alexandra & James",
      description: "An intimate celebration at The Ritz-Carlton",
      image: "/assets/img1.jpg",
      link: "/portfolio/wedding/alexandra-james",
      direction: 1 // 1 for up, -1 for down
    },
    {
      category: "Corporate",
      title: "Nike Global Summit",
      description: "Annua3 leadership conference in New York",
      image: "/assets/img1.jpg",
      link: "/portfolio/corporate/nike-summit",
      direction: -1
    },
    {
      category: "Events",
      title: "Paris Fashion Week",
      description: "Behind the scenes with Vogue Magazine",
      image: "/assets/img2.jpg",
      link: "/portfolio/events/paris-fashion-week",
      direction: 1
    },
    {
      category: "Commercial",
      title: "Luxury Timepieces",
      description: "Product campaign for Swiss watches",
      image: "/assets/img4.jpg",
      link: "/portfolio/commercial/timepieces",
      direction: -1
    },
    {
      category: "Editorial",
      title: "Urban Landscapes",
      description: "City architecture series for Design Magazine",
      image: "/assets/img3.jpg",
      link: "/portfolio/editorial/urban",
      direction: 1
    },
    {
      category: "Portrait",
      title: "Creative Minds",
      description: "Artist portrait series in their studios",
      image: "/assets/img2.jpg",
      link: "/portfolio/portrait/artists",
      direction: -1
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-32">
          <div className="text-[#D4AF37] text-sm uppercase tracking-[8px] mb-6 flex items-center justify-center">
            <span className="w-8 h-px bg-[#D4AF37] mr-4" />
            Featured Work
            <span className="w-8 h-px bg-[#D4AF37] ml-4" />
          </div>

          <h2 className="text-4xl text-white font-light tracking-wide mb-8">
            Our Latest Projects
          </h2>
        </div>

        {/* Parallax Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative">
          {works.map((work, index) => {
            const translateY = (scrollY * 0.1 * work.direction) % 100;
            
            return (
              <div
                key={work.title}
                className="group relative"
                style={{
                  transform: `translateY(${translateY}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500" />
                  <img
                    src={work.image}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Golden Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-[#D4AF37]/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-[#D4AF37] text-sm uppercase tracking-[4px] mb-3 flex items-center">
                      <span className="w-5 h-px bg-[#D4AF37] mr-4" />
                      {work.category}
                    </div>
                    <h3 className="text-white text-2xl mb-2">{work.title}</h3>
                    <p className="text-white/70 mb-6 transform opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {work.description}
                    </p>
                    <a
                      href={work.link}
                      className="inline-flex items-center text-white text-sm uppercase tracking-[2px] group-hover:text-[#D4AF37] transition-colors"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-32">
          <a
            href="/portfolio"
            className="inline-flex items-center px-12 py-4 border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white text-sm uppercase tracking-[4px] relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#D4AF37] transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 group-hover:text-black transition-colors">View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;