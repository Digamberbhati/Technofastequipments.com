"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarMenu() {
  return (
    <div className="relative w-full   flex items-center justify-center">
      <Navbar className="bg-zinc-900 " />
    
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0    w-full z-50", className)}
    >
      <Menu setActive={setActive} >
<div className="flex w-full items-center  justify-between py-4  ">
<div className="text-2xl font-bold">
LOGO
</div>

<div className="flex items-center justify-center gap-10 " >


        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/service">Service</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>

        <MenuItem setActive={setActive} active={active} item="Comapny">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/client">Client</HoveredLink>
            <HoveredLink href="/support">Support</HoveredLink>
          </div>
        </MenuItem>
</div>
</div>
       
      </Menu>
    </div>
  );
}
