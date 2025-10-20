"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu } from "lucide-react";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { useCartStore } from "@/store/cartStore";
import { useClerk } from "@clerk/nextjs";

import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  
} from "@clerk/nextjs";
import { useZUserStore } from '@/store/useZUserStore'
import { ZUserSetter } from "../ZUserSetter";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { zuser,clearZUser } = useZUserStore()
  const {cart,clearCart}=useCartStore()
  const pathname = usePathname();
  const isActive = (path: string): boolean => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };
  return (
    <div className="px-10 pt-0 pb-3 overflow-x-hidden box mt-0 md:px-20 lg:px-30 ">
      <div className="w-full mt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md justify-items-center content-center bg-orange-500 relative">
              <Image src="/logo.png" alt="" height={15} width={15}></Image>
            </div>
            <div className="text-2xl font-semibold">Tiffin</div>
          </div>
          <div className="hidden gap-4 md:flex">
            <div>
              <Link
                href="/"
                className={`px-4 py-2 rounded ${
                  isActive("/")
                    ? "bg-orange-500 text-white "
                    : "bg-none text-gray-400  hover:bg-orange-100 hover:text-gray-600 "
                }`}
              >
                Menu
              </Link>
            </div>
            <div onClick={()=>{if(zuser==null){openSignIn()}}}>
              <Link
                href="/order"
                className={`px-4 py-2 rounded ${
                  isActive("/order")
                    ? "bg-orange-500 text-white "
                    : "bg-none text-gray-400  hover:bg-orange-100 hover:text-gray-600 "
                }`}
              >
                Orders
              </Link>
            </div>
            <div onClick={()=>{if(zuser==null){openSignIn()}}}>
              <Link
                href="/account"
                className={`px-4 py-2 rounded ${
                  isActive("/account")
                    ? "bg-orange-500 text-white "
                    : "bg-none text-gray-400  hover:bg-orange-100 hover:text-gray-600 "
                }`}
              >
                Account
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <Link href="/cart">
                <ShoppingBag color="#c3c2c1" />
              </Link>
              <div className="h-4 w-4 absolute mx-3.5 -my-8.5 rounded-full font-bold text-white text-xs text-center bg-orange-500">
                {cart.length}
              </div>
            </div>
       
            <div className="text-gray-400 items-center gap-4">
              
              {/* When user is not signed in yet*/}
              <SignedOut>               
                <SignInButton mode="modal">
                  <button className="text-gray-400 cursor-pointer">
                    Sign In
                  </button>
                </SignInButton>               
              </SignedOut>

              {/* When user is signed in */}
              <SignedIn>
                 <ZUserSetter></ZUserSetter>
                <SignOutButton >
                  
                  <button onClick={() => {clearZUser();clearCart();}} className="text-red-500 cursor-pointer">
                    Logout
                  </button>
                </SignOutButton>
              </SignedIn>
            </div>
            <div className="flex items-center mt-1 md:hidden">
              <MenuDrawer></MenuDrawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
