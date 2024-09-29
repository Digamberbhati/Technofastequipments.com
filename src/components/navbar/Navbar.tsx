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
  
    
          {/* Hero Section */}
    <div>
      <section className="hero-section bg-gray-100 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Our Website</h1>
          <p className="text-lg text-gray-600">This is a sample home section built with Tailwind CSS and Next.js</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        </div>
      </section>
      <section className="features-section py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-xl font-bold text-gray-800">Feature 1</h2>
              <p className="text-lg text-gray-600">Description of feature 1</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-xl font-bold text-gray-800">Feature 2</h2>
              <p className="text-lg text-gray-600">Description of feature 2</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-xl font-bold text-gray-800">Feature 3</h2>
              <p className="text-lg text-gray-600">Description of feature 3</p>
            </div>
          </div>
        </div>
      </section>
      </div>
      

          </div>
    
  );
}


