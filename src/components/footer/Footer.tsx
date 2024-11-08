import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="#" className="flex items-center">
              {/* <Image 
                src="img/Logo.png" 
                width={32} 
                height={32} 
                className="object-contain h-8 mr-3" 
                alt="Logo" 
                priority 
              /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Your Logo</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:text-zinc-100 font-medium">Resource 1</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-100 font-medium">Resource 2</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:text-zinc-100 font-medium">Instagram</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-100 font-medium">LinkedIn</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-100 font-medium">Facebook</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-100 font-medium">WhatsApp</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:text-zinc-100 font-medium">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-100 font-medium">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-zinc-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">© 2024 <Link href="#" className="hover:text-zinc-100 font-medium">Your Company™</Link>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Social Media Icons */}
            {/* Add respective icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
