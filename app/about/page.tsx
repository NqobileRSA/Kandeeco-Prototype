import React from "react";
import AboutSection from "./AboutSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "./TeamSection";
import Timeline from "./Timeline";

const page = () => {
  return (
    <>
      <Navbar />
      <AboutSection />
      <TeamSection />
      <Timeline />
      <Footer />
    </>
  );
};

export default page;
