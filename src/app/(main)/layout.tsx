import type { Metadata } from "next";

import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";


export const metadata: Metadata = {
  title: "Tiffin",
  description: "A Campus Food Delivery App",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
   <>
      <Navbar />
      <div className="px-10 pt-0 overflow-hidden box mt-0 bg-gray-100 md:px-20 lg:px-30">
        {children}
      </div>
    </>
    
  );
}
