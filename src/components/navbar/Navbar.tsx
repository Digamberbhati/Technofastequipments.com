"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Logo link (replace this with the actual logo link)
const logoUrl = "https://5.imimg.com/data5/SELLER/Logo/2024/4/408631371/OJ/HE/MU/66460055/techno-120x120.jpg";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="bg-zinc-900" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("fixed top-0 w-full z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex w-full items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              <img src={"https://5.imimg.com/data5/SELLER/Logo/2024/4/408631371/OJ/HE/MU/66460055/techno-120x120.jpg"} alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links for desktop */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/service">Service</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>

            <MenuItem setActive={setActive} active={active} item="Company">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/client">Client</HoveredLink>
                <HoveredLink href="/support">Support</HoveredLink>
              </div>
            </MenuItem>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 text-center pb-4">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/service" onClick={() => setIsOpen(false)}>Service</Link>
            <Link href="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

            <MenuItem setActive={setActive} active={active} item="Company">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/client" onClick={() => setIsOpen(false)}>Client</HoveredLink>
                <HoveredLink href="/support" onClick={() => setIsOpen(false)}>Support</HoveredLink>
              </div>
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}
