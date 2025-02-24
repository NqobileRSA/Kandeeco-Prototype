import React from "react";
import ServicesPage from "./ServicesPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialProof from "./SocialProof";
import FAQservices from "./FAQservices";
// import CaseStudy from "./CaseStudy";

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesPage />
      <SocialProof />
      {/* <CaseStudy /> */}
      <FAQservices />
      <Footer />
    </>
  );
};

export default page;
