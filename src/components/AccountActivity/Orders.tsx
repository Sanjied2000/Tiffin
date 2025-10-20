import React from "react";
import Image from "next/image";

const Orders = () => {
  return (
    <div className="pt-1">
      <div className="bg-white rounded p-6 w-full font-bold text-lg">
        Orders History
      </div>
      <div className="bg-white rounded p-6 w-full mt-6">
        <div className="flex gap-2 items-center mb-4">
        <Image src="/check-circle.png" alt="" height={20} width={25}></Image>
        <div>Delivered</div>
        <div>12-12-2025</div>
        </div>
        <div>Order #200-2000-15 </div>
        <div className="text-xs flex gap-2 mt-2">**<div>Student Hall 3</div>**<div>3 Items</div>**<div>$50.00</div></div>
      </div>
    </div>
  );
};

export default Orders;
