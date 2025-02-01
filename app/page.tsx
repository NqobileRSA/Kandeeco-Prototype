import Navbar from "@/components/Navbar";
import Hero from "./LandingPage/Hero";
import AboutUs from "./LandingPage/AboutUs";
import FeaturedWork from "./LandingPage/FeaturedWork";
import OurProcess from "./LandingPage/OurProcess";
import CallToAction from "./LandingPage/CallToAction";
import Footer from "@/components/Footer";
import LogoScroller from "./LandingPage/LogoScroller";
import Team from "./LandingPage/Team";
// import Services from "./LandingPage/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoScroller />
      {/* <Services /> */}
      <AboutUs />
      <FeaturedWork />
      <OurProcess />
      <Team />
      <CallToAction />
      <Footer />
    </>
  );
}
