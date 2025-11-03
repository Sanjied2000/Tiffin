import React from "react";
import { currentUser } from "@clerk/nextjs/server";

export default async function Details() {
  const user = await currentUser();
  const firstLetter: string = (user?.firstName?.toString() ?? " ")[0];
  if (user == null) {
    return <>Loading</>;
  }
  return (
    <div>
      
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
    </div>
  );
}
