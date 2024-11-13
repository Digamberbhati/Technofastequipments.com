import React from 'react';
import TypingAnimation from "@/components/ui/typing-animation"; // Assuming TypingAnimation supports this
import styles from './Homepage.module.css'; // Import styles if using CSS module

const Homepage = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/img/background-image.jpg)' }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

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


            {/* <a href="#services" className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Join us
            </a> */}

<a href="#services" 
   className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:px-8 sm:py-4 md:px-10 md:py-5">
  Join us
</a>



          </div>
        </div>
      </div>
  

      <section className='bg-white'>
        
        {/* container section */}

        <div className="container mx-auto my-10 p-6 ">
          {/* <!-- Title Section --> */}
          <div className="text-center mb-6">
            {/* <h1 className="text-4xl font-bold mb-4 text-pink-400 font-serif ">Technofast Equipments PVT. LTD</h1> */}
            <p className="text-2xl text-blue-900 font-serif">
              Delivering a range of sturdy and functionally efficient Packaging Machines for the food & beverage industry... Our offering products are Food Packing Machine, Pouch Packaging Machine, Namkeen Packing Machine, Snacks Packing Machine, Liquid Packing Machine etc.
            </p>
          </div>

          {/* <!-- Content Section --> */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* <!-- Text Section --> */}
            <div>

              <p className="text-black mb-4">
                We Have The Privilege Of Introducing Ourselves As The Leading Manufacturer & Exporter Of Metal Detectors And Product Inspection System For Various Applicants. Over Fifteen Years,  TechnofastEquipments Have Manufactured & Successfully Installed Over 7500 Metal Detection Systems In The Country & Aboard. Undoubtedly, Today The Excellent Metal Detection Systems Are TechnofastEquipments Ensuring Easy Installation, Quick Modifications With Change In Existing Lines. Presently, We Have AHigh Quality In-house Designed Unit Equipped With Sophisticated And Modern Machinery And ATeam Of Experience Engineers, Dedicated R&d Team, Talented Designers And Other Motivated Work-force. We Design And Requirements. We Have Established And Successfully Maintained Business Alliances With Several Reputed Groups Due To The Strict Adherence Of Delivery Schedule. Al The Products That We Manufacture Are Coming After Stringent Quality Control And With That Factor Remaining Constant Quality; We Have Grown Systematically And Steadily. With The Best Quality Factor And Prompt After Sales Services, Our Clients Have Repeatedly Placed Their Faith In Us
              </p>
            </div>


            <div className="flex justify-center">
              <img src="data:image/jpeg;base64,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" alt="Packaging Machine" className="w-full h-auto object-cover shadow-lg rounded" />
            </div>
          </div>
        </div>
        {/* image section */}


        <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-1 flex-col">
                {/* <!-- img_01 -->  */}
                <img className="object-cover h-full" src="https://i.postimg.cc/2SThL25r/IMG-20241111-WA0003.jpg" />
              </div>
              <div className="hidden md:flex flex-1 flex-row gap-2">
                <div className="flex flex-1 flex-col">
                  {/* <!-- img_02 -->  */}
                  <img className="object-cover h-full" src="https://i.postimg.cc/tC6S1Tkn/IMG-20241111-WA0002.jpg" />
                </div>
                <div className="hidden md:flex flex-1 flex-col">
                  {/* <!-- img_03 -->  */}
                  <img className="object-cover h-full" src="https://i.postimg.cc/x12LC5wT/IMG-20241111-WA0004.jpg" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="hidden md:flex flex-1 flex-row gap-2">
                <div className="flex flex-1 flex-col">
                  {/* <!-- img_04 --> */}
                  <img className="object-cover h-full" src="https://i.postimg.cc/G3sC3xPf/IMG-20241111-WA0005.jpg" />
                </div>
                <div className="hidden md:flex flex-1 flex-col">
                  {/* <!-- img_05 --> */}
                  <img className="object-cover h-full" src="https://i.postimg.cc/brYVn8DL/IMG-20241111-WA0006.jpg" />
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                {/* <!-- img_06 --> */}
                <img className="object-cover h-full" src="https://i.postimg.cc/Dw3sp653/IMG-20241111-WA0007.jpg" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- section_2 -->  */}
        <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-white">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-1 flex-col">
              <div className="flex flex-1 flex-col">
                {/* <!-- img_01 -->  */}
                <img className="object-cover h-full" src='https://i.postimg.cc/qMVSQVfJ/IMG-20241111-WA0009.jpg' alt='' />
              </div>
            </div>
            <div className="flex flex-1">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  {/* <!-- img_02 --> */}
                  <img className="object-cover h-full" src='https://i.postimg.cc/mkbM2gzZ/IMG-20241111-WA0010.jpg' alt='' />
                </div>
                <div>
                  {/* <!-- img_03 --> */}
                  <img className="object-cover h-full" src='https://i.postimg.cc/fTWTzgCv/IMG-20241111-WA0012.jpg' alt='' />
                </div>
                <div>
                  {/* <!-- img_04 --> */}
                  <img className="object-cover h-full" src='https://i.postimg.cc/Njf3232d/IMG-20241111-WA0013.jpg' alt='' />
                </div>
                <div>
                  {/* <!-- img_05 --> */}
                  <img className="object-cover h-full" src='https://i.postimg.cc/bJzC4b03/IMG-20241111-WA0014.jpg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* container section */}


{/* 
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-lime-200 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our  Vision
            </h3>
            <p className="text-gray-600 mb-4">Read more..</p>
            <a href="graphic Designing.html" className="text-indigo-600 font-semibold hover:underline">Learn More</a>
          </div> */}


          {/* sec-2 */}
          {/* <div className="bg-lime-200 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mision
            </h3>
            <p className="text-gray-600 mb-4">Read more..</p>
            <a href="graphic Designing.html" className="text-indigo-600 font-semibold hover:underline">Learn More</a>
          </div> */}

          {/* sec-3 */}
          {/* <div className="bg-lime-200 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Value</h3>
            <p className="text-gray-600 mb-4">Read more...</p>
            <a href="graphic Designing.html" className="text-indigo-600 font-semibold hover:underline">Learn More</a>
          </div> */}


        {/* choise */}

        {/* <!-- Company Facts Section --> */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            {/* <!-- Title --> */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-black mb-4">Why Choose Us</h2>
              <p className="text-gray-500 text-lg">Experience unmatched precision and reliability with Technofast Equipments – your trusted partner in advanced Metal Detection Technology!</p>
            </div>

            {/* <!-- Facts Grid --> */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* <!-- Fact 1 --> */}
              <div className="bg-slate-200 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <span className="text-5xl font-extrabold text-blue-600">20+</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Years of Experience</h3>
                <p className="text-gray-500">With over 20 years of mastery, Technofast Equipments transforms innovation into excellence you can trust!.</p>
              </div>
              {/*  */}


              {/* <!-- Fact 2 --> */}
              <div className="bg-slate-200 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <span className="text-5xl font-extrabold text-blue-600">500+</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Clients Worldwide</h3>
                <p className="text-gray-500">With over 500 clients worldwide, Technofast Equipments is a global leader, delivering state-of-the-art metal detector solutions that ensure unmatched reliability and precision!"</p>
              </div>

              {/* <!-- Fact 3 --> */}
              <div className="bg-slate-200 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <span className="text-5xl font-extrabold text-blue-600">100%</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Customer Satisfaction</h3>
                <p className="text-gray-500">At Technofast Equipments, customer satisfaction is our global commitment. We deliver top-tier metal detection solutions that go beyond expectations, fostering trust and lasting partnerships across the world!</p>
              </div>
            </div>

            {/* <!-- Additional Facts --> */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {/* <!-- Fact 4 --> */}
              <div className="bg-slate-200 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <span className="text-5xl font-extrabold text-blue-600">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Support Availability</h3>
                <p className="text-gray-500">Stay powered 24/7 with Technofast Equipments – our expert support is always just a call or message away, providing fast and reliable solutions anytime, anywhere!</p>
              </div>

              {/* <!-- Fact 5 --> */}
              <div className="bg-slate-200 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <span className="text-5xl font-extrabold text-blue-600">10+</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Innovative Machines</h3>
                <p className="text-gray-500">Gravity Feed Metal Detector,Micro Scan Metal Detector, Dry Fruits Metal Detector, Needle Metal Detector,Liquid Metal Detector,Pipeline Metal Detector, Conveyor Metal Detector, Pharmaceutical Tablet Metal Detector, Degree Metal Detector, Candy Conveyor Metal Detector.</p>
              </div>
            </div>
          </div>
        </section>



        {/* our products */}


        <h2
          className="text-3xl font-bold text-center text-pink-950  py-3 px-9 rounded-full shadow-md hover:shadow-lg transition duration-300 hover:text-white bg-blue-200">
          Our Most Popular Machines</h2><br></br>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-blue-200">
          <div
            className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">
<h2 className="text-black font-bold">Microscan Metal Detector</h2>
            <p className="text-black">Choose from a variety of learning formats, including in-person and online courses,
              to
              fit your schedule.</p>
          </div>


          {/* sect-2 */}
          <div
            className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">
<h2 className="text-black font-bold">Pipeline Metal Detector</h2>

            <p className="text-black">Choose from a variety of learning formats, including in-person and online courses,
              to
              fit your schedule.</p>
          </div>

        
          {/* sec-6 */}
          <div
            className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">
<h2 className="text-black font-bold">Gravity Feed Metal Detector</h2>

            <p className="text-white">Choose from a variety of learning formats, including in-person and online courses,
              to
              fit your schedule.</p>
          </div>

        </div>

        {/* talk section */}

        <section className="bg-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-950 hover:text-green-800 mb-4">Let's Talk Business</h2>
            <p className="text-lg text-green-800 mb-8">
              Whether you're looking for collaboration or want to learn more about our services, we're here to help. Let's discuss how we can work together!
            </p>

            {/* <section className="bg-white py-16"> */}


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <!-- Contact Form --> */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
                <form action="#">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Your Name</label>
                    <input type="text" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="enter your name" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Email Address</label>
                    <input type="email" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500  text-black" placeholder="you@example.com" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Message</label>
                    <textarea rows="4" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Type your message here..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-3 rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300">Send Message</button>
                </form>
              </div>

              {/* <!-- Contact Information --> */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                <ul>
                  <li className="mb-4">
                    <span className="block text-sm font-medium text-gray-600">Address</span>
                    <p className="text-lg text-gray-800">Gali No.1 Near Beri Ka Bagh Malerna Road, Adarsh Nagar,<br />Sector-63 Ballabgarh, Faridabad, Haryana – 121004</p>
                  </li>
                  <li className="mb-4">
                    <span className="block text-sm font-medium text-gray-600">Email</span>
                    <p className="text-lg text-gray-800">technofastequipments@gmail.com</p>
                  </li>
                  <li className="mb-4">
                    <span className="block text-sm font-medium text-gray-600">Phone</span>
                    <p className="text-lg text-gray-800"></p>
                  </li>
                  <li className="mb-4">
                    <span className="block text-sm font-medium text-gray-600">Working Hours</span>
                    <p className="text-lg text-gray-800">Mon - Fri: 9:00 AM - 6:00 PM</p>
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
