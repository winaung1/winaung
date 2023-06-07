import React from 'react'

function Experience() {
  return (
    <div className='px-10 bg-[#282525] pb-4 mt-20'>
      <h1 className='-translate-y-6 text-2xl pb-2 text-white lg:text-3xl'>Experience</h1>
      <div className='flex space-x-4 justify-center'>
        <div className='bg-white drop-shadow-2xl h-6 px-1 rounded-r-full'>2021</div>
        <div className='flex item-center justify-center flex-col pt-1'>
          <div className='w-3 h-3 bg-[#EBB943] glow rounded-full mb-2'></div>
          <div className='bg-white w-[1px] h-40 sm:h-32 mx-auto'></div>
        </div>
        <div>
          <h1 className='text-white lg:text-2xl'>Freelance Web Developer</h1>
          <p className='pb-2'>USA, Utah</p>
          <p className='max-w-3xl lg:text-xl'>
            My main work of line is doing website for clients from scratch using all the technologies in the skills section.
            I enjoy this work because I can come up with different ideas and be creative.
          </p>
        </div>
      </div>
      <div className='flex space-x-4 justify-center pt-8'>
        <div className='bg-white drop-shadow-2xl h-6 px-1 rounded-r-full'>2021</div>
        <div className='flex item-center justify-center flex-col pt-1'>
          <div className='w-3 h-3 bg-[#EBB943] glow rounded-full mb-2'></div>
          <div className='bg-white w-[1px] h-40 sm:h-32 mx-auto'></div>
        </div>
        <div>
          <h1 className='text-white lg:text-2xl'>Software Engineer</h1>
          <p className='pb-2'>USA, Utah</p>
          <p className='max-w-3xl lg:text-xl'>
            I had to fetch data using backend Api and display it in the front page.
            I was working for Vanderhall Motor Works, a small startup company. I provided alot of value during my time there.
            I enjoyed working there.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Experience