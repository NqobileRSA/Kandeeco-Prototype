import Navbar from "@/components/Navbar";
import Hero from "./LandingPage/Hero";
import AboutUs from "./LandingPage/AboutUs";
import FeaturedWork from "./LandingPage/FeaturedWork";
import OurProcess from "./LandingPage/OurProcess";
// import CallToAction from "./LandingPage/CallToAction";
import Footer from "@/components/Footer";
import LogoScroller from "./LandingPage/LogoScroller";
import Team from "./LandingPage/Team";
import Services from "./LandingPage/Services";
import CTA from "./LandingPage/CTA";
import InfiniteScrollText from "./LandingPage/InfiniteScroll";
import SocialCards from "./LandingPage/SocialCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <LogoScroller />
      <FeaturedWork />
      <CTA />
      <OurProcess />
      <InfiniteScrollText />
      <SocialCards />
      <Team />
      {/* <CallToAction /> */}
      <Footer />
    </>
  );
}
