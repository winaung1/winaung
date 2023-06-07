import React from 'react'

function About() {
  return (
    <div className='px-10'>
      <h1 className='pt-10 text-2xl pb-2 text-white lg:text-3xl'>About</h1>
      <div className='flex space-x-2 lg:w-[880px] mx-auto'>
      <div className='w-[72px] h-[1px] bg-[#EBB943] mt-2 lg:w-32'/>
      <p className='text-sm lg:text-2xl'>I’m a software engineer who loves creating websites and apps. 
      I believe that you have to be able to see the big picture when you’re building something, and that’s
       why I like to work toward the same goal—to make your site better than you could ever do on your own.</p>
      </div>
    </div>
  )
}

export default About