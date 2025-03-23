import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./root";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "Afro-Yemen Charity Organization - The Gambia",
  description: "Afro-Yemen Co is a non-profit organization based in the gambia, we aim to provide health and education materials to childrens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning
        className={`${geistSans.variable}  ${geistMono.variable} antialiased`}
      >
        <Provider>
         {children}
        </Provider>
      </body>
    </html>
  );
}
