import React from "react";
import FAQservices from "./FAQservices";
import DetailedServices from "./DetailedServices";
import ServiceCTA from "./ServiceCTA";

const page = () => {
  return (
    <>
      <DetailedServices />
      <ServiceCTA />
      <FAQservices />
    </>
  );
};

export default page;
