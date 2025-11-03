import React from "react";
import Image from "next/image";


interface OrderStepsProps {status:string;}
 


export const OrderSteps: React.FC<OrderStepsProps> = ({ status }) => {
  return (
    <>
      <div className="bg-white rounded-2xl px-4 py-6 text-xs md:p-6 md:text-lg">
        <div className="mb-6  text-lg font-extrabold">
          Ongoing Order Progress
        </div>

        {/* step start */}
        <div className="flex items-center gap-8">
          <div className={`p-4 border-2 w-max rounded-full opacity-50 border-gray-500 ${status == "ordered"||status == "cooking"||status == "picked"||status == "ontheway"||status == "delivered" ? "border-green-600" : ""}`}>
            <Image
              src="/orderconfirmed.png"
              alt=""
              width={20}
              height={20}
            ></Image>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <div>Order Confirmed</div>
              <div className="text-xs text-gray-500">
                we received your order
              </div>
            </div>
            <div className="text-xs">5 Min</div>
          </div>
        </div>

        <div className={`  border-l-2 h-10 w-0 ml-6.5  border-gray-500 opacity-50 ${status == "cooking"||status == "picked"||status == "ontheway"||status == "delivered" ? "border-green-600" : ""}`}></div>
        {/* step end */}

        {/* step start */}
        <div className="flex items-center gap-8">
          <div className={`p-4 border-2 w-max rounded-full opacity-50 border-gray-500 ${status == "cooking"||status == "picked"||status == "ontheway"||status == "delivered" ? "border-green-600" : ""}`}>
            <Image src="/cooking.png" alt="" width={20} height={20}></Image>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <div>Prepareing Your Food</div>
              <div className="text-xs text-gray-500">
                cooking your food
              </div>
            </div>
            <div className="text-xs">60 Min</div>
          </div>
        </div>

        <div className={`  border-l-2 h-10 w-0 ml-6.5  border-gray-500 opacity-50 ${status == "picked"||status == "ontheway"||status == "delivered" ? "border-green-600" : ""}`}
        ></div>
        {/* step end */}
        {/* step start */}
        <div className="flex items-center gap-8">
          <div className={`p-4 border-2 w-max rounded-full opacity-50 border-gray-500 ${status == "picked"||status == "ontheway"||status == "delivered" ? "border-green-600" : ""}`}>
            <Image src="/boxed.png" alt="" width={20} height={20}></Image>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <div>Ready for Pickup</div>
              <div className="text-xs text-gray-500">
                 picked your order
              </div>
            </div>
            <div className="text-xs">15 Min</div>
          </div>
        </div>

        <div className={`  border-l-2 h-10 w-0 ml-6.5  border-gray-500 opacity-50 ${status == "ontheway"||status == "delivered" ? "border-green-600" : ""}`}
        ></div>
        {/* step end */}
        {/* step start */}
        <div className="flex items-center gap-8">
          <div className={`p-4 border-2 w-max rounded-full opacity-50 border-gray-500 ${status == "ontheway"||status == "delivered" ? "border-green-600" : ""}`}>
            <Image src="/van-fast.png" alt="" width={20} height={20}></Image>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <div>Out for Delivery</div>
              <div className="text-xs text-gray-500">
                food is on the way
              </div>
            </div>
            <div className="text-xs">30 Min</div>
          </div>
        </div>

        <div className={`  border-l-2 h-10 w-0 ml-6.5  border-gray-500 opacity-50 ${status == "delivered" ? "border-green-600" : ""}`}
        ></div>
        {/* step end */}

        {/* step start */}
        <div className="flex items-center gap-8">
          <div className={`p-4 border-2 w-max rounded-full opacity-50 border-gray-500 ${status == "delivered" ? "border-green-600" : ""}`}>
            <Image src="/marker.png" alt="" width={20} height={20}></Image>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <div>Order Delivered</div>
              <div className="text-xs text-gray-500">enjoy your food</div>
            </div>
            <div className="text-xs">5 Min</div>
          </div>
        </div>
        {/* step end */}

        <div className="  border-b-1 h-0 w-full mt-10  border-gray-400 opacity-50"></div>
        <div className="mb-3 mt-6  text-lg font-extrabold">Estimated Time</div>
        <div className="mb-6   text-lg ">120 Minutes Maximum</div>
      </div>
    </>
  );
};


