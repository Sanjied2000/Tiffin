import React from "react";
import { FoodItem } from "@/lib/type";

type order_item = {
  order_id: string;
  food_name: string;
  quantity: number;
  fooditems: FoodItem;
};


interface OSCardProps {
  order: order_item;
}

export const OSCard: React.FC<OSCardProps> = ({ order }) => {
  console.log(order);
  return (
    <div className="flex items-center gap-6 mb-2">
      <div className="w-3 pl-4 pr-6 py-2 rounded bg-orange-200 font-bold">
        {order.quantity}
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="font-semibold">
          {order.food_name}
          <div className="text-xs font-normal text-gray-500">
            ${order.fooditems.new_price} each
          </div>
        </div>
        <div className="font-bold">${order.fooditems.new_price * order.quantity}</div>
      </div>
    </div>
  );
};
