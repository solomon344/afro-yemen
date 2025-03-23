'use client'

import { Button } from "antd";
import Image from "next/image";
import { poppins, edu_au } from "@/app/fonts";
import Link from "next/link";

const Navbar = ()=>{
    return (
      <div className={`  flex items-center justify-between pr-4`}>
         <div className="flex items-center gap-2">
            <Image className="w-[" width={50} height={50} src={"/img/logo.png"}/>
            <Link href={'/'} className="font-bold  text-xl text-amber-300">Afro Yemen CO</Link>
         </div>

         <div>
            <ul className="flex items-center gap-4 text-gray-400">
               <li className="underline underline-offset-4 decoration-amber-300"><a href="#" className=""><p className=""> Home </p></a></li>
               <li><a href="#about" className="">About</a></li>
               <li><a href="#donate" className="hidden md:block">Contact</a></li>
               <li><a href="#mission" className="hidden md:block">Mission</a></li>
               <li className="hidden md:block">
                  <Link href={'#donate'} className="bg-amber-300 p-2 text-sm font-bold text-black">Donate Now</Link>
               </li>
            </ul>
         </div>
      </div>
    )
 
}

export default Navbar;