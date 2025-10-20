import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LocationSelector } from "../LocationSelector/LocationSelector";
import { useCartStore } from "@/store/cartStore";

const Delivery = () => {
  const {clearCart} =useCartStore();

  return (
    <div className="bg-white px-6 py-6 rounded w-full flex flex-col">
      <div>Delivery Address</div>
      <LocationSelector/>
      <div>Instruction Any</div>
      <div className="border-1 border-gray-200 rounded">
        <input className="w-full" type="text" />
      </div>
      <div className="flex gap-6 mt-6">
        <div className="hover:bg-orange-100 p-2 rounded">
          <Image
            src="/student-wallet.png"
            alt=""
            width={30}
            height={20}
          ></Image>
        </div>
        <div className="hover:bg-orange-100 p-2 rounded">
        
          <Image
            src="/Bkash.png"
            alt=""
            width={30}
            height={30}
          ></Image>
        </div>
      </div>
      <div className="mt-6 flex gap-x-4">
        <Button>Check Out</Button>
        <Button  onClick={()=>clearCart()}>Clear Cart</Button>
      </div>
    </div>
  );
};
export default Delivery;
