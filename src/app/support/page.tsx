import React from 'react';

const Supportpage = () => {
  return (
    <div className='bg-gray-100'>
      {/* Support Section */}
      <br/>
      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>Support</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            We're here to help
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            Reach out to us if you have any questions or need assistance. Our support team is ready to assist you.
          </p>
        </div>
        
        <div className='mt-10'>
          <div className='flex justify-center space-x-8'>
            {/* Support Card 1 */}
            <div className='bg-slate-300 shadow-lg rounded-lg p-6 max-w-sm text-center'>
              <div className='mb-4'>
                <svg className='w-12 h-12 mx-auto text-indigo-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-gray-900'>Technical Support</h3>
              <p className='mt-2 text-gray-500'>Get help with technical issues and system errors.</p>
              <a href='#' className='mt-4 inline-block text-indigo-600 hover:text-indigo-500 font-medium'>Contact Now</a>
            </div>

            {/* Support Card 2 */}
            <div className='bg-slate-300 shadow-lg rounded-lg p-6 max-w-sm text-center'>
              <div className='mb-4'>
                <svg className='w-12 h-12 mx-auto text-indigo-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-gray-900'>Sales Support</h3>
              <p className='mt-2 text-gray-500'>Need help with product pricing, or have questions about purchases?</p>
              <a href='#' className='mt-4 inline-block text-indigo-600 hover:text-indigo-500 font-medium'>Contact Now</a>
            </div>

            {/* Support Card 3 */}
            <div className='bg-slate-300 shadow-lg rounded-lg p-6 max-w-sm text-center'>
              <div className='mb-4'>
                <svg className='w-12 h-12 mx-auto text-indigo-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4m0 4h.01M12 5a7 7 0 110 14 7 7 0 010-14z' />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-gray-900'>Account Support</h3>
              <p className='mt-2 text-gray-500'>Have issues with your account or billing? We're here to help.</p>
              <a href='#' className='mt-4 inline-block text-indigo-600 hover:text-indigo-500 font-medium'>Contact Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Supportpage;
