import Navbar from "@/components/Navbar";
import Hero from "./LandingPage/Hero";
import AboutUs from "./LandingPage/AboutUs";
import FeaturedWork from "./LandingPage/FeaturedWork";
import OurProcess from "./LandingPage/OurProcess";
import CallToAction from "./LandingPage/CallToAction";
import Footer from "@/components/Footer";
import LogoScroller from "./LandingPage/LogoScroller";
import Team from "./LandingPage/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoScroller />
      <AboutUs />
      <FeaturedWork />
      <OurProcess />
      <Team />
      <CallToAction />
      <Footer />
    </>
  );
}
