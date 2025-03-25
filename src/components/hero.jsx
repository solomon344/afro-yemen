"use client";
import { Image, Button } from "antd";
import { Handshake, Heart,Apple, Wallet } from "lucide-react";
import Navbar from "@/components/navbar";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="hero-section min-h-[100dvh] flex flex-col relative justify-between">
      <div className="bg-layer grow flex flex-col w-full min-h-full ">
      <Navbar/>
        {/* <div className="w-2/4 flex h-full flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Afro Yemen Organization</h1>
        </div> */}

        <div className="flex flex-col gap-4 justify-center items-center grow">
          <p className="text-5xl font-bold text-white underline underline-offset-[.6rem] decoration-amber-300">
            DONATE NOW
          </p>
          <p className="text-lg font-medium text-white">
            Help us raise funds for charity
          </p>

          <div>
            <button className="bg-amber-300 hover:bg-amber-400  font-bold py-4 px-4 rounded w-[250px]">
              <Link href={"#donate"}>DONATE NOW</Link>
            </button>
          </div>
        </div>

        <div className="lg:w-[80%] place-self-center grid grid-cols-3 gap-4 z-30 min-h-[100px] bg-amber-300 p-8">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-gray-100 rounded-full p-2">
          <Wallet size={'2rem'}  className="" />
          </div>
         <div>
         <p className="font-bold uppercase underline underline-offset-4 decoration-yellow-300 decoration-2">Donate Now</p>
         <p className="line-clamp-2 text-sm text-gray-600">
          Every Penny matters, donate anything to help save lives of the young generation.
         </p>
         </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="bg-gray-100 rounded-full p-2">
          <Apple size={'2rem'}  className="" />
          </div>
         <div>
         <p className="font-bold uppercase underline underline-offset-4 decoration-yellow-300 decoration-2">Give Support</p>
         <p className="line-clamp-2 text-sm text-gray-600">
          Help children learn and grow by donating books, clothes, and other items or your effort.
         </p>
         </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="bg-gray-100 rounded-full p-2">
          <Heart size={'2rem'}  className="" />
          </div>
         <div>
         <p className="font-bold uppercase underline underline-offset-4 decoration-yellow-300 decoration-2">save children</p>
         <p className="line-clamp-2 text-sm text-gray-600">
          Support children in need by donating food, medicines, and other essential items.
         </p>
         </div>
        </div>

      </div>
      </div>

      
    </div>
  );
};

export default HeroSection;
