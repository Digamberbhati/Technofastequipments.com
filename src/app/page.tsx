import Globe from '@/components/ui/globe';
import React from 'react';


const Homepage = () => {
  return (
    <>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Detecting Excellence, Manufacturing Precision</h1>
          <p className="text-lg text-gray-600 mb-6">Techno Fantastic Instrument Company, your trusted partner for innovative metal detection solutions.</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Explore Our Metal Detectors</button>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="bg-cover bg-no-repeat bg-center h-screen" style={{ backgroundImage: 'url(/metal-detector-image.jpg)' }}>
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Revolutionizing Metal Detection Technology</h1>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Metal Detector Features</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
              <div className="bg-white rounded shadow-md p-4">
                <h3 className="text-xl font-bold text-gray-800">Advanced Detection Technology</h3>
                <p className="text-lg text-gray-600">High sensitivity and accuracy for reliable detection.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
              <div className="bg-white rounded shadow-md p-4">
                <h3 className="text-xl font-bold text-gray-800">Rugged and Durable Design</h3>
                <p className="text-lg text-gray-600">Built to withstand harsh environments and heavy use.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
              <div className="bg-white rounded shadow-md p-4">
                <h3 className="text-xl font-bold text-gray-800">User-Friendly Interface</h3>
                <p className="text-lg text-gray-600">Intuitive controls for easy operation and customization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <h1 className="flex text-center font-bold "></h1>
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Globe
          </span>
          <Globe className="top-28" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
      </div>

     
   
    </>
  );
};

export default Homepage;
