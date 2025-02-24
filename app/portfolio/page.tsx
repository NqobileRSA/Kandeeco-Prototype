import React from "react";
import MasonryGrid from "./MasonryGrid";

import HorizontalScroll from "./HorizontalScroll";
import GalleryHero from "./GalleryHero";
import VideoGallery from "./VideoGallery";
import GalleryCTA from "./GalleryCTA";

const page = () => {
  return (
    <>
      <GalleryHero />
      <HorizontalScroll />
      <MasonryGrid />
      <VideoGallery />
      <GalleryCTA />
    </>
  );
};

export default page;
