"use client";
import { Image } from "antd";
import { poppins } from "@/app/fonts";



const About = () => {
  return (
    <div id="about" className="min-h-[100dvh] flex flex-col gap-3 items-center justify-center z-0">
      {/* <h1 className="text-4xl font-bold p-3">Who We Are</h1> */}
      {/* <p>This is a simple about page.</p> */}

      <div className="flex gap-10 flex-col lg:flex-row p-10 items-center justify-center">
        <div className="lg:w-[400px] shrink-0">
          <Image className="w-full" src="/img/p1.jpg" alt="Logo" />
        </div>

        <div className="lg:w-2/4 flex flex-col gap-5 ">
          <p className="text-2xl font-bold text-gray-800 underline underline-offset-8 decoration-amber-300">
            About Afro-Yemen Charity Organisation
          </p>

          <p className={`${poppins.className} italic `}>
            The organisation came into existence when Dr. Ali and Sulayman met
            in an aeroplane that was heading to Turkey. The two were seated next
            to each other and as usual engage in a fruitful, beautiful
            conversation which gave birth to Agro-Yemen. The Afro stands for
            Africa while Yemen stands for a Middle East country called Yemen.
            Sulayman is from Africa while Ali Al Zakami Abdoullah is from Yemen.
            After the conversation we exchange numbers and continued exchanging
            ideas on how to contribute to advancement of society by focusing on
            two important areas that every human being need, health
            care and education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
