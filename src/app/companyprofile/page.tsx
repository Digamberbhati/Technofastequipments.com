import React from 'react'


// const faqData =[
//   { question: "What services do you offer?", answer: "We offer a variety of metal detection systems and inspection services." },
//   { question: "How can I contact customer support?", answer: "You can contact us via email or through the contact form on our website." },
//   { question: "What industries do you serve?", answer: "We serve food, pharmaceuticals, and other manufacturing industries." },
// ];




const companyprofile = () => {
  return (
    <>



      <div className="bg-slate-200 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* <!-- Left Section: Image or Icon and Text --> */}
          <div className="flex flex-col items-center text-center md:text-left">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
              {/* <!-- Placeholder for an icon --> */}
              <svg className="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A5.987 5.987 0 0112 16c1.657 0 3.156.672 4.121 1.804M9 10a4 4 0 118 0 4 4 0 01-8 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v4m-2-4a2 2 0 114 0m-6 0a6 6 0 1112 0" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-black">Phoebe Caulfield</h3>
            <div className="mt-2 h-0.5 bg-blue-500 w-16"></div>
            <p className="mt-4 text-sm leading-relaxed text-slate-800">
              Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.
            </p>
          </div>

          {/* <!-- Right Section: Text Content --> */}
          <div>
            <p className="leading-relaxed text-green-50">
              Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical.
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
          <h2 className="text-4xl  text-slate-100 mb-4 font-extrabold rounded-md bg-slate-900">Company Profile</h2>
          <p className="text-lg text-slate-900 font-serif mb-6">We Have The Privilege Of Introducing Ourselves As The Leading Manufacturer & Exporter Of Metal Detectors And Product Inspection System For Various Applicants. Over Fifteen Years, TechnofastEquipments Have Manufactured & Successfully Installed Over 7500 Metal Detection Systems In The Country & Aboard. Undoubtedly, Today The Excellent Metal Detection Systems Are TechnofastEquipments Ensuring Easy Installation, Quick Modifications With Change In Existing Lines. Presently, We Have AHigh Quality In-house Designed Unit Equipped With Sophisticated And Modern Machinery And ATeam Of Experience Engineers, Dedicated R&d Team, Talented Designers And Other Motivated Work-force. We Design And Requirements. We Have Established And Successfully Maintained Business Alliances With Several Reputed Groups Due To The Strict Adherence Of Delivery Schedule. Al The Products That We Manufacture Are Coming After Stringent Quality Control And With That Factor Remaining Constant Quality; We Have Grown Systematically And Steadily. With The Best Quality Factor And Prompt After Sales Services, Our Clients Have Repeatedly Placed Their Faith In Us</p>

          <h2 className="font-extrabold text-white bg-slate-900 text-3xl rounded-md">OUR RANGE OF PRODUCTION FOR FOOD:-</h2>
          <br />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 font-mono font-bold">
            <div
              className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">

              <p className="text-black">Tecnofast Equipment Micro Scan Metal Detection
                .</p>
              {/* <p className="">Technofast Equipment Ferrous In Foil</p> */}
            </div>
            <div
              className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">

              <p className="text-black">Technofast Equipment Ferrous In Foil Metal Detection
                .</p>
            </div>
            <div
              className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">

              <p className="text-black">Tecnofast Equipment Gravity Feed Metaldector
                .</p>
              {/* <p className="">Technofast Equipment Ferrous In Foil</p> */}
            </div>
            <div
              className="text-center p-6 border rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100">

              <p className="text-black">Technofast Equipment Pipe Line Metal
                .</p>
            </div>
          </div>
        </div>



      </section>

      {/* Team Section */}
      {/* <section className="bg-gray-500 py-20">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
              <div className="bg-white rounded shadow-md p-4">
                <img src="team1.jpg" alt="Team 1" className="rounded-full" />
                <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
                <p className="text-lg text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
              <div className="bg-white rounded shadow-md p-4">
                <img src="team2.jpg" alt="Team 2" className="rounded-full" />
                <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
                <p className="text-lg text-gray-600">CTO</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
              <div className="bg-white rounded shadow-md p-4">
                <img src="team3.jpg" alt="Team 3" className="rounded-full" />
                <h3 className="text-xl font-bold text-gray-800">Bob Smith</h3>
                <p className="text-lg text-gray-600">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div> */}

      {/* Contact Section */}

      {/* <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12" />
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-3xl text-blue-800  mb-6">Contact us for more information.</p>


        <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-4 ">
          <input type="text" placeholder="Name" className="w-full p-2 rounded" />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-4">
          <input type="email" placeholder="Email" className="w-full p-2 rounded" />
        </div>



      </section> */}
      {/* <section className="bg-blue-600 h-screen grid place-items-center">
        <div className="px-[40px] max-w-[800px]">

          {faqData.map((data,index) => {
            return <s/>;
          })} 


        </div>
      </section> */}
<div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
{/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
            <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Frequently Asked Questions</h2>
            <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                <div className="">
                    <p className="font-normal dark:text-gray-400 text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12">Here are few of the most frequently asked questions by our valueable customers</p>
                </div>
    
                <div className="border-b-2 border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full">
                    <input placeholder="Search" type="text" aria-label="Search" className="dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 lg:w-96 md:w-72 w-full focus:outline-none placeholder-gray-600 text-base font-normal text-gray-600 leading-4" />
                    <svg className="cursor-pointer text-gray-600 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14 14L10 10" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
                <div className="md:w-5/12 lg:w-4/12 w-full">
                    <img src="https://i.ibb.co/8bCs73h/pexels-ron-lach-8128069-1.png" alt="Image of Glass bottle" className="w-full md:block hidden" />
                    <img src="https://i.ibb.co/gZMfQJq/pexels-ron-lach-8128069-1-1.png" alt="Image of Glass bottle" className="w-full md:hidden block" />
                </div>
                <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    {/* <!-- Shipping Section --> */}
                    <div>
                        <div className="flex justify-between items-center cursor-pointer">
                            <h3 className="font-semibold text-xl  dark:text-white leading-5 text-gray-800">Shipping</h3>
                            <button aria-label="too" className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onclick="openAnsSection(1)">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="path1" className="" d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p id="para1" className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12">We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.</p>
                    </div>
    
                    <hr className="my-7 bg-gray-200" />
    
                    {/* <!-- Returns Section --> */}
    
                    <div>
                        <div className="flex justify-between items-center cursor-pointer">
                            <h3 className="font-semibold text-xl dark:text-white  leading-5 text-gray-800">Returns</h3>
                            <button aria-label="too" className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onclick="openAnsSection(2)">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="path2" className="" d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p id="para2" className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12">We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.</p>
                    </div>
    
                    <hr className="my-7 bg-gray-200" />
    
                    {/* <!-- Exchange Section --> */}
    
                    <div>
                    <div className="flex justify-between items-center cursor-pointer">
    <h3 className="font-semibold text-xl dark:text-white leading-5 text-gray-800">Exchange</h3>
    <button 
        aria-label="toggle" 
        className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" 
        onClick={() => openAnsSection(3)} // Updated to onClick and using an arrow function
    >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="path3" d="M10 4.1665V15.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
</div>

                        </div>
                        <p id="para3" className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12">We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.</p>
                    </div>
    
                    <hr className="my-7 bg-gray-200" />
    
                    {/* <!-- Tracking Section --> */}
    
                    <div>
                        <div className="flex justify-between items-center cursor-pointer">
                            <h3 className="font-semibold text-xl dark:text-white  leading-5 text-gray-800">Tracking</h3>
                            <button aria-label="too" className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onclick="openAnsSection(4)">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="path4" d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p id="para4" className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12">We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.</p>
                    </div>
    
                    <hr className="my-7 bg-gray-200" />
                </div>
            </div>
        </div>

    </>

  )
}

export default companyprofile
