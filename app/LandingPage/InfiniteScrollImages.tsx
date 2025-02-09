import React from "react";

interface Image {
  url: string;
  alt: string;
}

interface InfiniteScrollProps {
  topImages?: Image[];
  bottomImages?: Image[];
  speed?: number;
}

const defaultImages = {
  top: [
    { url: "/assets/img1.jpg", alt: "Fashion model in black suit" },
    { url: "/assets/img2.jpg", alt: "Fashion model in pink suit" },
    { url: "/assets/img3.jpg", alt: "Fashion model in blue suit" },
    { url: "/assets/img4.jpg", alt: "Fashion model in green suit" },
    { url: "/assets/img5.jpg", alt: "Fashion model in pink blazer" },
  ],
  bottom: [
    { url: "/assets/img1.jpg", alt: "Fashion model in black suit" },
    { url: "/assets/img2.jpg", alt: "Fashion model in pink suit" },
    { url: "/assets/img3.jpg", alt: "Fashion model in blue suit" },
    { url: "/assets/img4.jpg", alt: "Fashion model in green suit" },
    { url: "/assets/img5.jpg", alt: "Fashion model in pink blazer" },
  ],
};

const InfiniteScrollImages: React.FC<InfiniteScrollProps> = ({
  topImages = defaultImages.top,
  bottomImages = defaultImages.bottom,
  speed = 20,
}) => {
  return (
    <div className="w-full overflow-hidden bg-black">
      {/* Top row - moving right */}
      <div className="relative w-full overflow-hidden py-4">
        <div
          className={`animate-scroll-right flex gap-4 whitespace-nowrap`}
          style={{ animationDuration: `${speed}s` }}
        >
          {/* Double the images to create seamless loop */}
          {[...topImages, ...topImages].map((image, index) => (
            <div key={index} className="w-64 h-96 flex-shrink-0">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - moving left */}
      <div className="relative w-full overflow-hidden py-4">
        <div
          className={`animate-scroll-left flex gap-4 whitespace-nowrap`}
          style={{ animationDuration: `${speed}s` }}
        >
          {/* Double the images to create seamless loop */}
          {[...bottomImages, ...bottomImages].map((image, index) => (
            <div key={index} className="w-64 h-96 flex-shrink-0">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollImages;
