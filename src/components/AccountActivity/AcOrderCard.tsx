import React from "react";
import Image from "next/image";
import type { OrderData2 } from "@/lib/type";
import { CircleCheck, CirclePause, CircleX } from "lucide-react";

interface AcOrderCardProps {
  order: OrderData2;
}
export const AcOrderCard: React.FC<AcOrderCardProps> = ({ order }) => {

    const renderIcon = () => {
    switch (order.order_status) {
      case "delivered":
        return <CircleCheck color="green" />;
      case "cancelled":
        return <CircleX color="red" />;
      default:
        return <CirclePause color="yellow" />;
    }
  };

  {
    return (
      <div className="bg-white rounded p-6 w-full mt-6">
        <div className="flex gap-2 items-center mb-4">
            {renderIcon()}
          <div>{order.order_status}</div>
          <div>{order.created_at.slice(0, 10)}</div>
        </div>
        <div>Order #{order.order_id} </div>
        <div className="text-xs flex gap-2 mt-2">
          **<div>{order.delivery_location}</div>**<div>${order.total_price}</div>
        </div>
      </div>
    );
  }
};
