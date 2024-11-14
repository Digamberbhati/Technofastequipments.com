import React from 'react';
import TypingAnimation from "@/components/ui/typing-animation"; // Assuming TypingAnimation supports this
import styles from './Homepage.module.css'; // Import styles if using CSS module
import PulsatingButton from "@/components/ui/pulsating-button";
import { Section } from 'lucide-react';



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

            {/* <a href="#services" 
   className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:px-8 sm:py-4 md:px-10 md:py-5">
  Join us
</a> */}

            <PulsatingButton>Join Us</PulsatingButton>




          </div>
        </div>
      </div>


      <section className="bg-slate-400 py-20">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
          <h2 className="text-4xl text-slate-100 mb-4 py-3 font-extrabold rounded-md bg-slate-900">Company Profile</h2>
          <p className="text-lg text-slate-900 font-serif mb-6">
            We Have The Privilege Of Introducing Ourselves As The Leading Manufacturer & Exporter Of Metal Detectors And Product Inspection System For Various Applicants. Over Fifteen Years, TechnofastEquipments Have Manufactured & Successfully Installed Over 7500 Metal Detection Systems In The Country & Aboard. Undoubtedly, Today The Excellent Metal Detection Systems Are TechnofastEquipments Ensuring Easy Installation, Quick Modifications With Change In Existing Lines. Presently, We Have AHigh Quality In-house Designed Unit Equipped With Sophisticated And Modern Machinery And ATeam Of Experience Engineers, Dedicated R&d Team, Talented Designers And Other Motivated Work-force. We Design And Requirements. We Have Established And Successfully Maintained Business Alliances With Several Reputed Groups Due To The Strict Adherence Of Delivery Schedule. Al The Products That We Manufacture Are Coming After Stringent Quality Control And With That Factor Remaining Constant Quality; We Have Grown Systematically And Steadily. With The Best Quality Factor And Prompt After Sales Services, Our Clients Have Repeatedly Placed Their Faith In Us
          </p>

          <h2 className="font-extrabold text-white bg-slate-900 text-3xl rounded-md">OUR RANGE OF PRODUCTION FOR FOOD:</h2>
          <br />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 font-mono font-bold">
            <div className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">
              <p className="text-black">Tecnofast Equipment Micro Scan Metal Detection</p>
            </div>
            <div className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">
              <p className="text-black">Technofast Equipment Ferrous In Foil Metal Detection</p>
            </div>
            <div className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">
              <p className="text-black">Tecnofast Equipment Gravity Feed Metaldector</p>
            </div>
            <div className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">
              <p className="text-black">Technofast Equipment Pipe Line Metal</p>
            </div>
          </div>
        </div>




        {/* image section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="https://i.postimg.cc/rsZLRC73/Pipeline-metal-detector.png" alt="Blog Image 1" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">Pipeline Metal Detector</span>
            </div>
          </div>

          {/* <!-- 2nd img --> */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="https://i.postimg.cc/gcL9g8Fz/Conveyor-Metal-detector.png" alt="Blog Image 2" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">Conveyor Metal Detector</span>
            </div>
          </div>

          {/* <!-- 3rd img --> */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="" alt="Blog Image 3" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">Blog Title 3</span>
            </div>
          </div>

          {/* <!-- Repeat as needed for more blog items --> */}
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
        {/* our products */}
        <div className='bg-white'>
<h2 className="text-4xl text-slate-100 text-center py-3 px-3 mx-96 font-extrabold rounded-full bg-slate-900 hover:shadow-lg transition duration-300 hover:text-white">Our Most Popular Machines</h2><br></br>

        
{/* Popular Machines section */}

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    {/* Flex container to hold all three sections horizontally */}
    <div className="flex flex-wrap -m-4">
      
      {/* Machine 1 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="p-6">
            <div className="flex items-center mb-2">
              {/* Image before machine name */}
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.postimg.cc/G2mx2FRZ/Micro.png" alt="blog" />
            
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400"> MICROSCA METAL DETECTOR</h2>
            </div>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Microscan Metal Detector</h1>
            <p className="leading-relaxed mb-3 overflow-hidden line-clamp-3 hover:overflow-visible hover:line-clamp-none">
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
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.postimg.cc/G2mx2FRZ/Micro.png" alt="blog" />
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400">PIPELINE DETECTOR</h2>
            </div>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Pipeline Metal Detector</h1>
            <p className="leading-relaxed mb-3 overflow-hidden line-clamp-3 hover:overflow-visible hover:line-clamp-none">
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
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400">GRAVITY DETECTOR</h2>
            </div>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Gravity Feed Metal Detector</h1>
            <p className="leading-relaxed mb-3 overflow-hidden line-clamp-3 hover:overflow-visible hover:line-clamp-none">
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
