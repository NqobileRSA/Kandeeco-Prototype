"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQServices = () => {
  const faqs = [
    {
      question: "What is included in your commercial photography package?",
      answer:
        "Our commercial photography package includes professional product photography, corporate event coverage, and marketing visuals. You'll receive high-resolution edited images, commercial usage rights, and access to an online gallery. We also provide raw footage backup and express delivery options for urgent projects.",
    },
    {
      question: "How long does it take to receive the final deliverables?",
      answer:
        "Turnaround times vary by service: 2-4 weeks for photography projects, 1-2 weeks for event cinematography, and 3-6 weeks for full video production. Rush delivery is available for urgent projects at an additional cost. We always provide clear timelines during the initial consultation.",
    },
    {
      question: "Do you offer video editing as part of your services?",
      answer:
        "Yes, comprehensive video editing is included in our services. This covers professional color grading, sound design, motion graphics, and multiple revision rounds. Our post-production team uses industry-standard software to ensure the highest quality output for your project.",
    },
    {
      question: "What equipment do you use for your shoots?",
      answer:
        "We use professional-grade equipment including 4K/8K cameras, premium lenses, professional lighting setups, and state-of-the-art audio recording gear. Our equipment is regularly updated to ensure we're using the latest technology for optimal results.",
    },
    {
      question: "Do you provide raw footage along with the edited content?",
      answer:
        "Yes, we can provide raw footage upon request. However, we recommend using our professionally edited content as it has been color-graded and optimized for your specific needs. Raw footage is delivered via secure digital transfer or external drive depending on the file size.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900/50 to-black py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about our services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg text-white font-light">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF852A] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQServices;
