import React from 'react';
// import cn from 'classnames';
// import Marquee from "react-fast-marquee";
import Marquee from "@/components/ui/marquee";



import { NeonGradientCard } from "@/components/ui/neon-gradient-card";



// import React from 'react';
// import Marquee from 'react-marquee-3d'; // Ensure correct Marquee component import
import cn from 'classnames'; // Import classnames utility
import './styles.css'; // Import CSS styles (adjust path as needed)


const Servicepage = () => {
  return (
    <>
    <div>

    <NeonGradientCard className="max-w-sm m-52 items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Neon Gradient Card
      </span>
    </NeonGradientCard>
    </div>

    <div className="bg-gradient-to-r bg-zinc-900  to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-14">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Bike Service */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 19.5h.75v-3m0 0H7.5a3 3 0 01-3-3V9.75m3 6.75V6.75a3 3 0 013-3h4.5a3 3 0 013 3V16.5h-.75m.75-6.75H17.25m0 0V7.5a3 3 0 00-3-3H9.75a3 3 0 00-3 3v2.25" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Bike Service</h3>
            <p className="text-center mb-6 text-gray-600">Professional bike maintenance and repairs with performance upgrades to keep your ride smooth.</p>
            <a href="#" className="block text-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Learn More</a>
          </div>

          {/* Car Service */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-red-500 to-red-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-red-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 14a2 2 0 01-1.414-.586l-1.12-1.121a2 2 0 010-2.828l1.12-1.12a2 2 0 011.414-.586h13.758a2 2 0 011.414.586l1.121 1.12a2 2 0 010 2.828l-1.121 1.12a2 2 0 01-1.414.586H5.121z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 15a3.5 3.5 0 01-7 0m7 0a3.5 3.5 0 01-7 0m7 0h1.5a2 2 0 002-2V10a2 2 0 00-2-2h-1.5m-7 7a3.5 3.5 0 01-7 0m7 0a3.5 3.5 0 01-7 0m7 0H5.5a2 2 0 01-2-2V10a2 2 0 012-2h1.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Car Service</h3>
            <p className="text-center mb-6 text-gray-600">Get comprehensive diagnostics, repairs, and custom modifications for your car.</p>
            <a href="#" className="block text-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">Learn More</a>
          </div>

          {/* Other Services */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-green-500 to-green-400 hover:text-white">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7H9m12 10h1.5a2.5 2.5 0 00-2.5-2.5H9.5a2.5 2.5 0 00-2.5 2.5H4a2.5 2.5 0 00-2.5 2.5V21h21v-1.5a2.5 2.5 0 00-2.5-2.5zm0 0h-9m9 0H5.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Other Services</h3>
            <p className="text-center mb-6 text-gray-600">Explore a variety of customization options and accessories for your vehicle.</p>
            <a href="#" className="block text-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">Learn More</a>
          </div>
        </div>
      </div>
    </div>

    const reviews = [
  // Review data remains the same
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <>
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // Light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // Dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
    </>
  );
};

const MarqueeDemo = () => {
  return (
    <>
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </>
  );
};

export default MarqueeDemo;
