
import Navbar from "@/components/Navbar";
import Hero from "./LandingPage/Hero";
import AboutUs from "./LandingPage/AboutUs";
import FeaturedWork from "./LandingPage/FeaturedWork";
import OurProcess from "./LandingPage/OurProcess";
import CallToAction from "./LandingPage/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<>
<Navbar/>
<Hero/>
<AboutUs/>
<FeaturedWork/>
<OurProcess/>
<CallToAction/>
<Footer/>
</>
  );
}
