import React from "react";

export const OrderSummary = () => {
  return (
    <div className="bg-white rounded-2xl w-full p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-bold "> Order Summary</div>
        <div className="text-sm text-gray-500">10-3-2025</div>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-3 pl-4 pr-6 py-2 rounded bg-orange-200 font-bold">
          5
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold">
            Chicken Salad
            <div className="text-xs font-normal text-gray-500">
              chicken cucumber tomato etc.
            </div>
          </div>
          <div className="font-bold">$50</div>
        </div>
      </div>
      <div className="  border-b-1 h-0 w-full mt-10  border-gray-400 opacity-50"></div>
      <div className="flex justify-between my-2 text-gray-500">
        <div>Subtotal</div> <div>$50</div>
      </div>
      <div className="flex justify-between my-2 text-gray-500">
        <div>Delivery Fee</div> <div>$5</div>
      </div>
      <div className="  border-b-1 h-0 w-full mt-10  border-gray-400 opacity-50"></div>
      <div className="flex justify-between my-2 font-bold">
        <div>Total</div> <div>$55</div>
      </div>
      <div className="  border-b-1 h-0 w-full mt-10  border-gray-400 opacity-50"></div>
      <div className="my-2">
        <div className="text-gray-500 text-sm">Payment Method</div>{" "}
        <div className="font-bold">Student Token</div>
      </div>
      <div className="  border-b-1 h-0 w-full mt-10  border-gray-400 opacity-50"></div>
      <div className="my-2">
        <div className="text-gray-500 text-sm">Delivery Address</div>{" "}
        <div className="font-bold">Student Hall-3 , 4th Floor</div>
      </div>
    </div>
  );
};
