import Image from "next/image";
import HeroSection from "@/components/hero";
import About from "@/components/about";
import MissionStatement from "@/components/mission";
import CurrentProject from "@/components/currentProject";
import CoreValues from "@/components/coreValues";
import Funded from "@/components/Funded";
import Joinin from "@/components/Joinin";
import Initiatives from "@/components/initiatives";
import Footer from "@/components/Footer";
import Portfolio from "@/components/portfolio";
import Legalization from "@/components/Legalization";
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
    <Initiatives/>
    <Portfolio/>
    <Legalization/>

    {/* Footer */}
    <Footer/>

    </div>
  );
}
