import React from "react";

const images = [
  "/assets/l1.jpg",
  "/assets/l2.jpg",
  "/assets/l3.jpg",
  "/assets/l4.jpg",
  "/assets/l5.jpg",
  "/assets/l6.jpg",
  "/assets/l1.jpg",
  "/assets/l2.jpg",
  "/assets/l3.jpg",
  "/assets/l4.jpg",
  "/assets/l5.jpg",
  "/assets/l6.jpg",
];

const MasonryGrid: React.FC = () => {
  return (
    <div className="px-2 pb-2 bg-white">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-2">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full mb-2"
          />
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
