"use client";
import React, { useState, useRef, useEffect } from "react";
import { PenTool, Layout, Film, Edit, Share, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRefs = useRef({});
  const containerRef = useRef(null);

  const steps = [
    {
      icon: PenTool,
      phase: "Pre-Production",
      title: "Planning & Strategy",
      description:
        "Our journey begins with thorough planning and strategic development. We analyze your goals, target audience, and brand vision to create a comprehensive roadmap for success.",
      videoUrl: "/assets/telkom.mp4",
      deliverables: [
        "Creative Brief",
        "Production Schedule",
        "Mood Boards",
        "Resource Plan",
      ],
      duration: "2-3 weeks",
      color: "#FF6B6B",
    },
    {
      icon: Layout,
      phase: "Creative Development",
      title: "Script & Storyboard",
      description:
        "Our creative team meticulously crafts compelling narratives and visual frameworks that align with your brand's voice and objectives.",
      videoUrl: "/assets/pepsi.mp4",
      deliverables: [
        "Final Script",
        "Storyboards",
        "Shot Lists",
        "Location Plans",
      ],
      duration: "1-2 weeks",
      color: "#4ECDC4",
    },
    {
      icon: Film,
      phase: "Production",
      title: "Filming & Direction",
      description:
        "With state-of-the-art equipment and expert direction, we bring your vision to life through cinematic excellence and attention to detail.",
      videoUrl: "/placeholder/reelhd.mp4",
      deliverables: [
        "Raw Footage",
        "Daily Reviews",
        "Production Stills",
        "Audio Files",
      ],
      duration: "1-4 days",
      color: "#FFB84C",
    },
    {
      icon: Edit,
      phase: "Post-Production",
      title: "Editing & Effects",
      description:
        "Our post-production team combines technical expertise with creative finesse to polish and perfect every frame of your content.",
      videoUrl: "/placeholder/reelhd.mp4",
      deliverables: ["Rough Cut", "Color Grade", "Sound Mix", "Final Edit"],
      duration: "2-3 weeks",
      color: "#95D1CC",
    },
    {
      icon: Share,
      phase: "Delivery",
      title: "Review & Launch",
      description:
        "We ensure your content meets the highest standards and is optimized for all intended platforms and audiences.",
      videoUrl: "/placeholder/reelhd.mp4",
      deliverables: [
        "Multiple Formats",
        "Platform Versions",
        "Usage Rights",
        "Analytics Setup",
      ],
      duration: "1 week",
      color: "#FF852A",
    },
  ];

  useEffect(() => {
    const video = videoRefs.current[activeStep];
    if (video) {
      video.play().catch((e) => console.log("Video playback failed:", e));
      return () => {
        video.pause();
        video.currentTime = 0;
      };
    }
  }, [activeStep]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.getElementsByClassName("step-section");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveStep(i);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative bg-gradient-to-b from-white to-gray-50"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF852A] to-[#FF6B6B]">
            Our Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Follow our journey from concept to delivery, where each step is
            crafted with precision and creativity.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#FF852A] to-[#FF6B6B] opacity-20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`step-section relative flex items-center mb-32
                ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300
                ${activeStep === index ? "scale-150" : "scale-100"}`}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
                {activeStep === index && (
                  <div
                    className="absolute inset-0 w-4 h-4 rounded-full animate-ping"
                    style={{ backgroundColor: step.color, opacity: 0.2 }}
                  />
                )}
              </div>

              <div className={`w-1/2 ${index % 2 === 0 ? "pr-16" : "pl-16"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-sm bg-opacity-90"
                >
                  <div className="flex items-center mb-4">
                    <step.icon
                      className="w-8 h-8 mr-4"
                      style={{ color: step.color }}
                    />
                    <div>
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: step.color }}
                      >
                        {step.phase}
                      </h3>
                      <p className="text-sm text-gray-500">{step.duration}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="relative">
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96" : "max-h-0"}`}
                    >
                      <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                        <h4
                          className="text-sm font-semibold mb-4"
                          style={{ color: step.color }}
                        >
                          Deliverables
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {step.deliverables.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center space-x-2"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: step.color }}
                              />
                              <span className="text-sm text-gray-600">
                                {item}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-4 text-sm font-medium flex items-center gap-2 text-gray-500 hover:text-gray-700"
                    >
                      {isExpanded ? "Show less" : "View deliverables"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                </motion.div>
              </div>

              <div className={`w-1/2 ${index % 2 === 0 ? "pl-16" : "pr-16"}`}>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
