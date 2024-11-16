import React from 'react';

const CompanyProfile = () => {
  return (
    <>
    <br/>
    <br/>
      <div className="bg-slate-200 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Image or Icon and Text */}
          <div className="flex flex-col items-center text-center md:text-left">
           <img src="https://i.postimg.cc/2yB5m7RC/logo.png" alt="logo" />
            <h3 className="mt-4 text-xl font-semibold text-black">Phoebe Caulfield</h3>
            <div className="mt-2 h-0.5 bg-blue-500 w-16"></div>
            <p className="mt-4 text-sm leading-relaxed text-slate-800">
              Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.
            </p>
          </div>

          {/* Right Section: Text Content */}
          <div>
            <p className="leading-relaxed text-black">
              Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party.
            </p>
            <a href="#" className="inline-block mt-4 text-blue-500 hover:text-blue-300 transition duration-300">
              Learn More →
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}

      {/* Our Story Section */}
      <section className="bg-slate-400 py-20">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
          <h2 className="text-4xl text-slate-100 mb-4 py-3 font-extrabold rounded-md bg-slate-900">Company Profile</h2>
          <p className="text-lg text-slate-900 font-serif mb-6">
            We have the privilege of introducing ourselves as the leading manufacturer & exporter of metal detectors...
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
      </section>

      {/* Right Section: FAQ */}
      <section className="bg-gray-100 py-12 w-full">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>

          {/* FAQ 1 */}
          <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
            <input type="checkbox" id="faq1" className="hidden peer" />
            <label
              htmlFor="faq1"
              className="flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer text-gray-800 hover:bg-gray-50"
            >
              <span className="text-lg font-serif">WHY USE METAL DETECTION: -</span>
              <svg
                className="w-5 h-5 text-gray-500 transition-transform transform peer-checked:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </label>
            <div className="px-6 pb-4 hidden peer-checked:block">
              <p className="text-gray-600 font-semibold">
                Metal Detectors Are Important Cornerstone In The Quality Management System In Food Processing Industry. They Protect And Safeguard Processing Equipment, Products People Consume, Companies Brand Image, And Limit Their Liability Due To Contaminated Product. Metal Detectors Are Both Effective And Inexpensive. Processing And Packaging Equipment Is Often Expensive And Susceptible To Damage From Other Equipment Such As Crushers, Extruders, Shredders, Cutters, Grinders, Choppers, Mixers, Etc., Can Be Costly To Repair Not To Mention The Down Time. Metal Detectors Are Used In Food Related Industries, Many Nonfood Industries (rubber, Plastic, Aggregate, Mining, Wood,textile, Glass, Product And Environmental Security) Use Them As Well.

              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
            <input type="checkbox" id="faq2" className="hidden peer" />
            <label
              htmlFor="faq2"
              className="flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer text-gray-800 hover:bg-gray-50"
            >
              <span className="text-lg font-serif">HOW DOES METAL GET INTOA FOOD: -
              </span>
              <svg
                className="w-5 h-5 text-gray-500 transition-transform transform peer-checked:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </label>
            <div className="px-6 pb-4 hidden peer-checked:block">
              <p className="text-gray-600 font-semibold">
                As Production Equipments Continuously Operate, There Are Possibilities Of Ware And
                Tare Of Equipments And Opportunities For Metallic Objects And Even Metal Filings
                Caused By Line Repairs, To Accidentally Get Into Food. In Coming Raw Materials While Blending, Kneading, Processing Through Different Stage, Any Metal Contamination Can
                Enter Into The Process. The Need Is There To Solve The Problem In A Very Cost Effective
                Way, Ensure Quality And Be Operator Friendly At High Production Rate.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
            <input type="checkbox" id="faq3" className="hidden peer" />
            <label
              htmlFor="faq3"
              className="flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer text-gray-800 hover:bg-gray-50"
            >
              <span className="text-lg font-serif">Do you offer emergency repair services?</span>
              <svg
                className="w-5 h-5 text-gray-500 transition-transform transform peer-checked:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </label>
            <div className="px-6 pb-4 hidden peer-checked:block">
              <p className="text-gray-600 font-semibold">
                Yes, we do provide emergency repair services. Please contact us directly for urgent assistance.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
            <input type="checkbox" id="faq4" className="hidden peer" />
            <label
              htmlFor="faq4"
              className="flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer text-gray-800 hover:bg-gray-50"
            >
              <span className="text-lg font-serif">What is your warranty policy?</span>
              <svg
                className="w-5 h-5 text-gray-500 transition-transform transform peer-checked:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </label>
            <div className="px-6 pb-4 hidden peer-checked:block">
              <p className="text-gray-600 font-semibold">
                We offer a 1-year warranty on all our services and products. Please refer to our warranty policy for full details.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden">
            <input type="checkbox" id="faq5" className="hidden peer" />
            <label
              htmlFor="faq5"
              className="flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer text-gray-800 hover:bg-gray-50"
            >
              <span className="text-lg font-serif">Can I schedule a service appointment online?</span>
              <svg
                className="w-5 h-5 text-gray-500 transition-transform transform peer-checked:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </label>
            <div className="px-6 pb-4 hidden peer-checked:block">
              <p className="text-gray-600 font-semibold bg-black">
                Yes, you can schedule an appointment on our website. Visit our booking page to select a date and time that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default CompanyProfile;
