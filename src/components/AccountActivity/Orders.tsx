import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useZUserStore } from "@/store/useZUserStore";
import { AcOrderCard } from "./AcOrderCard";
import type { OrderData2 } from "@/lib/type";
const Orders = () => {
  const { zuser } = useZUserStore();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await fetch(`/api/order?user_id=${zuser?.id}`);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching orders</div>;

  return (
    <div className="pt-1">
      <div className="bg-white rounded p-6 w-full font-bold text-lg">
        Orders History
      </div>
      {data.map((order: OrderData2) => (
        <AcOrderCard key={order.order_id} order={order} />
      ))}

    </div>
  );
};

export default Orders;
