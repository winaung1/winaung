import { AppContext } from '@/pages'
import {useContext, useRef, useState} from 'react'
import {FaMailBulk, FaPhone, FaMapPin} from 'react-icons/fa'
function Contact({contactRef}) {
  const [successMessage, setSuccessMessage] = useState('')
  const emailRef = useRef()
  const phoneRef = useRef()
  function myFunction(val) {
    // Get the text field
    var text = val;

    // Copy the text inside the text field
    navigator.clipboard.writeText(text);
    
    // // Alert the copied text
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000)
    setSuccessMessage("Copied: " + text);
  }
  return (
    <div ref={contactRef} className='relative bg-bg-[#282525] drop-shadow-2xl mt-14 border-b border-[#EBB943]/30 pb-10'>
      <p className='transition-all duration-300 ease-in absolute bottom-0 left-0 bg-green-500 text-white w-full text-center'>{successMessage}</p>
      <div className='flex justify-between -translate-y-2'>
      <div className='w-[170px] h-[1px] bg-[#EBB943]/30 mt-2 lg:w-[40%]'/>
      <h1 className='text-center text-2xl pb-2 text-white -translate-y-2'>Contact Me</h1>
      <div className='w-[170px] h-[1px] bg-[#EBB943]/30 mt-2 lg:w-[40%]'/>
      </div>
      <div className='flex gap-1 flex-wrap justify-center items-center'>
        <div onClick={() => myFunction(emailRef.current.value)} className='cursor-pointer flex items-center bg-[#282525] drop-shadow-2xl min-w-[40%] lg:min-w-[20%] w-fit px-4 py-1 rounded space-x-3'>
          <FaMailBulk/>
          <input ref={emailRef} type='text' className='bg-transparent w-full outline-none focus:' value='winaung1997@outlook.com'/>
        </div>
        <div onClick={() => myFunction(phoneRef.current.value)} className='cursor-pointer flex items-center bg-[#282525] drop-shadow-2xl min-w-[40%] lg:min-w-[20%] w-fit px-4 py-1 rounded space-x-3'>
          <FaPhone/>
          <input ref={phoneRef} type='text' className='bg-transparent w-full outline-none' value='801-918-1587'/>
        </div>
        <div className='flex items-center bg-[#282525] drop-shadow-2xl min-w-[40%]  lg:min-w-[20%] w-fit px-4 py-1 rounded space-x-3'>
          <FaMapPin/>
          <p>United States of America</p>
        </div>
      </div>
    </div>
  )
}

export default Contact