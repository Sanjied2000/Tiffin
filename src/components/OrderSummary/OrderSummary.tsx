import React from "react";
import { OSCard } from "./OSCard";
import { useQuery,useMutation } from "@tanstack/react-query";
import { FoodItem } from "@/lib/type";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAccountButtonStore } from "@/store/accountButtonStore";

type OrderData = {
  user_id: string;
  order_id: string;
  delivery_location: string | null;
  sub_total: number;
  delivery_fee: number;
  total_price: number;
  instruction: string;
  payment_method: string;
  created_at: string;
  order_status: string;
};
type order_item = {
  order_id: string;
  food_name: string;
  quantity: number;
  fooditems: FoodItem;
};
interface OrderSummaryProps {
  orderDetail: OrderData;
}
export const OrderSummary: React.FC<OrderSummaryProps> = ({ orderDetail }) => {
  const router = useRouter();
  const { setButtonNum } = useAccountButtonStore();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orderSummary", orderDetail.order_id],
    queryFn: async () => {
      const res = await fetch(`/api/order/${orderDetail.order_id}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
        
      }
      return res.json();
    },
  });

const cancelMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/order/${orderDetail.order_id}/cancel`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "cancelled" }),
      });
      if (!res.ok) throw new Error("Failed to cancel order");
      return res.json();
    },
    onSuccess: () => {
      setButtonNum(2);
      toast.warning("Order cancelled successfully!");
      router.push('/account');
      
    },
    onError: () => {
      toast.warning("Failed to cancel the order. Try again.");
    },
  });










  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;
  return (
    <div className="bg-white rounded-2xl w-full p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-bold "> Order Summary</div>
        <div className="text-sm text-gray-500">
          {orderDetail.created_at.slice(0, 10)}
        </div>
      </div>
      {data.map((order: order_item) => (
        <OSCard key={order.food_name} order={order}></OSCard>
      ))}

      <div className="  border-b-1 h-0 w-full mt-10  border-gray-400 opacity-50"></div>
      <div className="flex justify-between my-2 text-gray-500">
        <div>Subtotal</div> <div>{orderDetail.sub_total}</div>
      </div>
      <div className="flex justify-between my-2 text-gray-500">
        <div>Delivery Fee</div> <div>{orderDetail.delivery_fee}</div>
      </div>
      <div className="  border-b-1 h-0 w-full mt-10  border-gray-400 opacity-50"></div>
      <div className="flex justify-between my-2 font-bold ">
        <div>Total</div> <div>{orderDetail.total_price}</div>
      </div>
      <div className="  border-b-1 h-0 w-full mt-10  border-gray-400 opacity-50"></div>
      <div className="my-2">
        <div className="text-gray-500 text-sm">Payment Method</div>{" "}
        <div className="font-bold">{orderDetail.payment_method}</div>
      </div>
      <div className="  border-b-1 h-0 w-full mt-10  border-gray-400 opacity-50"></div>
      <div className="my-2">
        <div className="text-gray-500 text-sm">Delivery Address</div>{" "}
        <div className="font-bold">{orderDetail.delivery_location}</div>
      </div>
      
      <div className="flex justify-end">
        {orderDetail.order_status !== "cancelled" && (
          <Button onClick={() => cancelMutation.mutate()}>Cancel Order</Button>
        )}
      </div>
    </div>
  );
};
