"use client";

import React, { useState, useRef } from "react";
import {
  ArrowUpRight,
  Film,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Work = {
  category: "photography" | "videography";
  subcategory: string;
  title: string;
  description: string;
  video?: string;
  image?: string;
  link: string;
  duration?: string;
};

const works: Work[] = [
  {
    category: "photography",
    subcategory: "Fine Art",
    title: "Test 1",
    description: "Experimental light painting series",
    image: "/assets/img1.jpg",
    link: "/portfolio/photography/light-shadow",
  },
  {
    category: "photography",
    subcategory: "Motion",
    title: "Test 2",
    description: "Long exposure dance photography",
    image: "/assets/img2.jpg",
    link: "/portfolio/photography/dance",
  },
  {
    category: "photography",
    subcategory: "Abstract",
    title: "Test 3",
    description: "Geometric architecture studies",
    image: "/assets/img3.jpg",
    link: "/portfolio/photography/urban",
  },
  {
    category: "photography",
    subcategory: "Fine Art",
    title: "Light & Shadow",
    description: "Experimental light painting series",
    image: "/assets/img7.jpg",
    link: "/portfolio/photography/light-shadow",
  },
  {
    category: "photography",
    subcategory: "Motion",
    title: "Dance in Time",
    description: "Long exposure dance photography",
    image: "/assets/img6.jpg",
    link: "/portfolio/photography/dance",
  },
  {
    category: "photography",
    subcategory: "Abstract",
    title: "Urban Patterns",
    description: "Geometric architecture studies",
    image: "/assets/img8.jpg",
    link: "/portfolio/photography/urban",
  },
  // Videos
  {
    category: "videography",
    subcategory: "Experimental",
    title: "Chromatic Dreams",
    description: "Abstract visual journey",
    // image: "/assets/ciroc.mp4",
    video: "/assets/ciroc.mp4",
    link: "https://www.instagram.com/p/CczbTBODqPg/",
  },
  {
    category: "videography",
    subcategory: "Short Film",
    title: "City Rhythms",
    description: "Urban life in motion",
    // image: "/assets/img2.jpg",
    video: "/assets/telkom.mp4",
    link: "/portfolio/videography/rhythms",
  },
  {
    category: "videography",
    subcategory: "Art Film",
    title: "Elements",
    description: "Visual poetry of nature",
    // image: "/assets/img5.jpg",
    video: "/assets/pepsi.mp4",
    link: "/portfolio/videography/elements",
  },
];

const FeaturedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "photography" | "videography"
  >("photography");
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement>(null);

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

  const handlePrevious = () => {
    if (!selectedWork) return;
    const currentWorks = works.filter(
      (w) => w.category === selectedWork.category
    );
    const currentIndex = currentWorks.findIndex(
      (w) => w.title === selectedWork.title
    );
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : currentWorks.length - 1;
    setSelectedWork(currentWorks[newIndex]);
  };

  const handleNext = () => {
    if (!selectedWork) return;
    const currentWorks = works.filter(
      (w) => w.category === selectedWork.category
    );
    const currentIndex = currentWorks.findIndex(
      (w) => w.title === selectedWork.title
    );
    const newIndex =
      currentIndex < currentWorks.length - 1 ? currentIndex + 1 : 0;
    setSelectedWork(currentWorks[newIndex]);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setSelectedWork(null);
  };

  return (
    <section className="relative bg-black min-h-screen py-32">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header section remains the same */}
        <div className="text-center mb-20">
          <div className="text-[#D4AF37] text-sm uppercase tracking-[8px] mb-6 flex items-center justify-center">
            <span className="w-8 h-px bg-[#D4AF37] mr-4" />
            Featured Work
            <span className="w-8 h-px bg-[#D4AF37] ml-4" />
          </div>
          <h2 className="text-4xl text-white font-light tracking-wide mb-8">
            Masterpieces in Motion
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 leading-relaxed">
            Discover our curated collection of visual stories that push the
            boundaries of creativity and storytelling.
          </p>
        </div>

        {/* Category buttons remain the same */}
        <div className="flex justify-center gap-8 mb-16">
          {["photography", "videography"].map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category as "photography" | "videography")
              }
              className={`px-8 py-3 text-sm uppercase tracking-[4px] transition-all duration-300 ${
                activeCategory === category
                  ? "text-[#D4AF37] scale-105"
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of works */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works
            .filter((work) => work.category === activeCategory)
            .map((work) => (
              <div
                key={work.title}
                className={`group relative h-[500px] transition-transform duration-500 ${
                  hoveredWork === work.title ? "scale-105" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(work.title)}
                onMouseLeave={() => handleMouseLeave(work.title)}
                onClick={() => handleWorkClick(work)}
              >
                <div className="relative h-full rounded-lg border border-white/10 group-hover:border-[#D4AF37] transition-all duration-500 overflow-hidden cursor-pointer">
                  {/* Category Label */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 rounded-full text-[#D4AF37] text-xs z-20">
                    {work.subcategory}
                  </div>

                  {/* Duration Label for Videos */}
                  {work.duration && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 rounded-full text-white/70 text-xs z-20">
                      {work.duration}
                    </div>
                  )}

                  {/* Media Content */}
                  {work.video && (
                    <video
                      ref={(el) => {
                        if (el) {
                          videoRefs.current[work.title] = el;
                        }
                      }}
                      src={work.video}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  )}
                  {work.image && (
                    <img
                      src={work.image}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Description Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-8 transition-opacity duration-500 ${
                      hoveredWork === work.title ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {work.category === "videography" ? (
                      <Film className="w-8 h-8 text-[#D4AF37] mb-4" />
                    ) : (
                      <Camera className="w-8 h-8 text-[#D4AF37] mb-4" />
                    )}
                    <h3 className="text-white text-2xl font-light mb-3">
                      {work.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-6">
                      {work.description}
                    </p>
                    <a
                      href={work.link}
                      className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-sm uppercase tracking-[2px]">
                        View Project
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Full Screen Modal */}
        <Dialog open={!!selectedWork} onOpenChange={handleCloseModal}>
          <DialogContent className="max-w-7xl bg-black/95 border-[#D4AF37]/30">
            {selectedWork && (
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 z-50 text-white/70 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Media Container */}
                <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8">
                  {selectedWork.video ? (
                    <video
                      ref={modalVideoRef}
                      src={selectedWork.video}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      loop
                    />
                  ) : (
                    <img
                      src={selectedWork.image}
                      alt={selectedWork.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {selectedWork.category === "videography" ? (
                      <Film className="w-6 h-6 text-[#D4AF37]" />
                    ) : (
                      <Camera className="w-6 h-6 text-[#D4AF37]" />
                    )}
                    <h2 className="text-2xl text-white font-light">
                      {selectedWork.title}
                    </h2>
                  </div>
                  <p className="text-white/70">{selectedWork.description}</p>
                  <div className="flex items-center gap-4 text-sm text-white/50">
                    <span>{selectedWork.subcategory}</span>
                    {selectedWork.duration && (
                      <>
                        <span className="w-1 h-1 bg-white/50 rounded-full" />
                        <span>{selectedWork.duration}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    className="border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 text-[#D4AF37]"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleNext}
                    className="border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 text-[#D4AF37]"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FeaturedWork;
