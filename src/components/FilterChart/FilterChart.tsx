import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export const FilterChart = () => {
  return (
    <div className=" bg-white  mt-6 p-5 rounded hidden lg:flex flex-col gap-6">
      <div>Filter</div>
      <div>Preferences</div>
      <div className="flex items-center">
        <Checkbox id="vegeterian" />
        <div className="ml-1">Vegeterian</div>
      </div>

      <div className="flex items-center">
        <Checkbox id="glutenfree" />
        <div className="ml-1">Gluten Free</div>
      </div>

      <div className="flex items-center">
        <Checkbox id="protinrich" />
        <div className="ml-1">Protin Rich</div>
      </div>
      <div>Price</div>
      <div className="w-full">
        <Slider defaultValue={[100]} max={200} step={1} />
        <div className="flex justify-between">
            <div>0</div>
            <div>200</div>
        </div>
      </div>
      <div>Exclude Allergens</div>
      <div className="flex items-center">
        <Checkbox id="dairy" />
        <div className="ml-1">Dairy</div>
      </div>

      <div className="flex items-center">
        <Checkbox id="eggs" />
        <div className="ml-1">Eggs</div>
      </div>

      <div className="flex items-center">
        <Checkbox id="nuts" />
        <div className="ml-1">Nuts</div>
      </div>
    </div>
  );
};
