import React from "react";
import AboutSection from "./AboutSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "./TeamSection";

const page = () => {
  return (
    <>
      <Navbar />
      <AboutSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default page;
