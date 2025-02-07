"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const InfiniteScrollText = () => {
  const text = " FOLLOW US ON SOCIAL MEDIA  •  ";
  const containerRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setTextWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    // TODO add roboto mono font
    <div className="w-full overflow-hidden bg-black py-2">
      <motion.div
        className="flex whitespace-nowrap text-gray-400 text-sm font-medium tracking-[0.5px] pr-[5px]"
        ref={containerRef}
        initial={{ x: 0 }}
        animate={{ x: -textWidth }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <span className="flex">{text.repeat(15)}</span>
      </motion.div>
    </div>
  );
};

export default InfiniteScrollText;
