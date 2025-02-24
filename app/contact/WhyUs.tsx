import { ArrowUpRight, Camera, Film, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhyUs = () => {
  const features = [
    {
      icon: Camera,
      title: "Pro Equipment",
      description: "State-of-the-art gear for exceptional results",
      details: "Using latest Canon R5, Sony A7S III, and RED cameras",
    },
    {
      icon: Film,
      title: "Expert Team",
      description: "15+ years of combined expertise",
      details: "Award-winning photographers and cinematographers",
    },
    {
      icon: Play,
      title: "Fast Delivery",
      description: "Quick turnaround without quality compromise",
      details: "Standard 5-day delivery with rush options available",
    },
  ];
  return (
    <div className="lg:sticky lg:top-24 space-y-8">
      <div className="bg-gradient-to-br from-[#1A1F24]/80 to-[#2A333B]/80 backdrop-blur-xl border border-[#DCDCDC]/5 rounded-lg p-10">
        <h3 className="text-3xl font-light text-white mb-10 tracking-tight">
          Why Choose <span className="text-[#FF852A]">Us</span>
        </h3>
        <div className="space-y-10">
          {features.map((feature, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-start space-x-6 group cursor-help">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF852A]/20 to-[#FF852A]/5 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110">
                      <feature.icon className="w-6 h-6 text-[#FF852A]" />
                    </div>
                    <div>
                      <h4 className="text-xl text-white mb-2 tracking-tight">
                        {feature.title}
                      </h4>
                      <p className="text-[#DCDCDC]/80 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{feature.details}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      <Card className="bg-[#FF852A]/60 group hover:border-[#FF852A]/60 transition-all duration-500">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-2xl text-white tracking-tight">
                Ready to start?
              </h4>
              <p className="text-[#DCDCDC]/80 mt-2">View our previous work</p>
            </div>
            <Button
              variant="ghost"
              className="bg-white text-[#FF852A] hover:text-white hover:bg-[#FF852A]/20 group transition-all duration-300"
              asChild
            >
              <a
                href="#portfolio"
                className="inline-flex items-center space-x-2"
              >
                <span>Portfolio</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhyUs;
