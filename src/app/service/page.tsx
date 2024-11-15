import React from 'react';
// import cn from 'classnames';
// import Marquee from "react-fast-marquee";




;

const Servicepage = () => {
  return (
    <>
    
   <br/>
   <br/>

    {/* <div className="bg-gradient-to-r bg-white  to-white py-16"> */}
    <div className="bg-gradient-to-r from-purple-400 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-14">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Bike Service */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 19.5h.75v-3m0 0H7.5a3 3 0 01-3-3V9.75m3 6.75V6.75a3 3 0 013-3h4.5a3 3 0 013 3V16.5h-.75m.75-6.75H17.25m0 0V7.5a3 3 0 00-3-3H9.75a3 3 0 00-3 3v2.25" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Bike Service</h3>
            <p className="text-center mb-6 text-gray-600">Professional bike maintenance and repairs with performance upgrades to keep your ride smooth.</p>
            <a href="#" className="block text-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Learn More</a>
          </div>

          {/* Car Service */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-red-500 to-red-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-red-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 14a2 2 0 01-1.414-.586l-1.12-1.121a2 2 0 010-2.828l1.12-1.12a2 2 0 011.414-.586h13.758a2 2 0 011.414.586l1.121 1.12a2 2 0 010 2.828l-1.121 1.12a2 2 0 01-1.414.586H5.121z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 15a3.5 3.5 0 01-7 0m7 0a3.5 3.5 0 01-7 0m7 0h1.5a2 2 0 002-2V10a2 2 0 00-2-2h-1.5m-7 7a3.5 3.5 0 01-7 0m7 0a3.5 3.5 0 01-7 0m7 0H5.5a2 2 0 01-2-2V10a2 2 0 012-2h1.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Car Service</h3>
            <p className="text-center mb-6 text-gray-600">Get comprehensive diagnostics, repairs, and custom modifications for your car.</p>
            <a href="#" className="block text-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">Learn More</a>
          </div>

          {/* Other Services */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-green-500 to-green-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7H9m12 10h1.5a2.5 2.5 0 00-2.5-2.5H9.5a2.5 2.5 0 00-2.5 2.5H4a2.5 2.5 0 00-2.5 2.5V21h21v-1.5a2.5 2.5 0 00-2.5-2.5zm0 0h-9m9 0H5.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Other Services</h3>
            <p className="text-center mb-6 text-gray-600">Explore a variety of customization options and accessories for your vehicle.</p>
            <a href="#" className="block text-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">Learn More</a>
          </div>

    {/* Bike Service */}
    <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 19.5h.75v-3m0 0H7.5a3 3 0 01-3-3V9.75m3 6.75V6.75a3 3 0 013-3h4.5a3 3 0 013 3V16.5h-.75m.75-6.75H17.25m0 0V7.5a3 3 0 00-3-3H9.75a3 3 0 00-3 3v2.25" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Bike Service</h3>
            <p className="text-center mb-6 text-gray-600">Professional bike maintenance and repairs with performance upgrades to keep your ride smooth.</p>
            <a href="#" className="block text-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Learn More</a>
          </div>

 {/* Car Service */}
 <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-red-500 to-red-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-red-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 14a2 2 0 01-1.414-.586l-1.12-1.121a2 2 0 010-2.828l1.12-1.12a2 2 0 011.414-.586h13.758a2 2 0 011.414.586l1.121 1.12a2 2 0 010 2.828l-1.121 1.12a2 2 0 01-1.414.586H5.121z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 15a3.5 3.5 0 01-7 0m7 0a3.5 3.5 0 01-7 0m7 0h1.5a2 2 0 002-2V10a2 2 0 00-2-2h-1.5m-7 7a3.5 3.5 0 01-7 0m7 0a3.5 3.5 0 01-7 0m7 0H5.5a2 2 0 01-2-2V10a2 2 0 012-2h1.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Car Service</h3>
            <p className="text-center mb-6 text-gray-600">Get comprehensive diagnostics, repairs, and custom modifications for your car.</p>
            <a href="#" className="block text-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">Learn More</a>
          </div>
          
          
          {/* Other Services */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-green-500 to-green-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7H9m12 10h1.5a2.5 2.5 0 00-2.5-2.5H9.5a2.5 2.5 0 00-2.5 2.5H4a2.5 2.5 0 00-2.5 2.5V21h21v-1.5a2.5 2.5 0 00-2.5-2.5zm0 0h-9m9 0H5.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Other Services</h3>
            <p className="text-center mb-6 text-gray-600">Explore a variety of customization options and accessories for your vehicle.</p>
            <a href="#" className="block text-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">Learn More</a>
          </div>

       {/* Bike Service */}
       <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 19.5h.75v-3m0 0H7.5a3 3 0 01-3-3V9.75m3 6.75V6.75a3 3 0 013-3h4.5a3 3 0 013 3V16.5h-.75m.75-6.75H17.25m0 0V7.5a3 3 0 00-3-3H9.75a3 3 0 00-3 3v2.25" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Bike Service</h3>
            <p className="text-center mb-6 text-gray-600">Professional bike maintenance and repairs with performance upgrades to keep your ride smooth.</p>
            <a href="#" className="block text-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Learn More</a>
          </div>

 {/* Car Service */}
 <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-red-500 to-red-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-red-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 14a2 2 0 01-1.414-.586l-1.12-1.121a2 2 0 010-2.828l1.12-1.12a2 2 0 011.414-.586h13.758a2 2 0 011.414.586l1.121 1.12a2 2 0 010 2.828l-1.121 1.12a2 2 0 01-1.414.586H5.121z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 15a3.5 3.5 0 01-7 0m7 0a3.5 3.5 0 01-7 0m7 0h1.5a2 2 0 002-2V10a2 2 0 00-2-2h-1.5m-7 7a3.5 3.5 0 01-7 0m7 0a3.5 3.5 0 01-7 0m7 0H5.5a2 2 0 01-2-2V10a2 2 0 012-2h1.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Car Service</h3>
            <p className="text-center mb-6 text-gray-600">Get comprehensive diagnostics, repairs, and custom modifications for your car.</p>
            <a href="#" className="block text-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">Learn More</a>
          </div>
          
          
          {/* Other Services */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-green-500 to-green-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7H9m12 10h1.5a2.5 2.5 0 00-2.5-2.5H9.5a2.5 2.5 0 00-2.5 2.5H4a2.5 2.5 0 00-2.5 2.5V21h21v-1.5a2.5 2.5 0 00-2.5-2.5zm0 0h-9m9 0H5.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Other Services</h3>
            <p className="text-center mb-6 text-gray-600">Explore a variety of customization options and accessories for your vehicle.</p>
            <a href="#" className="block text-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">Learn More</a>
          </div>

        </div>
      </div>
    </div>


    </>
  );
};

export default Servicepage;
