import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="flex flex-col gap-2 p-4 bg-black/20 rounded-lg">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-sm text-white/90">{description}</p>
  </div>
);

const WhyUsSection = () => {
  const features = [
    {
      title: "Proven Expertise",
      description:
        "With over 10 years in fashion photography, we capture your brand's essence and elevate your visual storytelling.",
    },
    {
      title: "Collaborative Process",
      description:
        "We work closely with you to ensure every shoot reflects your unique style and vision.",
    },
    {
      title: "High-Quality Imagery",
      description:
        "Our attention to detail guarantees that each image showcases the craftsmanship and quality of your clothing.",
    },
    {
      title: "On Time, Every Time",
      description:
        "We understand the fast-paced nature of fashion and deliver your visuals promptly for timely launches.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center py-16 px-4">
      <div className="max-w-7xl w-full">
        <div className="relative">
          {/* Background Image with Noise Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="w-full h-full bg-repeat"
              style={{
                backgroundImage: 'url("/assets/img3.jpg")',
                backgroundSize: "128px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              WHY CHOOSE US
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
