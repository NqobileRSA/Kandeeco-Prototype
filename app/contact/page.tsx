import React from "react";
import ContactPage from "./ContactPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import FAQ from "./FAQ";
// import GalleryCTA from "../portfolio/GalleryCTA";

const page = () => {
  return (
    <>
      <Navbar />
      <ContactPage />
      {/* <FAQ /> */}
      {/* <GalleryCTA /> */}
      <Footer />
    </>
  );
};

export default page;
