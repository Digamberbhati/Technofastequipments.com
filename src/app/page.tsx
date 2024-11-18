import React from 'react';
import TypingAnimation from "@/components/ui/typing-animation"; // Assuming TypingAnimation supports this
import styles from './Homepage.module.css'; // Import styles if using CSS module
import PulsatingButton from "@/components/ui/pulsating-button";
import { Section } from 'lucide-react';
import Link from "next/link";
import Image from "next/image"

const Homepage = () => {
  return (
    <>

      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/background-image.jpg')", // Replace with your actual background image path
        }}
      >
        {/* Logo Section */}
        <div className="text-2xl font-bold absolute top-4 left-4">
          <Link href="/">
            <Image
              src="/background image.jpg" // Replace with the actual path to your logo
              alt="Logo"
              width={100}
              height={50} // Adjust height/width as needed
            />
          </Link>
        </div>
        {/* Overlay */}

        <div className="absolute inset-0 opacity-1"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          {/* Typing animation for first line */}
          <TypingAnimation
            className="text-6xl font-bold text-white dark:text-white"
            text="Welcome to"
          />
          <br />
          {/* Typing animation for second line */}
          <TypingAnimation
            className="text-6xl font-bold text-blue-500 dark:text-blue-500"
            text="Technofast Equipments"
          />
          <br />
          <p className="text-lg mb-6">Discover our amazing services and products tailored just for you.</p>


          <PulsatingButton>
            <Link href="/contact">Join Us</Link>
          </PulsatingButton>

        </div>
      </div>

      <section className="bg-white py-20">
        <div className="text-center">
          <h1 className="text-black text-4xl ">About Section</h1>
        </div>
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
          <h2 className="text-4xl text-slate-100 mb-4 py-3 font-extrabold rounded-md bg-slate-900">Company Profile</h2>
          <p className="text-lg text-slate-900 font-serif mb-6">
            We Have The Privilege Of Introducing Ourselves As The Leading Manufacturer & Exporter Of Metal Detectors And Product Inspection System For Various Applicants. Over Fifteen Years, TechnofastEquipments Have Manufactured & Successfully Installed Over 7500 Metal Detection Systems In The Country & Aboard. Undoubtedly, Today The Excellent Metal Detection Systems Are TechnofastEquipments Ensuring Easy Installation, Quick Modifications With Change In Existing Lines. Presently, We Have AHigh Quality In-house Designed Unit Equipped With Sophisticated And Modern Machinery And ATeam Of Experience Engineers, Dedicated R&d Team, Talented Designers And Other Motivated Work-force. We Design And Requirements. We Have Established And Successfully Maintained Business Alliances With Several Reputed Groups Due To The Strict Adherence Of Delivery Schedule. Al The Products That We Manufacture Are Coming After Stringent Quality Control And With That Factor Remaining Constant Quality; We Have Grown Systematically And Steadily. With The Best Quality Factor And Prompt After Sales Services, Our Clients Have Repeatedly Placed Their Faith In Us
          </p>

          <h2 className="font-extrabold text-white bg-slate-900 text-3xl rounded-md">OUR RANGE OF PRODUCTION FOR FOOD:</h2>
          <br />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 font-mono font-bold">
            <div className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-slate-700">
              <p className="text-white">Tecnofast Equipment Micro Scan Metal Detection</p>
            </div>
            <div className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-slate-700">
              <p className="text-white">Technofast Equipment Ferrous In Foil Metal Detection</p>
            </div>
            <div className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-slate-700">
              <p className="text-white">Tecnofast Equipment Gravity Feed Metaldector</p>
            </div>
            <div className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-slate-700">
              <p className="text-white">Technofast Equipment Pipe Line Metal</p>
            </div>
          </div>
        </div>






        {/* image section */}
        <div className="text-center mx-44 py-6" >
          <h1 className="font-serif text-4xl text-black ">
            Our Machines
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-slate-500">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src=" https://i.postimg.cc/qRbMVZNt/Liquid-Metal-Detector.png" alt="Pipeline Metal Detector" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">Liquid Metal Detector</span>
            </div>
          </div>

          {/* <!-- 2nd img --> */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg ">
            <img src="https://i.postimg.cc/gcL9g8Fz/Conveyor-Metal-detector.png" alt="Conveyor Metal Detector" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">Conveyor Metal Detector</span>
            </div>
          </div>

          {/* <!-- 3rd img --> */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="https://i.postimg.cc/qqwZNJ67/Whats-App-Image-2024-11-13-at-11-43-40-8e5e12a6.jpg" alt="Manufacturer of Metal Detection" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">Manufacturer of Metal Detection</span>
            </div>
          </div>

          {/* <!-- 4nd img --> */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="https://i.postimg.cc/rwPLwJ5r/Tablet-Metal-Detector.png" alt="Table Metal Detector" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">Table Metal Detector</span>
            </div>
          </div>
          {/* <!-- 5nd img --> */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="https://i.postimg.cc/zBLvfvLJ/Greavity-Feed-Metal-Detector.png" alt="Blog Image 2" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">Greavity Feed Metal Detector</span>
            </div>
          </div>
          {/* <!-- 6nd img --> */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="https://i.postimg.cc/BZKt989p/Industrial-Metal-Detector.png" alt="Industrial Metal Detector" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">Industrial Metal Detector</span>
            </div>
          </div>

          {/* <!-- Repeat as needed for more blog items --> */}
        </div>

        {/* service section */}

        <section className="bg-gray-50 py-16 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
            <p className="text-gray-600 text-lg mb-10">
              Unlock the full potential of your business with our tailored services—delivering excellence, precision, and peace of mind with every product, installation, and support we provide.
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Service Card --> */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v4H3a2 2 0 000 4h14a2 2 0 000-4h-1V8a6 6 0 00-6-6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">On-Time Free Delivery</h3>
              <p className="text-gray-600">
                At Technofast Equipments, we understand that timing is everything. That’s why we offer on-time free delivery for all our products, ensuring that your equipment reaches you promptly and securely—whether you're in India or anywhere in the world. With real-time tracking, you can stay updated and confident that your order is in safe hands. Enjoy peace of mind with our reliable and hassle-free delivery service, without any hidden costs or delays.
              </p>
            </div>

            {/* <!-- Service Card --> */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 bg-green-100 text-green-600 rounded-full mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z"></path>
                  <path fill-rule="evenodd" d="M5 2a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H5zm9 14H6V4h8v12z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Installation Services</h3>
              <p className="text-gray-600">
                Let us make your experience even easier with our free installation services. Our expert technicians will handle every detail—from setup to calibration—ensuring your equipment is perfectly configured and ready to use. Whether you're in India or overseas, we bring professional service directly to you, so you can start using your equipment right away. With no extra charge for installation, we make sure you get the best value without any hassle.
              </p>
            </div>

            {/* <!-- Service Card --> */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 10a5 5 0 1110 0 5 5 0 01-10 0zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">One-Year Warranty</h3>
              <p className="text-gray-600">
                With Technofast Equipments, your investment is fully protected. Our one-year warranty covers any manufacturing defects, giving you the confidence that your equipment is built to last. Whether you’re in India or across the globe, our dedicated customer support team is always available to assist, ensuring your equipment stays in perfect working order. Enjoy long-term reliability, backed by our commitment to excellence.
              </p>
            </div>
          </div>




          <div className="mt-12 text-center">
            <a href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
              Read More About Our Services
            </a>
          </div>
        </section>



        {/* container section */}

        {/* why choose us */}
        <div className=" bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Why Choose Us?</h2>
              <p className="mt-4 text-lg text-gray-600">
                A seamless blend of expertise, quality, and trust. Here's what sets us apart.
              </p>
            </div>
            <div className="mt-12 relative flex justify-center">
              {/* <!-- Timeline --> */}
              <div className="absolute w-full h-1 bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                {/* <!-- Step 1 --> */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-20 h-20 ">
                    <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10c0 7.18 5.82 13 13 13 1.38 0 2.74-.18 4-.52a2 2 0 001.44-1.95v-2a2 2 0 00-2-2h-2.28a2 2 0 00-1.79 1.11l-.44.89a2 2 0 01-2.52.94A11.96 11.96 0 015.96 9.4a2 2 0 01.94-2.52l.89-.44A2 2 0 009 4.65V2.38a2 2 0 00-2-2H5.38a2 2 0 00-1.95 1.44A17.08 17.08 0 003 10z" />
                    </svg>


                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">Support Availability</h3>
                  <p className="mt-2 text-gray-600">
                    Support Availability
                    Stay powered 24/7 with Technofast Equipments – our expert support is always just a call or message away, providing fast and reliable solutions anytime, anywhere!
                  </p>
                </div>

                {/* <!-- Step 2 --> */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-20 h-20 ">
                    <svg className="w-10 h-10 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>

                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">Customer Satisfaction</h3>
                  <p className="mt-2 text-gray-600">
                    At Technofast Equipments, customer satisfaction is our global commitment. We deliver top-tier metal detection solutions that go beyond expectations, fostering trust and lasting partnerships across the world!
                  </p>
                </div>

                {/* <!-- Step 3 --> */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-20 h-20 bg-white-500 rounded-full">
                    <svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM12 2a10 10 0 0110 10M12 2a10 10 0 00-10 10m15-5a5 5 0 11-5-5m-3 7v3m0 4h.01M7 15a3 3 0 110-6m10 3a3 3 0 110 6" />
                    </svg>


                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">Clients Worldwide</h3>
                  <p className="mt-2 text-gray-600">
                    With over 500 clients worldwide, Technofast Equipments is a global leader, delivering state-of-the-art metal detector solutions that ensure unmatched reliability and precision!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our products */}
        <div className='bg-white'>
          {/* <h2 className="text-4xl text-slate-100 text-center py-3 px-3 mx-96 font-extrabold rounded-full bg-slate-900 hover:shadow-lg transition duration-300 hover:text-white">Our Most Popular Machines</h2><br></br> */}


          {/* Popular Machines section */}

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif text-black mb-4">Our Most Popular Machines</h2>
              </div>
              {/* Flex container to hold all three sections horizontally */}
              <div className="flex flex-wrap -m-4">

                {/* Machine 1 */}
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        {/* Image before machine name */}
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.postimg.cc/G2mx2FRZ/Micro.png" alt="blog" />

                        {/* <h2 className="tracking-widest text-xs title-font font-semibold text-black  "> MICROSCA METAL DETECTOR</h2> */}
                      </div>
                      <h1 className="title-font text-lg font-extrabold text-gray-900 mb-3">Microscan Metal Detector</h1>
                      <p className="leading-relaxed mb-3 overflow-hidden line-clamp-3 hover:overflow-visible hover:line-clamp-none font-thin hover:font-serif">
                        A compact and precise metal detection system designed for high sensitivity in identifying small metal contaminants in food, pharmaceuticals, and packaging industries. This advanced solution ensures compliance with industry standards while maintaining product quality and safety.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Machine 2 */}
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        {/* Image before machine name */}
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.postimg.cc/rsZLRC73/Pipeline-metal-detector.png" alt="blog" />
                        {/* <h2 className="tracking-widest text-xs title-font font-semibold text-black ">PIPELINE DETECTOR</h2> */}
                      </div>
                      <h1 className="title-font text-lg font-extrabold text-gray-900 mb-3">Pipeline Metal Detector</h1>
                      <p className="leading-relaxed mb-3 overflow-hidden line-clamp-3 hover:overflow-visible hover:line-clamp-none font-thin hover:font-serif">
                        Specially designed for inspecting liquid and paste products in pipelines, ensuring the detection and removal of metal particles before further processing. The Pipeline Metal Detector is ideal for dairy, sauces, and beverage industries.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Machine 3 */}
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        {/* Image before machine name */}
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.postimg.cc/G2mx2FRZ/Micro.png" alt="blog" />
                        {/* <h2 className="tracking-widest text-xs title-font font-semibold text-black ">GRAVITY DETECTOR</h2> */}
                      </div>
                      <h1 className="title-font text-lg font-extrabold text-gray-900 mb-3">Gravity Feed Metal Detector</h1>
                      <p className="leading-relaxed mb-3 overflow-hidden line-clamp-3 hover:overflow-visible hover:line-clamp-none font-thin hover:font-serif">
                        Ideal for inspecting bulk materials such as grains, powders, and dry products during free-fall operations, ensuring safety and quality. The system is easy to integrate and offers exceptional accuracy for high-speed processing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* talk section */}

        <section className="bg-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-950  mb-4 font-serif">Let's Talk Business</h2>
            <p className="text-lg text-slate-700 font-thin mb-8">
              Whether you're looking for collaboration or want to learn more about our services, we're here to help. Let's discuss how we can work together!
            </p>

            {/* <section className="bg-white py-16"> */}


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <!-- Contact Form --> */}
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif text-white mb-6">Send Us a Message</h3>
                <form action="#">
                  <div className="mb-4">
                    <label className="block text-sm font-serif text-white">Your Name</label>
                    <input type="text" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="enter your name" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-serif text-white">Email Address</label>
                    <input type="email" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500  text-black" placeholder="you@example.com" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-serif text-white">Message</label>
                    <textarea rows="4" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Type your message here..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white text-black py-3 rounded-lg shadow-lg  hover:bg-blue-400 transition duration-300 font-bold">Send Message</button>
                </form>
              </div>

              {/* <!-- Contact Information --> */}
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif text-gray-800 mb-6"><b>Contact Information</b></h3>
                <ul>
                  <li className="mb-4">
                    <span className="block text-sm font-serif text-black">Address</span>
                    <p className="text-lg text-white font-semibold">Gali No.1 Near Beri Ka Bagh Malerna Road, Adarsh Nagar,<br />Sector-63 Ballabgarh, Faridabad, Haryana – 121004</p>
                  </li>
                  <li className="mb-4">
                    <span className="block text-sm font-serif text-black">Email</span>
                    <p className="text-lg text-white">www.technofastequipments@gmail.com</p>
                  </li>
                  <li className="mb-4">
                    <span className="block text-sm font-serif text-black">Phone</span>
                    <p className="text-lg text-white">+918930109050, +919467751411, +917988309282</p>
                  </li>
                  <li className="mb-4">
                    <span className="block text-sm font-serif text-black">Working Hours</span>
                    <p className="text-lg text-white">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>



        </section>


      </section>


    </>
  );
};

export default Homepage;
