import React from "react";

const CTA = () => {
  return (
    <section className="relative bg-[#FF852A] text-white text-center py-24 px-8 border-b-[0.5rem] border-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#FF852A]/90" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight">
          Let&apos;s Bring Your Vision to Life
        </h2>
        <p className="text-lg md:text-xl mt-4 opacity-90">
          Whether it&apos;s photography or videography, we craft compelling
          visuals that tell your story.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-3 bg-white text-[#FF852A] text-lg font-medium uppercase tracking-wide px-8 py-4 rounded-sm transition-all hover:bg-[#DCDCDC]"
        >
          Get in Touch <span className="text-xl">↗</span>
        </a>
      </div>
    </section>
  );
};

export default CTA;
