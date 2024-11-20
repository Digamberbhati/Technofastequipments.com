// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export function NavbarMenu() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar />
//     </div>
//   );
// }

// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50); // Adjust scroll distance
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={cn(
//         "fixed top-0 w-full z-50 transition-all duration-300",
//         isScrolled
//           ? "bg-black bg-opacity-80 shadow-md backdrop-blur-md"
//           : "bg-transparent"
//       )}
//     >
//       <div className="flex w-full items-center justify-between px-4 md:px-8 py-4">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-white">
//           <Link href="/">
//             <Image
//               src="/logo.png" // Replace with your logo path
//               alt="Logo"
//               width={100}
//               height={50}
//             />
//           </Link>
//         </div>

//         {/* Hamburger Menu Button for Mobile */}
//         <button
//           className="text-white md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-8 text-white text-lg">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/service">Service</Link>
//           <Link href="/careers">Careers</Link>
//           <Link href="/contact">Contact</Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="flex flex-col items-center space-y-4 text-center text-white bg-black bg-opacity-90 md:hidden py-4">
//           <Link href="/" onClick={() => setIsOpen(false)}>
//             Home
//           </Link>
//           <Link href="/about" onClick={() => setIsOpen(false)}>
//             About
//           </Link>
//           <Link href="/service" onClick={() => setIsOpen(false)}>
//             Service
//           </Link>
//           <Link href="/careers" onClick={() => setIsOpen(false)}>
//             Careers
//           </Link>
//           <Link href="/contact" onClick={() => setIsOpen(false)}>
//             Contact
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export function NavbarMenu() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar />
//     </div>
//   );
// }

// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50); // Adjust scroll distance
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={cn(
//         "fixed top-0 w-full z-50 transition-all duration-300",
//         isScrolled
//           ? "bg-black bg-opacity-60 shadow-md"
//           : "bg-transparent"
//       )}
//     >
//       <div className="flex w-full items-center justify-between px-4 md:px-8 py-4">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-white">
//           <Link href="/">
//             <Image
//               src="/logo.png" // Replace with your logo path
//               alt="Logo"
//               width={100}
//               height={50}
//             />
//           </Link>
//         </div>

//         {/* Hamburger Menu Button for Mobile */}
//         <button
//           className="text-white md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-8 text-white text-lg">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/service">Service</Link>
//           <Link href="/careers">Careers</Link>
//           <Link href="/contact">Contact</Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="flex flex-col items-center space-y-4 text-center text-white bg-black bg-opacity-90 md:hidden py-4">
//           <Link href="/" onClick={() => setIsOpen(false)}>
//             Home
//           </Link>
//           <Link href="/about" onClick={() => setIsOpen(false)}>
//             About
//           </Link>
//           <Link href="/service" onClick={() => setIsOpen(false)}>
//             Service
//           </Link>
//           <Link href="/careers" onClick={() => setIsOpen(false)}>
//             Careers
//           </Link>
//           <Link href="/contact" onClick={() => setIsOpen(false)}>
//             Contact
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll distance
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-black bg-opacity-60 shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="flex w-full items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
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

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-white text-lg">
          <Link
            href="/"
            className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="/service"
            className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Service
          </Link>
          <Link
            href="/careers"
            className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 text-center text-white bg-black bg-opacity-90 md:hidden py-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/service" onClick={() => setIsOpen(false)}>
            Service
          </Link>
          <Link href="/careers" onClick={() => setIsOpen(false)}>
            Careers
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}


