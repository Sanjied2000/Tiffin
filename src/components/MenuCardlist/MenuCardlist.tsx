"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../Card/Card";
import type { FoodItem } from "@/lib/type";
import { useFilterStore } from "@/store/filterStore";
import { useSearchStore } from "@/store/searchStore";

type MenuCardProps = {
  category: string;
};

export const MenuCardlist = ({ category }: MenuCardProps) => {
  const { price, vegeterian, gluten_free, protin_rich, dairy, eggs, nuts } =
    useFilterStore();
  const { query } = useSearchStore();
  function searchResult(food_name: string) {
    return food_name.toLowerCase().includes(query.toLowerCase());
  }

  const fetchFoodItems = async (): Promise<FoodItem[]> => {
    const res = await fetch(`/api/foods/${category}`);
    if (!res.ok) throw new Error("Failed to fetch food items");

    return res.json();
  };

  const { data, isLoading, isError } = useQuery<FoodItem[]>({
    queryKey: ["foodItems", category],
    queryFn: fetchFoodItems,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;
  const ItemNumber = data ? data.length : 0;
  console.log(data);

  return (
    <div>
      <div className="pt-6 min-w-ful">
        <div className="text-lg">{category}</div>
        <div className="text-sm text-gray-500">{ItemNumber} items found</div>
      </div>

      <div className="flex justify-center gap-y-10 gap-x-3 flex-wrap mt-6 md:gap-x-8 lg:gap-x-10 lg:justify-start">
        {data?.map(
          (item) =>
            item.new_price < price &&
            searchResult(item.food_name) &&
            (!vegeterian || item.vegeterian) &&
            (!protin_rich || item.protin_rich) &&
            (!gluten_free || item.gluten_free) &&
            (!eggs || !item.eggs) &&
            (!dairy || !item.dairy) &&
            (!nuts || !item.nuts) && <Card key={item.id} food={item} />
        )}
      </div>
    </div>
  );
};
