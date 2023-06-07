import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import MySkills from '@/components/MySkills'
import Testimonial from '@/components/Testimonial'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import { createContext, useState, useRef } from 'react'
import portfolioData from '@/components/PortfolioData'
import { FaBars } from 'react-icons/fa'
const inter = Inter({ subsets: ['latin'] })

export const AppContext = createContext(null)
export default function Home() {
  const [showMenuBar, setShowMenuBar] = useState(false)
  const handleShow = () => {
    setShowMenuBar(!showMenuBar)
  }

  const [portfolioId, setPortfolioID] = useState('');
  const [pic, setPic] = useState('')
  const [text, setText] = useState('')
  const [showModal, setShowModal] = useState(false)
  const contactRef = useRef();
  const homeRef = useRef();
  const portFolioRef = useRef();

  const filteredItem = () => {
    portfolioData.filter((item) => {
    if(item?.id == portfolioId){
       setPic(item.img)
       setText(item.text)
       setShowModal(!showModal)
  }
  })}

  function scrollTo(ref) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  
  return (
    <AppContext.Provider value={{portfolioId, setPortfolioID, filteredItem}}>
      <div className='flex justify-between items-center z-50 bg-[#282525] p-4 sticky top-0 w-full px-10 text-white'>
      <div onClick={() => scrollTo(homeRef)} ref={homeRef} className="cursor-pointer">
        <Image alt='logo' className='w-14 h-14 object-contain' src={'/logo.png'} width={100} height={100}/>
      </div>
        <div className='hidden sm:flex space-x-4'>
        <p onClick={() => scrollTo(homeRef)} id='about' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>About</p>
            <p onClick={() => scrollTo(portFolioRef)} id='portfolio' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>Portfolio</p>
            <p onClick={() => scrollTo(contactRef)} id='contact' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>Contact</p>
        </div>
      {showMenuBar ? 
        <div className='absolute top-0 right-0 bg-[#EBB943] h-40 w-40 px-4 p-4 text-white transition-all duration-300 ease-in sm:hidden'>
          <p onClick={() => scrollTo(homeRef)} id='about' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>About</p>
            <p onClick={() => scrollTo(portFolioRef)} id='portfolio' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>Portfolio</p>
            <p onClick={() => scrollTo(contactRef)} id='contact' className='hover:text-gray-600 sm:hover:text-[#f59e0b] cursor-pointer'>Contact</p>
          <div onClick={handleShow} className='text-xl hover:text-gray-600 cursor-pointer'>X</div>
        </div>  
        :
        <FaBars onClick={handleShow} className='block sm:hidden cursor-pointer hover:text-[#EBB943]'/>
      }
    </div>
      <Banner homeRef={homeRef}/>
      <About/>
      <Portfolio portFolioRef={portFolioRef}/>
      <Experience/>
      <MySkills/>
      <Contact contactRef={contactRef}/>
      <Footer/>
    </AppContext.Provider>
  )
}
