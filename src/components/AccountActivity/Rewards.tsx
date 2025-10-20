import React from "react";

const Rewards = () => {
  return (
    <div>
      <div className="w-full p-6 bg-orange-500 rounded">
        <div className="font-bold text-lg text-white">You Have 2400 Points</div>
      </div>
      <div className="w-full p-6 bg-white rounded mt-6">
        <div className="font-bold text-lg mb-6">Your Offers</div>
        <div>
          <div className="px-3 py-2 w-max border-2 rounded text-sm border-orange-400">
            <div>Free Delivery</div>{" "}
            <div className="text-xs text-gray-500 ">Untill 30-12-2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
