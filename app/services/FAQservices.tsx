"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// FAQ Component
const FAQservices = () => {
  const faqs = [
    {
      question: "What is included in your commercial photography package?",
      answer:
        "Our package includes professional product photography, corporate event coverage, and marketing visuals. We also provide high-resolution images with commercial usage rights.",
    },
    {
      question: "Do you offer video editing as part of the service?",
      answer:
        "Yes, all video production services include editing, color grading, and sound design to ensure a polished final product.",
    },
    {
      question: "How long does it take to receive the final deliverables?",
      answer:
        "Timelines vary by service, but standard turnaround times are 2-4 weeks for photography and 3-6 weeks for full video production.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl text-white mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-neutral-800 rounded-lg p-4">
            <button
              className="flex justify-between w-full text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg text-white">{faq.question}</span>
              <ChevronDown
                className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-2 text-white/60">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQservices;
