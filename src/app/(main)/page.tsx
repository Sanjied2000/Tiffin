"use client";
import { FilterChart } from "@/components/FilterChart/FilterChart";

import { MenuCardlist } from "@/components/MenuCardlist/MenuCardlist";
import Location from "@/components/Location/Location";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import ItemBar from "@/components/ItemBar/ItemBar";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <div className="bg-orange-200 flex items-center justify-center text-xs">
        <Spinner />
        Backend Features Are Under Development
      </div>
      <div className="-mx-10 py-0.5 bg-white md:-mx-20 lg:-mx-30">
        <div className="px-10 md:px-20 lg:px-30">
          <Location />
          <SearchBar />
        </div>
      </div>

      <div className="flex w-full md:gap-6">
        <div className="md:flex-2">
          <FilterChart />
        </div>
        <div className="w-full lg:flex-6">
          <div className="flex flex-col">
            <div className="mt-6">
              <ItemBar onValueChange={(value) => setSelectedCategory(value)} />
            </div>

            <div className="">
              <MenuCardlist category={selectedCategory} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
