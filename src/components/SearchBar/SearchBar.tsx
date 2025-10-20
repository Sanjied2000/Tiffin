import React from "react";
import Image from "next/image";

export const SearchBar = () => {
  return (
    <div className="w-full mt-3 mb-6">
        <Image className="absolute ml-3 mt-2.5 opacity-15" src="/search.png" alt="" height={20} width={20}></Image>
      <input
        className="w-full h-9.5 border-2 border-gray-200 rounded px-10 "
        type="text"
        placeholder="Search for dishes"
      />
    </div>
  );
};
