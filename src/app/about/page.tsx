import React from 'react'

const Aboutpage = () => {
  return (
    <>


      <section className="bg-gray-800 py-20">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
          <h1 className="text-5xl font-bold text-stone-400 mb-4">About Us</h1>
          <p className="text-lg text-gray-300 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas quod consectetur ab harum perspiciatis exercitationem obcaecati repellat illum accusantium, quos magnam nesciunt eligendi beatae ipsa debitis suscipit. Vitae, aliquam.</p>
        </div>
      </section>

      <div className="bg-gray-900 text-gray-300 py-16">
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
            <h3 className="mt-4 text-xl font-semibold text-white">Phoebe Caulfield</h3>
            <div className="mt-2 h-0.5 bg-blue-500 w-16"></div>
            <p className="mt-4 text-sm leading-relaxed">
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
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
          <h2 className="text-4xl font-bold text-stone-300 mb-4">Our Story</h2>
          <p className="text-lg text-slate-200 mb-6">We're passionate about delivering innovative solutions.</p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
            {/* img */}
              <img src="" alt="Image 1" className="rounded shadow-md" />
            </div>
            <div className="w-full md:w-1/2 xl:w-2/3 px-4 mb-4">
              <p className="text-lg text-green-50 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-800 py-20">
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
        </div>
     
      {/* Contact Section */}

      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12" />
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
      <p className="text-3xl text-blue-800  mb-6">Contact us for more information.</p>


      <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-4 ">
        <input type="text" placeholder="Name" className="w-full p-2 rounded" />
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-4">
        <input type="email" placeholder="Email" className="w-full p-2 rounded" />
      </div>
    


</section>

    </>

  )
}

export default Aboutpage
