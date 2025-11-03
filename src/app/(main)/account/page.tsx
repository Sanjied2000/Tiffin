import React from "react";


import Details from "@/components/AccountActivity/Details";
import { ActivityButton } from "@/components/AccountActivity/ActivityButton";
import { ActivityShow } from "@/components/AccountActivity/ActivityShow";






export default function Account() {

  

  return (
    <>
    
      <div className="min-h-screen">

        <Details/>
       
        <div className="lg:flex flex-2 gap-6">
          <ActivityButton />
          <div className="mt-2 flex-6">
            <ActivityShow/>
          </div>
        </div>
      </div>
    </>
  );
}
