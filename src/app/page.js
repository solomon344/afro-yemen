import Image from "next/image";
import HeroSection from "@/components/hero";
import About from "@/components/about";
import MissionStatement from "@/components/mission";
import CurrentProject from "@/components/currentProject";
import CoreValues from "@/components/coreValues";
import Funded from "@/components/Funded";
import Joinin from "@/components/Joinin";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="">
    <HeroSection/>
    <CurrentProject/>
    <About/>
    <MissionStatement/>
    <CoreValues/>
    <Funded/>
    <Joinin/>
    <Portfolio/>
    <Footer/>
    </div>
  );
}
