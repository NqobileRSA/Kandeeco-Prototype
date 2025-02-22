"use client";
import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "View All" },
    { id: "booking", label: "Booking & Pricing" },
    { id: "process", label: "Production Process" },
    { id: "technical", label: "Equipment & Technical" },
    { id: "delivery", label: "Delivery & Rights" },
  ];

  const faqs = [
    {
      category: "booking",
      question: "What is your booking and consultation process?",
      answer:
        "We start with an initial consultation to understand your vision and requirements. After aligning on the creative direction, we'll provide a detailed proposal outlining deliverables, timeline, and investment. Upon acceptance, a 50% deposit secures your booking.",
      keywords: ["book", "process", "start", "begin", "how to", "deposit"],
    },
    {
      category: "booking",
      question: "What are your standard rates and packages?",
      answer:
        "Our packages are customized based on your specific needs, project scope, and usage rights. Commercial photography starts from R5,000, and video production from R15,000. We're happy to provide detailed pricing during our consultation.",
      keywords: ["price", "cost", "rates", "package", "payment"],
    },
    {
      category: "process",
      question: "How does your production process work?",
      answer:
        "Our process begins with pre-production planning, including creative briefs, shot lists, and scheduling. During production, we work efficiently while maintaining attention to detail. Post-production includes professional editing, color grading, and multiple revision rounds.",
      keywords: ["production", "process", "work", "how"],
    },
    {
      category: "technical",
      question: "What professional equipment do you use?",
      answer:
        "We use industry-leading equipment including Canon R5 and Sony A7S III cameras, professional lighting setups, and high-end audio gear. We always carry backup equipment and maintain redundant systems for peace of mind.",
      keywords: ["camera", "gear", "equipment", "technical"],
    },
    {
      category: "delivery",
      question: "What is your typical delivery timeframe?",
      answer:
        "Standard delivery is 5-7 business days for photography and 10-14 days for video projects. Rush delivery is available at additional cost. All files are delivered via secure digital transfer with both high-resolution and web-optimized versions.",
      keywords: ["delivery", "time", "receive", "when", "files"],
    },
    {
      category: "delivery",
      question: "What usage rights are included?",
      answer:
        "Standard packages include digital usage rights for your business's owned channels (website, social media, etc.). Extended usage rights for advertising, third-party platforms, or commercial licensing are available and priced accordingly.",
      keywords: ["rights", "usage", "license", "commercial"],
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A333B] to-[#1A1F24] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center space-y-6 relative">
            <h2 className="text-6xl font-light tracking-tight">
              Frequently Asked
              <span className="bg-gradient-to-r from-[#FF852A] to-[#ff9f5a] bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
          </div>

          {/* Search */}
          {/* <div className="mt-16 max-w-xl mx-auto relative">
            <div className="absolute inset-0 bg-[#FF852A]/5 blur-xl" />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FF852A] w-5 h-5" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#343E48]/50 backdrop-blur-xl border-[#DCDCDC]/10 focus:border-[#FF852A] text-white pl-12 pr-4 py-6 placeholder-[#DCDCDC]/40 text-lg rounded-2xl"
              />
            </div>
          </div> */}

          {/* Categories */}
          <div className="mt-12 flex items-center justify-center gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 transition-all duration-500 relative group ${
                  activeCategory === category.id
                    ? "text-white"
                    : "text-[#DCDCDC]/70 hover:text-white"
                }`}
              >
                <span className="relative z-10">{category.label}</span>
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF852A] to-[#ff9f5a] " />
                )}
                <div className="absolute inset-0 bg-white/5  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="mt-16 space-y-6 max-w-3xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#DCDCDC]/70 text-lg">
                  No questions found matching your search.
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <Card
                  key={index}
                  className="bg-[#343E48]/30 backdrop-blur-xl border-[#DCDCDC]/5 hover:border-[#FF852A]/20 transition-all duration-500 overflow-hidden group"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full text-left p-6 flex items-start justify-between"
                      aria-expanded={openIndex === index}
                    >
                      <span
                        className={`text-lg transition-all duration-500 ${
                          openIndex === index
                            ? "text-[#FF852A]"
                            : "text-white group-hover:text-[#FF852A]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-all duration-500 ${
                          openIndex === index
                            ? "text-[#FF852A] rotate-180"
                            : "text-[#DCDCDC]/40 group-hover:text-[#FF852A]"
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        openIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-6 pt-0 text-[#DCDCDC]/80 leading-relaxed">
                        <div className="h-px w-full bg-gradient-to-r from-[#FF852A]/20 via-[#DCDCDC]/5 to-transparent mb-6" />
                        {faq.answer}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
