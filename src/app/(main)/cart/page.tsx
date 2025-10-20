"use client";
import React from "react";
import OrderCard from "@/components/OrderCard/OrderCard";
import Delivery from "@/components/Delivery/Delivery";;
import { useCartStore } from "@/store/cartStore";




export default function Cart() {  
  const { cart } = useCartStore();



  return (
    <>
      <div className="min-h-screen mt-6">
        <div className="text-2xl font-bold">Shoping Cart</div>
        <div className="mb-6">Review your cart to checkout</div>

        <div className="lg:flex gap-6">
          <div className="w-full flex-6 lg:w-3/5">
            {cart.length === 0 ? (
              <p className="text-gray-500"></p>
            ) : (
              cart.map((item) => (
                               
                <OrderCard key={item.food_id} cart_item={item}/>
              ))
            )}
          </div>
          <div className="flex-3">
            <Delivery />
          </div>
        </div>
      </div>
    </>
  );
}
