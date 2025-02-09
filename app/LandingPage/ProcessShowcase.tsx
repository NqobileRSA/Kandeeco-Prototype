"use client";
import React, { useState, useRef, useEffect } from "react";
// import { ArrowRight } from "lucide-react";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { Card } from "@/components/ui/card";

interface ProcessStep {
  title: string;
  description: string;
  videoUrl: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "01. VIDEO PRODUCTION",
    description:
      "Our expert team produces high-quality videos that showcase your fashion brand in a visually stunning and engaging way.",
    videoUrl: "/assets/telkom.mp4",
  },
  {
    title: "02. CREATIVE DEVELOPMENT",
    description:
      "Our creative team meticulously crafts compelling narratives and visual frameworks that align with your brand's voice and objectives.",
    videoUrl: "/assets/telkom.mp4",
  },
  {
    title: "03. PRODUCTION",
    description:
      "With state-of-the-art equipment and expert direction, we bring your vision to life through cinematic excellence and attention to detail.",
    videoUrl: "/assets/telkom.mp4",
  },
  {
    title: "04. POST-PRODUCTION",
    description:
      "Our post-production team combines technical expertise with creative finesse to polish and perfect every frame of your content.",
    videoUrl: "/assets/telkom.mp4",
  },
];

const ProcessShowcase = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep>(
    processSteps[0]
  );
  const [lockedStep, setLockedStep] = useState<ProcessStep>(processSteps[0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const processContainerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = processSteps[0].videoUrl;
      videoRef.current.play();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!processContainerRef.current) return;
      const rect = processContainerRef.current.getBoundingClientRect();
      setIsSticky(rect.top <= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (step: ProcessStep) => {
    if (!lockedStep) {
      setSelectedStep(step);
      playVideo(step.videoUrl);
    }
  };

  const handleMouseLeave = () => {
    if (!lockedStep) {
      playVideo(selectedStep.videoUrl);
    }
  };

  const handleClick = (step: ProcessStep) => {
    setLockedStep(step);
    setSelectedStep(step);
    playVideo(step.videoUrl);
  };

  const playVideo = (videoUrl: string) => {
    if (videoRef.current) {
      videoRef.current.src = videoUrl;
      videoRef.current.play();
    }
  };

  return (
    <div className="relative bg-black" ref={processContainerRef}>
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Process Steps List */}
        <div className="lg:w-1/2 space-y-4">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className={`bg-[#343E48]/50 backdrop-blur hover:opacity-80 transition-all duration-300 cursor-pointer group 
              ${lockedStep?.title === step.title ? "border border-[#FF852A] bg-[#FF852A]" : ""}`}
              onMouseEnter={() => handleMouseEnter(step)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(step)}
            >
              <div className="p-8 flex justify-between items-center">
                <div className="space-y-2">
                  <h3 className="text-[#FFFFFF] text-lg font-medium tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-[#DCDCDC] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* TODO improve icon or completely remove */}
                {/* 
                <FaLongArrowAltRight
                  className={`text-[#343E48] transition-colors duration-300 w-8 h-8 rounded-full bg-neutral-800 group-hover:bg-neutral-700 flex items-center justify-center mr-2  ${
                    lockedStep?.title === step.title
                      ? "text-[#FFFFFF]"
                      : "group-hover:text-[#FFFFFF]"
                  }`}
                  size={50}
                /> */}
              </div>
            </Card>
          ))}
        </div>

        {/* Sticky Video Section */}
        <div
          className={`lg:w-1/2 relative transition-all duration-500 ${isSticky ? "sticky top-20" : ""}`}
        >
          <div className="h-[100%] relative overflow-hidden rounded-lg">
            <video
              ref={videoRef}
              className="rounded-lg object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessShowcase;
