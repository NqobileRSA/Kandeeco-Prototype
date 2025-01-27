import React from 'react';
import { PenTool, Layout, Film, Edit, Share } from 'lucide-react';

const OurProcess = () => {
  const steps = [
    {
      icon: PenTool,
      phase: "Pre-Production",
      title: "Planning & Strategy",
      description: "We begin with thorough planning, including concept development, budget planning, and timeline creation. Our team works closely with you to understand your vision and objectives.",
      deliverables: ["Creative Brief", "Production Schedule", "Budget Breakdown"]
    },
    {
      icon: Layout,
      phase: "Creative Development",
      title: "Script & Storyboard",
      description: "Our creative team develops detailed scripts and storyboards, ensuring every scene is carefully planned. We refine these elements based on your feedback until perfect.",
      deliverables: ["Final Script", "Storyboards", "Shot List"]
    },
    {
      icon: Film,
      phase: "Production",
      title: "Filming & Direction",
      description: "With everything planned, we move into the filming phase. Our experienced crew handles all aspects of production, from lighting and sound to directing and filming.",
      deliverables: ["Raw Footage", "Daily Reviews", "Production Stills"]
    },
    {
      icon: Edit,
      phase: "Post-Production",
      title: "Editing & Effects",
      description: "In post-production, we carefully edit and enhance your video. This includes color grading, sound design, and adding any necessary visual effects or animations.",
      deliverables: ["Rough Cut", "Final Edit", "Master Files"]
    },
    {
      icon: Share,
      phase: "Delivery",
      title: "Review & Launch",
      description: "After final revisions and your approval, we prepare and deliver your video in all required formats. We can also assist with distribution strategy if needed.",
      deliverables: ["Multiple Formats", "Usage Rights", "Distribution Plan"]
    }
  ];

  return (
    <section className="relative bg-black min-h-screen py-24">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="text-[#D4AF37] text-sm uppercase tracking-[8px] mb-6 flex items-center justify-center">
            <span className="w-8 h-px bg-[#D4AF37] mr-4" />
            Our Process
            <span className="w-8 h-px bg-[#D4AF37] ml-4" />
          </div>
          
          <h2 className="text-4xl text-white font-light tracking-wide mb-8">
            Video Production Journey
          </h2>
          
          <p className="max-w-2xl mx-auto text-white/70 leading-relaxed mb-16">
            Our comprehensive video production process ensures every project is executed with precision and creativity, delivering exceptional results that exceed expectations.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.phase} className="group relative">
              <div className="grid md:grid-cols-[1fr_2px_2fr] gap-8">
                {/* Left Column */}
                <div className="flex items-center justify-end">
                  <div className="text-right">
                    <div className="text-[#D4AF37] text-sm uppercase tracking-[4px] mb-2">
                      Phase {index + 1}
                    </div>
                    <h3 className="text-white text-xl mb-2">{step.phase}</h3>
                    <step.icon className="ml-auto w-6 h-6 text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Center Line */}
                <div className="relative hidden md:block">
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="absolute inset-0 bg-[#D4AF37]/30 transform origin-top transition-transform duration-500 ease-out group-hover:scale-y-110" />
                </div>

                {/* Right Column */}
                <div className="bg-white/5 p-8 border border-white/10 group-hover:border-[#D4AF37]/30 transition-colors">
                  <h4 className="text-white text-lg mb-4">{step.title}</h4>
                  <p className="text-white/60 leading-relaxed mb-6">{step.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {step.deliverables.map((deliverable) => (
                      <div key={deliverable} className="text-[#D4AF37]/70 text-sm">
                        • {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;