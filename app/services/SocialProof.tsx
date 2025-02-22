"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Award, Clock, Users, LucideIcon } from "lucide-react";

interface TestimonialType {
  quote: string;
  author: string;
  company: string;
}

interface StatType {
  icon: LucideIcon;
  value: number;
  label: string;
}

interface StatCounterProps {
  end: number;
  duration?: number;
}

interface TestimonialProps {
  testimonial: TestimonialType;
}

// Stats Counter Component with Intersection Observer
const StatCounter: React.FC<StatCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const countStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !countStarted.current) {
          countStarted.current = true;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCount(Math.floor(end * progress));

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = counterRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);

  return (
    <div ref={counterRef} className="text-4xl font-light text-white">
      {count.toLocaleString()}+
    </div>
  );
};

// Testimonial Component
const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/5 p-8 rounded-lg backdrop-blur-sm"
  >
    <div className="flex gap-2 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#FF852A] text-[#FF852A]" />
      ))}
    </div>
    <p className="text-white/80 italic mb-6">{testimonial.quote}</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-[#FF852A]/20 flex items-center justify-center">
        <span className="text-[#FF852A] font-semibold">
          {testimonial.author[0]}
        </span>
      </div>
      <div>
        <h4 className="text-white font-medium">{testimonial.author}</h4>
        <p className="text-white/60 text-sm">{testimonial.company}</p>
      </div>
    </div>
  </motion.div>
);

// Social Proof Section
const SocialProof: React.FC = () => {
  const testimonials: TestimonialType[] = [
    {
      quote:
        "The team delivered beyond our expectations. The quality of work and attention to detail was exceptional.",
      author: "Sarah Johnson",
      company: "TechCorp Industries",
    },
    {
      quote:
        "Outstanding creative vision and technical expertise. They transformed our brand narrative through visual storytelling.",
      author: "Michael Chen",
      company: "Innovation Labs",
    },
    {
      quote:
        "Professional, reliable, and innovative. Their work has significantly improved our brand presence.",
      author: "Emma Davis",
      company: "Global Ventures",
    },
  ];

  const stats: StatType[] = [
    { icon: Award, value: 150, label: "Awards Won" },
    { icon: Users, value: 500, label: "Happy Clients" },
    { icon: Clock, value: 1000, label: "Projects Completed" },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-black/50 to-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our work speaks through the success of our clients and the
            recognition from the industry
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-8 bg-white/5 rounded-lg backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-[#FF852A]" />
              </div>
              <StatCounter end={stat.value} />
              <p className="text-white/60 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
