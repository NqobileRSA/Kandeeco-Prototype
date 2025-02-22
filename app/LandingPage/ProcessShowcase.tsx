"use client";
import React, { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

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
  const [activeStep, setActiveStep] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      setIsInView(true);

      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const elementMiddle = rect.top + window.scrollY + rect.height / 2;

        if (Math.abs(scrollPosition - elementMiddle) < rect.height / 2) {
          setActiveStep(index);
          videoRefs.current[index]?.play();
        } else {
          videoRefs.current[index]?.pause();
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-neutral-900 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-40 relative"
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5">
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-700" />
                <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: index <= activeStep ? "100%" : "0%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-0 w-full bg-gradient-to-r from-orange-500 to-orange-400"
                />
              </div>

              {/* Content Card */}
              <motion.div
                animate={{
                  scale: index === activeStep ? 1 : 0.95,
                  x: index === activeStep ? 0 : -16,
                }}
                className="w-full lg:w-1/2 ml-8"
              >
                <Card
                  className={`backdrop-blur-lg transition-all duration-500 ${
                    index === activeStep
                      ? "bg-gradient-to-r from-orange-500/90 to-orange-400/90 shadow-2xl shadow-orange-500/20"
                      : "bg-neutral-800/50"
                  }`}
                >
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-medium mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p
                      className={`leading-relaxed transition-colors duration-500 ${
                        index === activeStep ? "text-white" : "text-neutral-300"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Video Container */}
              <motion.div
                animate={{
                  scale: index === activeStep ? 1 : 0.9,
                  opacity: index === activeStep ? 1 : 0.3,
                }}
                className="w-full lg:w-1/2 h-72 lg:h-96 rounded-xl overflow-hidden shadow-2xl"
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover rounded-xl transform transition-transform duration-700 hover:scale-105"
                  src={step.videoUrl}
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessShowcase;
