import Image from 'next/image'
import React from 'react'

function Testimonial() {
  return (
    <div>
      <div className='flex flex-col gap-6 px-1 mt-10'>
        <div className='flex space-x-5'>
          <div className='w-2 h-2 rounded-full bg-[#282525]'></div>
          <div className='w-2 h-2 rounded-full bg-[#282525]'></div>
          <div className='w-2 h-2 rounded-full bg-[#282525] '></div>
        </div>
        <div className='flex space-x-5'>
          <div className='w-2 h-2 rounded-full bg-[#282525] '></div>
          <div className='w-2 h-2 rounded-full bg-[#282525] '></div>
          <div className='w-2 h-2 rounded-full bg-[#282525] '></div>
        </div>
      </div>
      <h1 className='px-10 pt-4 text-2xl pb-2 text-white'>Testimonial</h1>
      <div className='flex space-x-2'>
        <div className='w-[72px] h-[1px] bg-[#f59e0b] mt-2'/>
        <div>
          <p className='text-sm pr-4 pb-2'>Love the product and the efficiency of Win&apos;s work!</p>
          <p className='text-white'>John</p>
          <p className='text-xs'>Co-founder of Apple</p>
        </div>
        <div className='relative bg-yellow-500 h-32 w-60 rounded-l-lg'>
         {/* <Image alt='' className='absolute -top-[132px] left-10 w-32 h-[340px] object-contain object-center rounded-lg' src={'/person.png'} width={100} height={100}/> */}
        </div>
      </div>
    </div>
  )
}

export default Testimonial