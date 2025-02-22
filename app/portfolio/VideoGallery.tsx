"use client";
import React, { useState, useEffect, useRef } from "react";

// Sample video sources - replace with your actual videos
const videos = [
  "/assets/pepsi.mp4",
  "/assets/ciroc.mp4",
  "/assets/telkom.mp4",
  "/assets/telkom.mp4",
  "/assets/telkom.mp4",
];

const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle through videos
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
      setProgress(0);
    }, 20000); // Change video every 20 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Track video progress
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

  // const handleThumbnailClick = (index: number) => {
  //   setActiveVideo(index);
  //   setIsPlaying(true);
  //   setProgress(0);

  //   if (videoRef.current) {
  //     videoRef.current.currentTime = 0;
  //     videoRef.current.play();
  //   }
  // };

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

  return (
    <div className="pb-8 pt-[-50px] bg-white">
      <div className="mx-auto" style={{ maxWidth: "calc(100% - 25px)" }}>
        {/* Section title with elegant typography */}
        {/* <h2 className="text-3xl md:text-5xl font-light text-gray-800 mb-10 tracking-wide text-center">
          <span className="text-black font-medium">Cinematic</span> Experiences
        </h2> */}

        {/* Main video container with shadow and rounded corners */}
        <div className="relative group overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl bg-black">
          {/* Video progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800 z-10">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Main video - increased height */}
          <video
            ref={videoRef}
            id="main-video"
            src={videos[activeVideo]}
            className="w-full h-[95vh] object-cover"
            autoPlay
            muted
            loop
            playsInline
            onEnded={() => {
              setActiveVideo((prev) => (prev + 1) % videos.length);
              setProgress(0);
            }}
          />

          {/* Elegant overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Video controls with elegant styling */}
          <div className="absolute bottom-0 left-0 right-0 p-10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={togglePlayPause}
              className="bg-white/20 backdrop-blur-md text-white p-5 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
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

            <div className="flex items-center space-x-2">
              <span className="text-white text-xl font-light tracking-wider">
                {String(activeVideo + 1).padStart(2, "0")}
                <span className="mx-2 opacity-50">/</span>
                {String(videos.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Elegant video thumbnails with hover effects - enlarged */}
        {/* <div className="mt-10 relative">
          <div className="flex space-x-6 justify-center">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`relative cursor-pointer transition-all duration-300 transform ${
                  activeVideo === index
                    ? "opacity-100 scale-105"
                    : "opacity-60 hover:opacity-90 hover:scale-105"
                }`}
              >
                <video
                  src={video}
                  className="w-52 h-32 object-cover rounded-lg shadow-md"
                  muted
                  playsInline
                />
                {activeVideo === index && (
                  <div className="absolute inset-0 border-2 border-white rounded-lg"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-3 left-0 right-0 text-center text-white text-base font-medium">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VideoGallery;
