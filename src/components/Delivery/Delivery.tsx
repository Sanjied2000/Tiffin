"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LocationSelector } from "../LocationSelector/LocationSelector";
import { useCartStore } from "@/store/cartStore";
import { usePaymentStore } from "@/store/paymentStore";
import { useMemo } from "react";
import { useState } from "react";
import { useZUserStore } from "@/store/useZUserStore";
import { useLocationStore } from "@/store/locationStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CartItem } from "@/lib/type";
import { toast } from "sonner";
import { useRouter } from "next/navigation";





const Delivery = () => {
  const router=useRouter();
  const { clearCart, cart } = useCartStore();
  const {zuser} =useZUserStore();
  const {location} = useLocationStore();
  const user=zuser? zuser.id:" ";
  
  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const delivery = useMemo(() => {
    return cart.reduce((total, item) => total + 2 * item.quantity, 0);
  }, [cart]);

  const total = subtotal + delivery;
  const { payment, setPayment } = usePaymentStore();

  const [instruction, setinstruction] = useState("");



type OrderData = {
  user: string;
  location: string | null;
  subtotal: number;
  delivery: number;
  total: number;
  instruction: string;
  payment: string;
  cart: CartItem[];
};


  // --- Mutation for placing order ---
  const orderMutation = useMutation({
    mutationFn: async (orderData : OrderData) => {
      const res = await axios.post("/api/order/", orderData);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Order placed successfully!");
      clearCart();
      router.push('/')
    },
    onError: (err) => {
      console.error(err);
      toast.warning("Failed to place order!");
    },
  });





  const handleCheckout = () => {
    const orderData = {
      user,
      location,
      subtotal,
      delivery,
      total,
      instruction,
      payment,
      cart,
    };
    orderMutation.mutate(orderData);
  };

  return (
    <div className="bg-white px-6 py-6 rounded w-full flex flex-col gap-3">
      <div className="flex justify-between text-gray-500">
        <div>Subtotal</div>
        <div>{subtotal}</div>
      </div>
      <div className="flex justify-between text-gray-500">
        <div>Delivery charge</div>
        <div>{delivery}</div>
      </div>
      <div className="flex justify-between text-gray-600 font-bold">
        <div>Total</div>
        <div>{total}</div>
      </div>
      <div>Delivery Address</div>
      <LocationSelector />
      <div>Instruction Any</div>
      <div className="border-1 border-gray-200 rounded">
        <input
          className="w-full py-1 px-3"
          maxLength={50}
          onChange={(e) => {
            setinstruction(e.target.value);
          }}
          type="text"
        />
      </div>

      <div className="flex gap-6 mt-6">
        <div className={`hover:bg-orange-100 p-2 rounded select-none ${payment=="wallet"? "border-2 border-orange-500":""}`} onClick={()=>{setPayment("wallet")}}>
          <Image
            src="/student-wallet.png"
            alt=""
            width={30}
            height={20}
          ></Image>
        </div>
        <div className={`hover:bg-orange-100 p-2 rounded select-none ${payment=="bkash"? "border-2 border-orange-500":""}`} onClick={()=>{setPayment("bkash")}}>
          <Image src="/Bkash.png" alt="" width={30} height={30}></Image>
        </div>
      </div>
      <div className="mt-6 flex gap-x-4">
        <Button  onClick={() =>{if(cart.length==0){toast.warning("Cart is Empty");return} handleCheckout()} }>Check Out</Button>
        <Button onClick={() => clearCart()}>Clear Cart</Button>
      </div>
    </div>
  );
};
export default Delivery;
