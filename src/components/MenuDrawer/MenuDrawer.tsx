import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { UtensilsCrossed, Clock, UserRound } from "lucide-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import React from "react";

const MenuDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu color="#c3c2c1" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="text-2xl">Wellcome Guest..</div>
          </SheetTitle>
        </SheetHeader>
        <div className="p-5 flex flex-col gap-6">
          <div className="flex gap-3.5">
            <Link href="/" className="flex gap-3.5">
              <UtensilsCrossed />
              Menu
            </Link>
          </div>
          <div>
            <Link href="/order/1" className="flex gap-3.5">
              <Clock /> Orders
            </Link>
          </div>
          <div>
            <Link href="/account/1" className="flex gap-3.5">
              <UserRound />
              Account
            </Link>
          </div>
          <div className="h-0.5 w-full bg-gray-200"></div>
          <div>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuDrawer;
