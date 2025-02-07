"use client";

import React, { useState, useRef } from "react";
import {
  ArrowUpRight,
  // Film,
  // Camera,
  // X,
  // ChevronLeft,
  // ChevronRight,
} from "lucide-react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

type Work = {
  category: "photography" | "videography";
  subcategory: string;
  title: string;
  description: string;
  video?: string;
  image?: string;
  link: string;
  duration?: string;
  size?: "large" | "medium" | "small";
};

const works: Work[] = [
  {
    category: "photography",
    subcategory: "Fine Art",
    title: "Test 1",
    description: "Experimental light painting series",
    image: "/assets/img1.jpg",
    link: "/portfolio/photography/light-shadow",
    size: "large",
  },
  {
    category: "photography",
    subcategory: "Motion",
    title: "Test 2",
    description: "Long exposure dance photography",
    image: "/assets/img2.jpg",
    link: "/portfolio/photography/dance",
    size: "small",
  },
  {
    category: "photography",
    subcategory: "Abstract",
    title: "Test 3",
    description: "Geometric architecture studies",
    image: "/assets/img3.jpg",
    link: "/portfolio/photography/urban",
    size: "medium",
  },
  {
    category: "photography",
    subcategory: "Fine Art",
    title: "Light & Shadow",
    description: "Experimental light painting series",
    image: "/assets/img7.jpg",
    link: "/portfolio/photography/light-shadow",
    size: "small",
  },
  {
    category: "photography",
    subcategory: "Motion",
    title: "Dance in Time",
    description: "Long exposure dance photography",
    image: "/assets/img6.jpg",
    link: "/portfolio/photography/dance",
    size: "large",
  },
  {
    category: "photography",
    subcategory: "Abstract",
    title: "Urban Patterns",
    description: "Geometric architecture studies",
    image: "/assets/img8.jpg",
    link: "/portfolio/photography/urban",
    size: "medium",
  },
  {
    category: "photography",
    subcategory: "Abstract",
    title: "Image 3",
    description: "Geometric architecture studies",
    image: "/assets/team1.jpg",
    link: "/portfolio/photography/urban",
    size: "medium",
  },
  // Videos remain the same...
  {
    category: "videography",
    subcategory: "Experimental",
    title: "Chromatic Dreams",
    description: "Abstract visual journey",
    video: "/assets/ciroc.mp4",
    link: "https://www.instagram.com/p/CczbTBODqPg/",
  },
  {
    category: "videography",
    subcategory: "Short Film",
    title: "City Rhythms",
    description: "Urban life in motion",
    video: "/assets/telkom.mp4",
    link: "/portfolio/videography/rhythms",
  },
  {
    category: "videography",
    subcategory: "Art Film",
    title: "Elements",
    description: "Visual poetry of nature",
    video: "/assets/pepsi.mp4",
    link: "/portfolio/videography/elements",
  },
];

const FeaturedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "photography" | "videography"
  >("photography");
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);
  const [, setSelectedWork] = useState<Work | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const getGridClasses = (size?: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 h-[800px]";
      case "medium":
        return "col-span-1 row-span-2 h-[800px]";
      default:
        return "col-span-1 row-span-1 h-[400px]";
    }
  };

  const handleMouseEnter = (title: string) => {
    setHoveredWork(title);
    const work = works.find((w) => w.title === title);
    if (work?.video) {
      const video = videoRefs.current[title];
      if (video && video.readyState >= 2) {
        video.play().catch(() => {});
      }
    }
  };

  const handleMouseLeave = (title: string) => {
    setHoveredWork(null);
    const work = works.find((w) => w.title === title);
    if (work?.video) {
      const video = videoRefs.current[title];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
    if (work.video && modalVideoRef.current) {
      setTimeout(() => {
        modalVideoRef.current?.play().catch(() => {});
      }, 100);
    }
  };

  return (
    <section className="relative bg-white min-h-screen">
      <div className="relative z-10">
        {/* Header section with reduced padding */}
        <div className="px-8 md:px-16 py-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-start">
              <div className="text-[#FF852A] text-sm font-['Avenir_Next'] uppercase tracking-[8px] mb-4 flex items-center">
                <span className="w-8 h-px bg-[#FF852A] mr-4" />
                Featured Work
              </div>
              <h2
                className="font-['Galano_Grotesque'] text-[48px] font-semibold uppercase tracking-[-1px] text-[#343E48] leading-[110%] mb-12"
                style={{
                  fontFeatureSettings: "normal",
                  fontVariationSettings: "normal",
                  textWrap: "balance",
                }}
              >
                Masterpieces in Motion
              </h2>

              {/* Updated category buttons with brand styling */}
              <div className="flex gap-12">
                {["photography", "videography"].map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      setActiveCategory(
                        category as "photography" | "videography"
                      )
                    }
                    className={`relative group font-['Avenir_Next'] text-base uppercase tracking-[2px] transition-all duration-300 
                      ${
                        activeCategory === category
                          ? "text-[#FF852A]"
                          : "text-[#343E48] hover:text-[#FF852A]"
                      }`}
                  >
                    {category}
                    <span
                      className={`absolute -bottom-2 left-0 w-full h-[1px] transform origin-left transition-all duration-300
                        ${
                          activeCategory === category
                            ? "bg-[#FF852A] scale-x-100"
                            : "bg-[#FF852A] scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*  grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-3 max-w-8xl mx-auto">
          {works
            .filter((work) => work.category === activeCategory)
            .map((work) => (
              <div
                key={work.title}
                className={`${getGridClasses(work.size)} group relative overflow-hidden rounded-sm shadow-lg transition-all duration-500 ease-out hover:shadow-xl ${
                  hoveredWork === work.title ? "scale-[1.02] z-10" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(work.title)}
                onMouseLeave={() => handleMouseLeave(work.title)}
                onClick={() => handleWorkClick(work)}
              >
                <div className="relative h-full">
                  {/* Media Content */}
                  {work.video ? (
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[work.title] = el;
                      }}
                      src={work.video}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  ) : (
                    <img
                      src={work.image}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content Overlay */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ease-out transform ${
                      hoveredWork === work.title
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <div className="text-[#FF852A] text-xs uppercase tracking-wider mb-2 font-medium">
                      {work.subcategory}
                    </div>
                    <h3 className="text-white text-xl font-medium mb-2 line-clamp-2">
                      {work.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">
                      {work.description}
                    </p>
                    <a
                      href={work.link}
                      className="inline-flex items-center gap-2 text-[#FF852A] hover:text-white transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-sm uppercase tracking-wider font-medium">
                        View Project
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
