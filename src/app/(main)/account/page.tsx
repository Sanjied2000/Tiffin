import React from "react";
import Link from "next/link";
import Profile from "@/components/AccountActivity/Profile";
import Rewards from "@/components/AccountActivity/Rewards";
import Orders from "@/components/AccountActivity/Orders";
import { currentUser } from "@clerk/nextjs/server";



export default async function Account() {
  const user = await currentUser();
  const firstLetter: string = (user?.firstName?.toString() ?? " ")[0];
  if (user == null) {
    return <>Loading</>;
  }

  
  return (
    <>
    
      <div className="min-h-screen">
        {/* Top part Starts */}
        <div className="-mx-10 py-4  bg-white md:-mx-20 lg:-mx-30">
          <div className="px-10 md:px-20 lg:px-30">
            <div className="flex items-center gap-4">
              <div className="flex p-5 rounded-full w-15 h-15 bg-orange-200 justify-center items-center text-3xl font-bold text-white">
                {firstLetter}
              </div>
              <div className="w-full">
                <div className="text-2xl font-bold">{user.firstName}!</div>
                <div className="flex justify-between">
                  <div>{user.emailAddresses[0].emailAddress}</div>
                  <div>2400 points</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top part Ends */}

        <div className="lg:flex flex-2 gap-6">
          {/* Activity buttons Starts */}
          <div className="bg-white p-1 rounded text-sm mt-2 md:px-5 lg:py-10 lg:text-base">
            <div className="flex items-center gap-0.5 justify-between lg:flex-col">
              <div className=" px-3 py-2 rounded cursor-pointer text-gray-500 hover:bg-orange-100 md:px-5 lg:px-15">
                <Link href="">Profile</Link>
              </div>
              <div className=" px-3 py-2 rounded cursor-pointer text-gray-500 hover:bg-orange-100 md:px-5 lg:px-15">
                <Link href="">Rewards</Link>
              </div>
              <div className=" px-3 py-2 rounded cursor-pointer text-gray-500 hover:bg-orange-100 md:px-5 lg:px-15">
                <Link href="">Orders</Link>
              </div>
              <div className=" px-3 py-2 rounded cursor-pointer text-gray-500 hover:bg-orange-100 md:px-5 lg:px-15">
                <Link href="">Payments</Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center">
              <div>Quick Actions</div>
              <div className=" px-3 py-2 rounded cursor-pointer text-gray-500 hover:bg-orange-100 md:px-5 lg:px-15">
                <Link href="">Support</Link>
              </div>
              <div className=" px-3 py-2 rounded cursor-pointer text-gray-500 hover:bg-orange-100 md:px-5 lg:px-15">
                <Link href="/">Order Now</Link>
              </div>
            </div>
          </div>
          {/* Activity buttons Ends */}
          <div className="mt-2 flex-6">
            <Orders />
          </div>
        </div>
      </div>
    </>
  );
}
