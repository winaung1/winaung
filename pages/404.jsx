import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function ErrorPage() {
  return (
    <div className='bg-white h-screen w-full'>
        <div className='flex flex-col justify-center items-center h-screen'>
            <p className=' text-[200px] font-bold'>Oops!</p>
            <p className='font-bold'>404-Page not found</p>
            <p>The page you are looking for might not exist</p>
            <Link href='/' className='bg-blue-500 rounded-lg text-white px-6 py-2 mt-5'>Home</Link>
        </div>
    </div>
  )
}

export default ErrorPage