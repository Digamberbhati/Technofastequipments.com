import React from 'react';

const Contactpage = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        {/* <h1 className='text-4xl font-bold'>Contact</h1> */}
    
      
      {/* Contact Section */}
      <section id="contact" className="bg-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Contact Us</h2>
            <p className="text-lg text-white">We'd love to hear from you! Feel free to get in touch using the form below.</p>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
            {/* Contact Info */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-4">Our Contact Information</h3>
              <p className="text-white mb-4">Feel free to reach us at any time. Our team will respond to you as soon as possible.</p>
              <ul>
                <li className="flex items-center text-white mb-4">
                  <svg className="h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm10 5a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                  </svg>
                  Email: contact@company.com
                </li>
                <li className="flex items-center text-white mb-4">
                  <svg className="h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.049 2.927C9.342 2.327 9.97 2 10.707 2h2.586c.737 0 1.365.327 1.658.927l.78 1.56a1 1 0 00.9.513h1.537a1 1 0 01.998 1.134l-.25 2.513a1 1 0 00.293.826l1.639 1.64a1 1 0 01-.002 1.414l-2.828 2.83a1 1 0 01-.707.293H9.293a1 1 0 01-.707-.293L4.757 12.97a1 1 0 010-1.414l1.639-1.64a1 1 0 00.293-.826l-.25-2.513A1 1 0 017.414 4h1.536a1 1 0 00.9-.513l.78-1.56A1 1 0 0111.293 2h2.586a1 1 0 01.9 1.56L9.049 2.927z" clipRule="evenodd" />
                  </svg>
                  Phone: +1 234 567 890
                </li>
                <li className="flex items-center text-white">
                  <svg className="h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3.175L17.033 6v4c0 4.418-2.833 8-7 8s-7-3.582-7-8V6L10 3.175zM5.8 9h8.4v2.293l-.8-.8a.5.5 0 00-.707.707l1.5 1.5a.5.5 0 00.707 0l1.5-1.5a.5.5 0 00-.707-.707l-.8.8V9H5.8z" clipRule="evenodd" />
                  </svg>
                  Address: 1234 Main St, City, State, 12345
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white">Your Name</label>
                  <div className="mt-1">
                    <input type="text" name="name" id="name" className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your name" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
                  <div className="mt-1">
                    <input type="email" name="email" id="email" className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                  <div className="mt-1">
                    {/* <textarea id="message" name="message" rows="4" className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Write your message here" required></textarea> */}
                  </div>
                </div>

                <div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
    
  );
};

export default Contactpage;
