"use client";

import React from "react";
import { OrderSteps } from "@/components/OrderSteps/OrderSteps";
import { OrderSummary } from "@/components/OrderSummary/OrderSummary";
import { useZUserStore } from "@/store/useZUserStore";
import { useQuery } from "@tanstack/react-query";

export default function Order() {
type OrderData = {
    user_id: string;
    order_id: string;
    delivery_location: string | null;
    sub_total: number;
    delivery_fee: number;
    total_price: number;
    instruction: string;
    payment_method: string;
    created_at:string;
    order_status: string;
  };

  const { zuser } = useZUserStore();
  const user_id = zuser?.id;
  const fetchOrders = async () => {
    const res = await fetch(`/api/orderdetails/${user_id}`);
    if (!res.ok) throw new Error("Failed to fetch food items");

    return res.json();
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders", user_id],
    queryFn: fetchOrders,
    enabled: !!user_id,
  });
  //console.log(data);
  return (
    <>
      <div className="min-h-screen">
        <div className="-mx-10 py-0.5 bg-white md:-mx-20 lg:-mx-30">
          <div className="px-10 md:px-20 lg:px-30">
            <div>
              {isLoading
                ? "Loading orders..."
                : isError
                ? "Error fetching orders."
                : data?.length === 0
                ? "Currently You Have No Orders"
                : data?.map((order: OrderData) => (
                    <div className="font-bold text-lg" key={order.order_id}>
                      Order ID: {order.order_id}
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-6 flex flex-col lg:flex lg:flex-row gap-6">
            <div className="md:flex-4">
             <div>
              {isLoading
                ? "Loading orders..."
                : isError
                ? "Error fetching orders."
                : data?.length === 0
                ? "Currently You Have No Orders"
                : data?.map((order: OrderData) => (
                    <div  key={order.order_id}>
                      <OrderSteps status={order.order_status} />
                    </div>
                  ))}
            </div>
            </div>
            <div className="md:flex-3">
              {isLoading
                ? "Loading orders..."
                : isError
                ? "Error fetching orders."
                : data?.length === 0
                ? "Currently You Have No Orders"
                : data?.map((order: OrderData) => (
                    <OrderSummary key={order.order_id} orderDetail={order} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
