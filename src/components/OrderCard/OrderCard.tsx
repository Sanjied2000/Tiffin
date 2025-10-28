"use client";
import React from "react";
import Image from "next/image";
import { CartItem, FoodItem } from "@/lib/type";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";


interface OrderCardProps {
  cart_item: CartItem;
}


export const OrderCard: React.FC<OrderCardProps> = ({ cart_item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =useCartStore();
  
  const Fprice = cart_item.price * cart_item.quantity;
  const url=(cart_item.img_url).trimEnd()
 
  return (
    <div className="w-full mb-3 bg-white rounded p-6 text-xs md:text-sm lg:text-base">
      <div className="flex justify-between">
        <div className="flex gap-6">
          <div><Image src={url} alt="" width={50} height={20}></Image></div>
          <div>
            <div className="pb-4 my-1">{cart_item.food_name}</div>
            <div className="text-orange-500 font-bold">${cart_item.price} each</div>
          </div>
        </div>
        <div>
          <div className="flex gap-3 items-center font-bold pb-4 ">
            <div
              className="px-2 py-1 select-none bg-gray-100 cursor-pointer"
              onClick={() => {
                decreaseQuantity(cart_item.food_id);
              }}
            >
              -
            </div>

            <div className="w-2">{cart_item.quantity}</div>
            <div
              className="px-2 py-1 select-none bg-gray-100 cursor-pointer"
              onClick={() => {
                increaseQuantity(cart_item.food_id);
              }}
            >
              +
            </div>
            <div
              className="ml-0.5 cursor-pointer"
              onClick={() => {
                removeFromCart(cart_item.food_id);
                toast.warning("Item Removed!");
              }}
            >
              <Image src="/trash.png" alt="" width={15} height={15}></Image>
            </div>
          </div>
          <div>
            <div className="font-bold">{Fprice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
