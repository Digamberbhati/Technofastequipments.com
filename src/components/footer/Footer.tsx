import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Footer About Section */}
          <div className="col-span-1">
            <a href="index.html" className="flex items-center text-lg font-bold text-white">
              Technofast Equipments PVT. LTD
            </a>
            <div className="pt-4 space-y-2 text-sm">
              <p><strong>Address:</strong> Gali No.1 Near Beri Ka Bagh Malerna Road, Adarsh Nagar,</p>
              <p>Sector-63 Ballabgarh, Faridabad, Haryana – 121004</p>
              <p><strong>Phone:</strong> +918930109050, +919467751411, +917988309282</p>
              <p><strong>Email:</strong> technofastequipments@gmail.com</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-span-1 p-4">
            <h4 className="text-lg font-semibold pb-2">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/companyprofile" className="hover:underline">Company Profile</Link></li>
              <li><Link href="/service" className="hover:underline">Service</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold pb-2">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/careers" className="hover:underline">Career</Link></li>
              <li><Link href="termsandconditions.html" className="hover:underline">Terms and Conditions</Link></li>
              <li><Link href="privacy.html" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold pb-2">Follow Us</h4>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
              <a href="https://wa.me//+91-9467751411" className="hover:text-green-500"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm border-t border-gray-600 pt-4">
          <p>©2024 <strong>Technofast Equipments</strong> All Rights Reserved</p>
          <p>Designed by <a href="https://greatertechhub.com/" target="_blank" className="text-blue-500 hover:underline">Greatertechhub</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
