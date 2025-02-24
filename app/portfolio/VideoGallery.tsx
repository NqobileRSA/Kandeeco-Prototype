"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Volume2, VolumeX } from "lucide-react";

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  // Sample video sources - replace with your actual videos
  const videos = [
    "/assets/pepsi.mp4",
    "/assets/ciroc.mp4",
    "/assets/telkom.mp4",
    "/assets/telkom.mp4",
    "/assets/telkom.mp4",
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
      setProgress(0);
    }, 20000);

    return () => clearInterval(interval);
  }, [isPlaying, videos.length]);

  useEffect(() => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => Math.min(prev + 0.5, 100));
      }, 100);
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, activeVideo]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovering(false);
    }, 2000);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case " ":
        e.preventDefault();
        togglePlayPause();
        break;
      case "ArrowLeft":
        e.preventDefault();
        setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
        setProgress(0);
        break;
      case "ArrowRight":
        e.preventDefault();
        setActiveVideo((prev) => (prev + 1) % videos.length);
        setProgress(0);
        break;
      case "m":
        e.preventDefault();
        toggleMute();
        break;
    }
  };

  const handleVideoNavigation = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
    } else {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }
    setProgress(0);
  };

  return (
    <div
      className="pb-8 pt-[-50px] bg-black relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <div className="mx-auto" style={{ maxWidth: "calc(100% - 5px)" }}>
        <div className="relative group overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl bg-black">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800 z-10">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Main video */}
          <video
            ref={videoRef}
            src={videos[activeVideo]}
            className="w-full h-[95vh] object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            onEnded={() => {
              setActiveVideo((prev) => (prev + 1) % videos.length);
              setProgress(0);
            }}
          />

          {/* Overlay gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 transition-opacity duration-500 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          {/* Video controls */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-10 flex justify-between items-center transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlayPause}
                className="bg-white/20 backdrop-blur-md text-white p-5 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>

              <button
                onClick={toggleMute}
                className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleVideoNavigation("prev")}
                className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                aria-label="Previous video"
              >
                <ArrowLeft size={24} />
              </button>

              <span className="text-white text-xl font-light tracking-wider">
                {String(activeVideo + 1).padStart(2, "0")}
                <span className="mx-2 opacity-50">/</span>
                {String(videos.length).padStart(2, "0")}
              </span>

              <button
                onClick={() => handleVideoNavigation("next")}
                className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                aria-label="Next video"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
