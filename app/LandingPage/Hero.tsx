'use client';

import React, { useState, useEffect, useRef, FC } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const Hero: FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (videoRef.current) {
        videoRef.current.style.transform = `scale(${1 + scrollPosition * 0.0005})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="object-cover w-full h-full transition-transform duration-300"
        >
          <source src="/placeholder/reelhd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-between p-12 z-20">
        <div className="flex justify-between items-center">
          <div className="text-[#D4AF37] text-sm uppercase tracking-[8px] flex items-center">
            <span className="w-8 h-[1px] bg-[#D4AF37] mr-4" />
            Visual Excellence
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
          <h1 className="text-white text-7xl font-light tracking-tight">
            Create<span className="text-[#D4AF37]">.</span>
          </h1>
        </div>
        <div className="flex justify-between items-end">
          <a
            href="#work"
            className="inline-flex items-center px-8 py-4 border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white text-sm uppercase tracking-[4px] relative overflow-hidden group hover:border-[#D4AF37] transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-[#D4AF37] transform -translate-x-full skew-x-[-25deg] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-black">Explore Our Work</span>
          </a>
          <div className="flex items-center gap-6 bg-black/40 backdrop-blur-sm p-4 rounded-sm">
            <button
              onClick={togglePlayPause}
              className="text-[#D4AF37] hover:text-white transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={toggleMute}
              className="text-[#D4AF37] hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <div className="w-32 h-[2px] bg-white/20">
              <div 
                className="h-full bg-[#D4AF37] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
