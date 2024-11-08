import React from 'react';
import TypingAnimation from "@/components/ui/typing-animation";
// import Image from 'next/image';

const Homepage = () => {
  return (
    <>
      <section className='bg-white py-8'>
        
        {/* Header Section with Images */}
        {/* <div className='text-center'>
          <Image src="/img/metal.jpg" alt="Metal" width={500} height={300} />
          <Image src="/img/logo.svg" alt="Logo" width={100} height={100} /> */}
        {/* </div> */}

        {/* Title & Description Section */}
        <div className="container mx-auto my-10 p-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-4 text-black font-serif">Technofast Equipments Pvt. Ltd.</h1>
            <p className="text-2xl text-blue-700 font-extrabold">
              Delivering a range of sturdy and functionally efficient Packaging Machines for the food & beverage industry...
            </p>
          </div>
          
          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-black mb-4">
                Packaging plays a vital role in almost every sector. As a leading manufacturer, we offer products like Pouch Packaging Machine, Tea Packing Machine, and more.
              </p>
            </div>
            <div className="flex justify-center">
              {/* <Image src="/img/m1.jpg" alt="Packaging Machine" width={500} height={400} className="object-cover shadow-lg rounded" /> */}
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 container mx-auto my-10 p-6">
          {["Our Vision", "Our Mission", "Our Value"].map((title, index) => (
            <div key={index} className="bg-lime-200 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
              <p className="text-gray-600 mb-4">Read more...</p>
              <a href="#more" className="text-indigo-600 font-semibold hover:underline">Learn More</a>
            </div>
          ))}
        </div>

        {/* Company Facts Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Why Choose Us</h2>
            <p className="text-orange-800 text-lg">We bring years of expertise and innovation in packaging machinery.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Years of Experience", value: "20+", text: "Serving the industry with top-notch packaging solutions." },
              { label: "Clients Worldwide", value: "500+", text: "Trusted by businesses across the globe." },
              { label: "Customer Satisfaction", value: "100%", text: "We prioritize customer needs with dedicated support." }
            ].map((fact, index) => (
              <div key={index} className="bg-slate-200 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-5xl font-extrabold text-blue-600">{fact.value}</span>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{fact.label}</h3>
                <p className="text-gray-500">{fact.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Machines Section */}
        <h2 className="text-3xl font-bold text-center text-pink-950 py-3 px-9 rounded-full shadow-md hover:shadow-lg transition duration-300 hover:text-white bg-blue-200">
          Our Most Popular Machines
        </h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-blue-200 container mx-auto p-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">
              {/* <Image src={`/img/m${item}.jpg`} alt="Machine" width={300} height={200} /> */}
              <p className="text-black">Choose from a variety of machine formats to fit your needs.</p>
            </div>
          ))}
        </div>

        {/* Let's Talk Business Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-950 hover:text-green-800 mb-4">Let's Talk Business</h2>
            <p className="text-lg text-green-800 mb-8">Whether you're looking for collaboration or want to learn more about our services, we're here to help!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
                <form action="#">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Your Name</label>
                    <input type="text" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Enter your name"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Email Address</label>
                    <input type="email" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="you@example.com"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Message</label>
                    <textarea className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Write your message..."></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Homepage;
