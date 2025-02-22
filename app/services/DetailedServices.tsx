import React, { useState } from "react";
import { Camera, Film, Play, ArrowUpRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "commercial",
    title: "Commercial Photography & Videography",
    description:
      "Premium visual content for brands and businesses, from product photography to corporate films.",
    duration: "2-4 weeks",
    clients: 500,
    expertise: 98,
    features: [
      "Professional product photography",
      "Corporate event coverage",
      "Brand storytelling",
      "Marketing campaign visuals",
      "Social media content",
      "Aerial photography",
    ],
    icon: Camera,
    deliverables: [
      "High-resolution edited images",
      "4K video content",
      "Raw footage backup",
      "Online gallery access",
      "Commercial usage rights",
      "Express delivery option",
    ],
    process: [
      {
        title: "Consultation",
        description: "Understanding your brand and visual requirements",
      },
      {
        title: "Pre-Production",
        description: "Planning shots, locations, and creative direction",
      },
      {
        title: "Production",
        description: "Professional shooting with state-of-the-art equipment",
      },
      {
        title: "Post-Production",
        description: "Expert editing and color grading",
      },
    ],
  },
  {
    id: "events",
    title: "Event Cinematography",
    description:
      "Capturing special moments with cinematic excellence and creative storytelling.",
    duration: "1-2 weeks",
    clients: 300,
    expertise: 95,
    features: [
      "Wedding videography",
      "Corporate events",
      "Live event streaming",
      "Multi-camera setup",
      "Same-day highlights",
      "Full event coverage",
    ],
    icon: Film,
    deliverables: [
      "Full event coverage",
      "Highlight reel",
      "Multiple camera angles",
      "Professional audio",
      "Custom music licensing",
      "Online sharing platform",
    ],
    process: [
      {
        title: "Planning",
        description: "Event schedule and shot list preparation",
      },
      {
        title: "Setup",
        description: "Equipment testing and location preparation",
      },
      {
        title: "Coverage",
        description: "Professional event documentation",
      },
      {
        title: "Delivery",
        description: "Quick turnaround editing and delivery",
      },
    ],
  },
  {
    id: "production",
    title: "Video Production",
    description:
      "End-to-end video production services from concept to final delivery.",
    duration: "3-6 weeks",
    clients: 200,
    expertise: 96,
    features: [
      "Script development",
      "Location scouting",
      "Professional crew",
      "High-end equipment",
      "Post-production",
      "Color grading",
    ],
    icon: Play,
    deliverables: [
      "Concept development",
      "Storyboards",
      "Professional crew",
      "4K/8K footage",
      "Sound design",
      "Color grading",
    ],
    process: [
      {
        title: "Pre-Production",
        description: "Script, storyboard, and production planning",
      },
      {
        title: "Production",
        description: "Professional filming with expert crew",
      },
      {
        title: "Post-Production",
        description: "Editing, sound design, and color grading",
      },
      {
        title: "Review",
        description: "Client feedback and final adjustments",
      },
    ],
  },
];

const DetailedServices = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-light text-white mb-4">Our Services</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Transform your vision into reality with our professional photography
            and videography services.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Service Selection */}
          <div className="lg:col-span-5 space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group cursor-pointer rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  selectedService.id === service.id
                    ? "bg-white/10 border-[#FF852A] border"
                    : "bg-white/5 border border-transparent hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      selectedService.id === service.id
                        ? "bg-[#FF852A]"
                        : "bg-white/10 group-hover:bg-white/20"
                    }`}
                  >
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-zinc-400 text-sm font-medium">
                    {service.duration}
                  </span>
                </div>
                <h3 className="text-xl text-white font-medium mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Service Details */}
          <Card className="lg:col-span-7 bg-white/5 border-white/10 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="mb-12">
                <h3 className="text-2xl text-white font-medium mb-8">
                  What&apos;s Included
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedService.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-[#FF852A]/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#FF852A]" />
                      </div>
                      <span className="text-zinc-300 group-hover:text-white transition-colors">
                        {deliverable}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-white font-medium mb-8">
                  Our Process
                </h3>
                <div className="space-y-8">
                  {selectedService.process.map((step, index) => (
                    <div key={index} className="flex gap-6 group">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#FF852A] flex items-center justify-center">
                          <span className="text-black font-medium">
                            {index + 1}
                          </span>
                        </div>
                        {index !== selectedService.process.length - 1 && (
                          <div className="absolute top-10 left-1/2 w-px h-16 bg-gradient-to-b from-[#FF852A]/50 to-transparent" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2 group-hover:text-[#FF852A] transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-12 w-full bg-[#FF852A] text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#FF852A]/90 transition-all hover:scale-[1.02] group">
                <span className="font-medium">Get Started</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailedServices;
