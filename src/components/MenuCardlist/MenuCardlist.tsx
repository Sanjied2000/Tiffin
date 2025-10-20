"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../Card/Card";
import type { FoodItem } from "@/lib/type"; // adjust import path if needed


type MenuCardProps = {
  category: string;
};

export const MenuCardlist = ({ category }: MenuCardProps) => {
  const fetchFoodItems = async (): Promise<FoodItem[]> => {
    const res = await fetch(`/api/foods/${category}`);
    if (!res.ok) throw new Error("Failed to fetch food items");

    return res.json();
  };

  const { data, isLoading, isError } = useQuery<FoodItem[]>({
    queryKey: ["foodItems",category],
    queryFn: fetchFoodItems,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;
  const ItemNumber = data ? data.length : 0;

  return (
    <div >
      <div className="pt-6 min-w-ful">        
        <div className="text-lg">{category}</div>
        <div className="text-sm text-gray-500">{ItemNumber} items found</div>
      </div>

      <div className="flex justify-center gap-y-10 gap-x-3 flex-wrap mt-6 md:gap-x-8 lg:gap-x-10 lg:justify-start">
        {data?.map((item) => (
          item.new_price<100  &&<Card key={item.id} food={item} />
        ))}
      </div>
      
    
    </div>
    
  );
};
