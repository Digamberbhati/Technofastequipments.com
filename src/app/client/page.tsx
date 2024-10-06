import React from 'react';

const Careerspage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* Client Testimonial Section */}
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Our Clients</h2>
            <p className="text-lg text-white mb-12">
              We value the relationships we build with our clients. Here's what they have to say about our work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Client 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img className="w-16 h-16 mx-auto rounded-full" src="https://via.placeholder.com/100" alt="Client Image" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">John Doe</h3>
                <p className="text-gray-500">CEO, ABC Corp.</p>
                <p className="mt-4 text-gray-600">
                  "Shri Radhe Automobile has been an incredible partner, delivering top-notch services every time."
                </p>
              </div>

              {/* Client 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img className="w-16 h-16 mx-auto rounded-full" src="https://via.placeholder.com/100" alt="Client Image" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">Jane Smith</h3>
                <p className="text-gray-500">CTO, Tech Innovators</p>
                <p className="mt-4 text-gray-600">
                  "Their team goes above and beyond to meet our needs. Highly recommend!"
                  chaman gandu
                </p>
              </div>

              {/* Client 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img className="w-16 h-16 mx-auto rounded-full" src="https://via.placeholder.com/100" alt="Client Image" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">Michael Lee</h3>
                <p className="text-gray-500">COO, Global Solutions</p>
                <p className="mt-4 text-gray-600">
                  "Professional, reliable, and exceptional quality in every project they handle."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Careerspage;
