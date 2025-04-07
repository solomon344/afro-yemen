'use client'
import { Poppins, Edu_AU_VIC_WA_NT_Hand, Courier_Prime,Inconsolata } from "next/font/google"


export const edu_au = Edu_AU_VIC_WA_NT_Hand({
    variable: "--font-edu-au",
    subsets: ["latin"],
    // weight: 400,
  })
  
export const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ['400'],
  })

export const courier = Courier_Prime({
    variable: "--font-courier",
    subsets: ["latin"],
    weight: ['400'],
  })

export const inconsolata = Inconsolata({
    variable: "--font-inconsolata",
    subsets: ["latin"],
    weight: ['400'],
  })