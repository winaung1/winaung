import Image from 'next/image'
import Link from 'next/link'
import {useRef} from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

function Banner({homeRef}) {

  return (
    <div ref={homeRef} className='relative bg-hero-pattern h-[500px] flex justify-center items-center text-center text-xl text-white lg:text-3xl'>
      <div className='absolute inset-0 md:bg-black/60 w-full h-full'></div>
      <div className='z-[10000]'>
        <div className='uppercase'>I&apos;m <span className='text-[#EBB943] font-bold text-xl lg:text-3xl'>Win Aung</span></div>
        <p className='pb-4'>Frontend React/Next Js Developer</p>
        <Link className='cursor-pointer' href='Win_Aung_Resume.pdf' target={'_blank'}>
          <button className='border-2 border-[#EBB943] text-[#EBB943] px-4 rounded-md'>Hire Me</button>
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 absolute bottom-10 right-10'>
        <div className='w-[2px] h-12 bg-[#EBB943]'/>
        <Link href='https://www.linkedin.com/in/win-aung-815945193/' target='_blank'>
        <FaLinkedinIn className='text-sm hover:text-[#EBB943] cursor-pointer md:text-xl font-semibold'/>
        </Link>
        <Link href='https://github.com/winaung1' target='_blank'>
        <FaGithub className='text-sm hover:text-[#EBB943] cursor-pointer md:text-xl font-semibold'/>
        </Link>
      </div>
    </div>
  )
}

export default Banner