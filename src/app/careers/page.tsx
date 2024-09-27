import React from 'react';

const Careerspage = () => {
  return (
    <>
    <br />
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl font-bold text-white">Careers at Our Company</h1>
          <p className="mt-4 text-lg text-indigo-200">
            Join our team and help shape the future!
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Explore Our Open Roles</h2>
            <p className="mt-4 text-lg text-gray-600">
              We’re always on the lookout for talented and passionate individuals.
            </p>
          </div>
        </div>
      </div>

      {/* Career Cards Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Career Card 1 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">Software Engineer</h3>
              <p className="text-gray-600 mt-2">
                Work on cutting-edge technology and build solutions for the future.
              </p>
              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Full-time
                </span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Remote
                </span>
              </div>
              <a href="#" className="block mt-6 text-indigo-500 font-medium hover:underline">
                Learn More
              </a>
            </div>

            {/* Career Card 2 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">Product Manager</h3>
              <p className="text-gray-600 mt-2">
                Lead teams to success and shape the future of our products.
              </p>
              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Full-time
                </span>
                <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                  On-site
                </span>
              </div>
              <a href="#" className="block mt-6 text-indigo-500 font-medium hover:underline">
                Learn More
              </a>
            </div>

            {/* Career Card 3 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">Marketing Specialist</h3>
              <p className="text-gray-600 mt-2">
                Help us spread the word and grow our brand globally.
              </p>
              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Full-time
                </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  Hybrid
                </span>
              </div>
              <a href="#" className="block mt-6 text-indigo-500 font-medium hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Make an Impact?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Check out all available positions and find the right one for you.
          </p>
          <a
            href="#"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            View All Open Positions
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Careerspage;
