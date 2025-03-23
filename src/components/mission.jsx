"use client ";
import { poppins } from "@/app/fonts";
import { Image } from "antd";

const MissionStatement = () => {
  return (
    <div id="mission" className="min-h-[100dvh] flex flex-col gap-3 items-center justify-center z-0">
      {/* <h1 className="text-4xl font-bold p-3">Who We Are</h1> */}
      {/* <p>This is a simple about page.</p> */}

      <div className="flex flex-col lg:flex-row gap-10  p-10 items-center justify-center">
        <div className="lg:w-2/4 flex flex-col gap-5 ">
          <p className="text-2xl font-bold text-gray-800 underline underline-offset-8 decoration-amber-300">
            Our Mission
          </p>

          <p className={`${poppins.className} italic `}>
            Through the collaborative efforts of all partners the organisation
            aims to support the sick by providing health care materials and
            provide educational support to schools.
          </p>

          <div className="flex flex-col gap-3">
            <p className="text-2xl font-bold text-gray-800 underline underline-offset-8 decoration-amber-300">
              Our Vissions
            </p>

            <p className={`${poppins.className} italic w-3/4 `}>
              We look foward to be a citadel of hope that provides support to
              humanity in health care and education .
            </p>
          </div>
        </div>

        <div className="lg:w-[400px] shrink-0">
          <Image className="w-full" src="/img/owner.jpg" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
