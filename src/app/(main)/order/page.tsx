import React from "react";
import OrderSteps from "@/components/OrderSteps/OrderSteps";
import { OrderSummary } from "@/components/OrderSummary/OrderSummary";

type OrderProps = {
  params: {
    user_id: string;
  };
};

export default function Order({ params }: OrderProps) {
  return (
    <>
      <div className="min-h-screen">
        <div className="-mx-10 py-0.5 bg-white md:-mx-20 lg:-mx-30">
          <div className="px-10 md:px-20 lg:px-30">
            <div>Currently You Have No Order</div>
          </div>
        </div>
        <div>
          <div className="mt-6 flex flex-col lg:flex lg:flex-row gap-6">
            <div className="md:flex-4">
              <OrderSteps />
            </div>
            <div className="md:flex-3">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
