import React from "react";

interface Service {
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    title: "VIDEOGRAPHY",
    description:
      "Professional video production for weddings, events, commercials, and brand stories. We capture your moments with cinematic quality.",
    link: "#",
  },
  {
    title: "PHOTOGRAPHY",
    description:
      "Stunning still photography for portraits, events, products, and commercial needs. Every shot tells your unique story.",
    link: "#",
  },
  {
    title: "AERIAL SERVICES",
    description:
      "Breathtaking drone photography and videography for unique perspectives and dynamic aerial shots.",
    link: "#",
  },
  {
    title: "POST-PRODUCTION",
    description:
      "Expert editing, color grading, and visual effects to transform raw footage into polished, professional content.",
    link: "#",
  },
];

const Services: React.FC = () => {
  return (
    <div className="w-full bg-black py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-lg p-8 flex flex-col justify-between min-h-[280px] hover:bg-neutral-800 transition-all duration-300 border-b border-red-100"
          >
            <div>
              <h2 className="text-white text-xl font-medium mb-4 ">
                {service.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
            <a
              href={service.link}
              className="inline-flex items-center text-white text-sm mt-6 group"
            >
              <div className="w-8 h-8 rounded-full bg-neutral-800 group-hover:bg-neutral-700 flex items-center justify-center mr-2 transition-colors">
                <span className="transform rotate-45">↗</span>
              </div>
              ABOUT {service.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
