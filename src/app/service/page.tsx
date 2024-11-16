import React from 'react';
// import cn from 'classnames';
// import Marquee from "react-fast-marquee";

const Servicepage = () => {
  return (
    <>
   <br/>
   <br/>
   <br/>
   <br/> <br/>
   <br/>

   <section className="bg-gray-50 py-16 px-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
    <p className="text-gray-600 text-lg mb-10">
      We offer a range of innovative and customer-focused services designed to meet your needs. Discover how we can help you achieve your goals.
    </p>
  </div>



   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {/* <!-- Service Card --> */}
  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
    <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-4">
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a6 6 0 00-6 6v4H3a2 2 0 000 4h14a2 2 0 000-4h-1V8a6 6 0 00-6-6z"></path>
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">On-Time Free Delivery</h3>
    <p className="text-gray-600 max-h-20 overflow-hidden hover:max-h-full transition-all duration-300">
      When you choose Technofast Equipments, you’re investing in peace of mind. We proudly offer a one-year warranty on all of our products. This warranty is our promise to you that we stand behind our equipment, with continuous support for a full year after purchase.
      Whether you're an Indian customer or a client from another part of the world, you can count on us to provide you with exceptional after-sales service. Our expert team is always ready to assist with any issues, ensuring that your equipment operates at its best, day in and day out.
      <ul>
        <li>Comprehensive Coverage:</li>
        The warranty covers manufacturing defects and ensures your equipment stays in optimal condition.
        <li>Global Support:</li> Our dedicated customer service team is available for international clients as well, offering remote troubleshooting and fast resolution to issues—no matter your location.
        <li>No Hidden Costs:</li> With a one-year warranty, you won’t have to worry about unexpected repair expenses.
      </ul>
    </p>
  </div>

  {/* <!-- Service Card --> */}
  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
    <div className="flex items-center justify-center h-16 w-16 bg-green-100 text-green-600 rounded-full mb-4">
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 7H7v6h6V7z"></path>
        <path fill-rule="evenodd" d="M5 2a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H5zm9 14H6V4h8v12z" clip-rule="evenodd"></path>
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2"> Free Installation Services</h3>
    <p className="text-gray-600 max-h-20 overflow-hidden hover:max-h-full transition-all duration-300">
    Setting up high-tech equipment should never be a hassle. That's why Technofast Equipments offers free professional installation for all of our products. Our highly trained technicians will ensure that your metal detectors and related equipment are installed with precision, optimized for peak performance, and ready to use immediately.
From complex pharmaceutical applications in India to sophisticated food safety measures across global industries, we ensure that every installation meets the highest standards of quality and compliance.

On-Site Expertise: Our installation specialists will visit your site to carry out a comprehensive, no-cost installation of your equipment.
Global Reach: Whether you're based in a metropolitan city in India or a remote location abroad, we guarantee that our installation services are available to you.
Hassle-Free Setup: We handle everything from calibration to final checks, ensuring you have zero downtime.

    </p>
  </div>

  {/* <!-- Service Card --> */}
  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
    <div className="flex items-center justify-center h-16 w-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5 10a5 5 0 1110 0 5 5 0 01-10 0zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clip-rule="evenodd"></path>
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">One-Year Warranty</h3>
    <p className="text-gray-600 max-h-20 overflow-hidden hover:max-h-full transition-all duration-300">
    When you choose Technofast Equipments, you’re investing in peace of mind. We proudly offer a one-year warranty on all of our products. This warranty is our promise to you that we stand behind our equipment, with continuous support for a full year after purchase.
Whether you're an Indian customer or a client from another part of the world, you can count on us to provide you with exceptional after-sales service. Our expert team is always ready to assist with any issues, ensuring that your equipment operates at its best, day in and day out.

Comprehensive Coverage: The warranty covers manufacturing defects and ensures your equipment stays in optimal condition.
Global Support: Our dedicated customer service team is available for international clients as well, offering remote troubleshooting and fast resolution to issues—no matter your location.
No Hidden Costs: With a one-year warranty, you won’t have to worry about unexpected repair expenses.

    </p>
  </div>
</div>
</section>

  


    </>
  );
};

export default Servicepage;
