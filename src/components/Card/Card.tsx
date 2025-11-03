"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import type { FoodItem } from "@/lib/type";
import { useZUserStore } from "@/store/useZUserStore";
import { toast } from "sonner";
import { useCartStore } from "@/store/cartStore";

interface CardProps {
  food: FoodItem;
}

export const Card: React.FC<CardProps> = ({ food }) => {
  const { zuser } = useZUserStore();

  const { addToCart } = useCartStore();

  return (
    <div className="w-85 h-75 bg-white rounded-2xl overflow-hidden lg:w-2/7 shadow-md hover:shadow-lg transition md:w-65">
      <div className="w-full h-35 relative">
        <Image
          src={food.img_url}
          alt={food.food_name}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <div className="px-2 mt-1 font-semibold text-lg">{food.food_name}</div>
        <div className="text-xs h-15 px-2 text-gray-500 line-clamp-2">
          {food.description || "No description available."}
        </div>
        <div className="px-2 text-xs text-gray-500">
          🕑 {food.cooking_time || "30 Min"}
        </div>
      </div>

      
      <div className="px-2 mt-2 flex justify-between items-center pb-3">
        <div className="font-bold text-green-700">
          ${food.new_price.toFixed(2)}
        </div>

        <div>
          <Button
            key={food.food_name}
            size="sm"
            onClick={() => {
              if (!zuser) {
                toast.warning("Failed to add Item to cart", {
                  description: "Please Sign In First",
                });
                return;
              }
              addToCart(food.id.toString(),food.food_name,food.new_price,food.img_url);
            }}
          >
            {"Buy Now"}
          </Button>
        </div>
      </div>
    </div>
  );
};
