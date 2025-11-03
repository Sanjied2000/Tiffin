'use client'

import React from 'react'
import Link from 'next/link'
import { useAccountButtonStore } from '@/store/accountButtonStore'

export const ActivityButton = () => {
  const {buttonNum, setButtonNum } = useAccountButtonStore();
  return (
    <div> {/* Activity buttons Starts */}
          <div className="bg-white p-1 rounded text-sm mt-2 md:px-5 lg:py-10 lg:text-base">
            <div className="flex items-center gap-x-0 gap-y-1 justify-between lg:flex-col">
              <div className={` px-2 py-2 rounded cursor-pointer text-gray-500 hover:bg-orange-100 md:px-5 lg:px-15 ${buttonNum === 0 ? 'bg-orange-500 text-white hover:bg-orange-400' : ''}`} onClick={() => setButtonNum(0)}>
                Profile
              </div>
              <div className={` px-2 py-2 rounded cursor-pointer text-gray-500 hover:bg-orange-100 md:px-5 lg:px-13 ${buttonNum === 1 ? 'bg-orange-500 text-white hover:bg-orange-400' : ''}`} onClick={() => setButtonNum(1)}>
                Rewards
              </div>
              <div className={` px-2 py-2 rounded cursor-pointer text-gray-500 hover:bg-orange-100 md:px-5 lg:px-15 ${buttonNum === 2 ? 'bg-orange-500 text-white hover:bg-orange-400' : ''}`} onClick={() => setButtonNum(2)}>
                Orders
              </div>
              <div className={` px-2 py-2 rounded cursor-pointer text-gray-500 hover:bg-orange-100 md:px-5 lg:px-12 ${buttonNum === 3 ? 'bg-orange-500 text-white hover:bg-orange-400' : ''}`} onClick={() => setButtonNum(3)}>
                Payments
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
          {/* Activity buttons Ends */}</div>
  )
}
