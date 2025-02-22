"use client";
import React from "react";

const images = [
  "/assets/l1.jpg",
  "/assets/l2.jpg",
  "/assets/l3.jpg",
  "/assets/l4.jpg",
  "/assets/l5.jpg",
  "/assets/l6.jpg",
];

const HorizontalScroll = () => {
  const doubledImages = [...images, ...images];

  return (
    <div className="overflow-hidden bg-white relative py-8">
      {/* Row 1 - Left to Right */}
      <div className="flex space-x-2 whitespace-nowrap animate-scroll-left">
        {doubledImages.map((src, index) => (
          <img
            key={`row1-${index}`}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-[500px] h-[50vh] object-cover"
            onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
          />
        ))}
      </div>

      {/* Row 2 - Right to Left */}
      <div className="flex space-x-2 whitespace-nowrap animate-scroll-right mt-2">
        {doubledImages.map((src, index) => (
          <img
            key={`row2-${index}`}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-[500px] h-[50vh] object-cover"
            onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
