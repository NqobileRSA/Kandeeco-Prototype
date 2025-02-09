"use client";

import React, { useState, useRef } from "react";
import {
  PenTool,
  Layout,
  Film,
  Edit,
  Share,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const OurProcess = () => {
  const [selectedStep, setSelectedStep] = useState<
    null | (typeof steps)[number]
  >(null);
  const [hoveredStep, setHoveredStep] = useState<null | number>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const steps = [
    {
      icon: PenTool,
      phase: "Pre-Production",
      title: "Planning & Strategy",
      description:
        "Our journey begins with thorough planning and strategic development. We analyze your goals, target audience, and brand vision to create a comprehensive roadmap for success.",
      tagline: "Where vision meets strategy",
      videoUrl: "/assets/telkom.mp4",
      deliverables: [
        "Creative Brief",
        "Production Schedule",
        "Mood Boards",
        "Resource Plan",
      ],
      duration: "2-3 weeks",
    },
    {
      icon: Layout,
      phase: "Creative Development",
      title: "Script & Storyboard",
      description:
        "Our creative team meticulously crafts compelling narratives and visual frameworks that align with your brand's voice and objectives.",
      tagline: "Crafting your narrative",
      videoUrl: "/assets/pepsi.mp4",
      deliverables: [
        "Final Script",
        "Storyboards",
        "Shot Lists",
        "Location Plans",
      ],
      duration: "1-2 weeks",
    },
    {
      icon: Film,
      phase: "Production",
      title: "Filming & Direction",
      description:
        "With state-of-the-art equipment and expert direction, we bring your vision to life through cinematic excellence and attention to detail.",
      tagline: "Bringing stories to life",
      videoUrl: "/placeholder/reelhd.mp4",
      deliverables: [
        "Raw Footage",
        "Daily Reviews",
        "Production Stills",
        "Audio Files",
      ],
      duration: "1-4 days",
    },
    {
      icon: Edit,
      phase: "Post-Production",
      title: "Editing & Effects",
      description:
        "Our post-production team combines technical expertise with creative finesse to polish and perfect every frame of your content.",
      tagline: "Perfecting every frame",
      videoUrl: "/placeholder/reelhd.mp4",
      deliverables: ["Rough Cut", "Color Grade", "Sound Mix", "Final Edit"],
      duration: "2-3 weeks",
    },
    {
      icon: Share,
      phase: "Delivery",
      title: "Review & Launch",
      description:
        "We ensure your content meets the highest standards and is optimized for all intended platforms and audiences.",
      tagline: "Excellence delivered",
      videoUrl: "/placeholder/reelhd.mp4",
      deliverables: [
        "Multiple Formats",
        "Platform Versions",
        "Usage Rights",
        "Analytics Setup",
      ],
      duration: "1 week",
    },
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredStep(index);
    const videoElement = videoRefs.current[index];

    if (videoElement && videoElement.readyState >= 2) {
      videoElement
        .play()
        .catch((e) => console.log("Video playback failed:", e));
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredStep(null);
    const videoElement = videoRefs.current[index];

    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  const handlePrevious = () => {
    const currentIndex = steps.findIndex(
      (s) => s.phase === selectedStep?.phase
    );
    const newIndex = currentIndex > 0 ? currentIndex - 1 : steps.length - 1;
    setSelectedStep(steps[newIndex]);
  };

  const handleNext = () => {
    const currentIndex = steps.findIndex(
      (s) => s.phase === selectedStep?.phase
    );
    const newIndex = currentIndex < steps.length - 1 ? currentIndex + 1 : 0;
    setSelectedStep(steps[newIndex]);
  };

  return (
    <section className="relative bg-white min-h-screen py-24">
      {/* <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          {/* <div className="text-[#D4AF37] text-sm uppercase tracking-[8px] mb-6 flex items-center justify-center">
            <span className="w-8 h-px bg-[#D4AF37] mr-4" />
            Our Process
            <span className="w-8 h-px bg-[#D4AF37] ml-4" />
          </div>

          <h2 className="text-4xl text-white font-light tracking-wide mb-8">
            The Journey to Excellence
          </h2>

          <p className="max-w-2xl mx-auto text-white/70 leading-relaxed mb-16">
            Our refined production process ensures every project is executed
            with precision, creativity, and attention to detail, delivering
            exceptional results that exceed expectations.
          </p> */}

          {/* Step Labels */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  hoveredStep === index ? "scale-110" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => setSelectedStep(step)}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 ${
                    hoveredStep === index
                      ? "border-[#FF852A] bg-[#FF852A]/10"
                      : "border-black/30"
                  } flex items-center justify-center mb-2 transition-all duration-300`}
                >
                  <span
                    className={`text-lg ${
                      hoveredStep === index ? "text-[#FF852A]" : "text-black/70"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <span
                  className={`text-xs uppercase tracking-wider ${
                    hoveredStep === index ? "text-[#FF852A]" : "text-black/50"
                  } transition-colors duration-300`}
                >
                  {step.phase}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Carousel className="relative">
          <CarouselContent>
            {steps.map((step, index) => (
              <CarouselItem
                key={step.phase}
                className="group relative h-[500px] w-[400px] cursor-pointer basis-[80%] pl-4 mr-[20px]"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => setSelectedStep(step)}
              >
                <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-[#FF852A] transition-all duration-500 overflow-hidden">
                  {/* Phase Label */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 rounded-full text-[#FF852A] text-xs z-20">
                    Phase {index + 1}
                  </div>

                  {/* Duration Label */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 rounded-full text-white/70 text-xs z-20">
                    {step.duration}
                  </div>

                  {/* Description Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${
                      hoveredStep === index ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <step.icon className="w-8 h-8 text-[#FF852A] mb-4" />
                    <h3 className="text-white text-lg font-medium text-center mb-2">
                      {step.phase}
                    </h3>
                    <p className="text-white/60 text-sm text-center">
                      {step.tagline}
                    </p>
                  </div>

                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={step.videoUrl}
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Dialog
          open={!!selectedStep}
          onOpenChange={() => setSelectedStep(null)}
        >
          <DialogContent className="bg-black/95 border-[#FF852A]/30 max-w-4xl">
            {selectedStep && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-white flex items-center gap-3">
                    {selectedStep.icon && (
                      <selectedStep.icon className="w-6 h-6 text-[#FF852A]" />
                    )}
                    {selectedStep.phase}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4 space-y-4">
                  {/* Video in modal */}
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      src={selectedStep.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>

                  <p className="text-white/70">{selectedStep.description}</p>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-[#FF852A] mb-2">Deliverables</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedStep.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="text-white/70 text-sm flex items-center gap-2"
                        >
                          <div className="w-1 h-1 bg-[#FF852A] rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-white/50 text-sm">
                    Estimated Duration: {selectedStep.duration}
                  </div>

                  {/* Call to Action */}
                  <div className="mt-6 text-center">
                    <Button
                      className="bg-[#FF852A] text-black hover:bg-[#FF852A]/90"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Start Your Project
                    </Button>
                  </div>
                </div>

                <DialogFooter className="mt-6">
                  <div className="flex justify-between w-full">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      className="border-[#FF852A]/30 hover:bg-[#FF852A]/10 text-[#FF852A] hover:text-[#FF852A]"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous Step
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleNext}
                      className="border-[#FF852A]/30 hover:bg-[#FF852A]/10 text-[#FF852A] hover:text-[#FF852A]"
                    >
                      Next Step
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default OurProcess;
