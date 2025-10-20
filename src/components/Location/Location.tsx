import React from "react";
import Image from "next/image";
import { LocationSelector } from "../LocationSelector/LocationSelector";


const Location = () => {
  return (
    <div className="flex gap-2 mt-6 items-center">
      <div className="relative">
        <Image src="/marker-orange.png" alt="" height={20} width={20}></Image>
      </div>
      <div className="w-full">
        <LocationSelector></LocationSelector>
      </div>
    </div>
  );
};

export default Location;
