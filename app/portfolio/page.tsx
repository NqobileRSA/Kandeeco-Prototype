import React from "react";
import MasonryGrid from "./MasonryGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HorizontalScroll from "./HorizontalScroll";
import GalleryHero from "./GalleryHero";
import VideoGallery from "./VideoGallery";
import GalleryCTA from "./GalleryCTA";

const page = () => {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <HorizontalScroll />
      <MasonryGrid />
      <VideoGallery />
      <GalleryCTA />
      <Footer />
    </>
  );
};

export default page;
