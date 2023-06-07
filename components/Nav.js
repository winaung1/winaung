import { AppContext } from '@/pages'
import Image from 'next/image'
import {useState, useContext} from 'react'
import {FaBars, FaDoorClosed} from 'react-icons/fa'

function Nav() {
  const [showMenuBar, setShowMenuBar] = useState(false)
  const handleShow = () => {
    setShowMenuBar(!showMenuBar)
  }

  return (
    <div className='flex justify-between items-center z-50 bg-[#282525] p-4 sticky top-0 w-full px-10 text-white'>
      <div>
        <Image alt='logo' className='w-14 h-14 object-contain' src={'/logo.png'} width={100} height={100}/>
      </div>
        <div className='hidden sm:flex space-x-4 transition-all duration-300 ease-in'>
            <p id='about' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>About</p>
            <p id='portfolio' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>Portfolio</p>
            <p id='contact' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>Contact</p>
        </div>
      {showMenuBar ? 
        <div className='transition-all duration-300 ease-in absolute top-0 right-0 bg-[#EBB943] h-40 w-40 px-4 p-4 text-white sm:hidden'>
            <p id='about' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>About</p>
            <p id='portfolio' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>Portfolio</p>
            <p id='contact' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>Contact</p>
          <div onClick={handleShow} className='text-xl hover:text-gray-600 cursor-pointer'>X</div>
        </div>  
        :
        <FaBars onClick={handleShow} className='block sm:hidden cursor-pointer hover:text-[#EBB943]'/>
      }
    </div>
  )
}

export default Nav