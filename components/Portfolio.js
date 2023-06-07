import Image from 'next/image'
import {useContext, useRef} from 'react'
import button from '../components/Button'
import {SiJavascript, SiTailwindcss} from 'react-icons/si'
import portfolioData from '../components/PortfolioData'
import PortfolioCard from './PortfolioCard'
import {MdAdsClick} from 'react-icons/md'
import Link from 'next/link'



function Portfolio({portFolioRef}) {
  const styles = {
    size: 'w-full h-40 object-cover object-center drop-shadow-2xl',
  }

  return (
    <div ref={portFolioRef} className=''>
      <h1 id='portfolio' className='pt-10 text-2xl pb-2 text-center text-white lg:text-3xl'>Portfolio</h1>
      <p className='text-center text-[10px] italic pb-2 sm:hidden'>Click on each image to reveal description</p>
      <p className='text-center text-[10px] italic pb-2 hidden sm:block'>Hover on each image to reveal description</p>
      <MdAdsClick className='text-yellow-500 text-xl w-20 mx-auto rotate-[226deg] animate-pulse'/>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 px-10 lg:px-2 py-4 lg:place-items-center lg:w-[1000px] lg:max-w-7xl mx-auto'>
        {portfolioData.map((item, index) => (
          <PortfolioCard 
            index={index}
            id={item.id}
            key={item.id} 
            img={item.img} 
            text={item.text} 
            cn={item.cn} 
            colorOne={item.colorOne} colorTwo={item.colorTwo} colorThree={item.colorThree} colorFour={item.colorFour} colorFive={item.colorFive}
            logoOne={item.logoOne} logoTwo={item.logoTwo} logoThree={item.logoThree} logoFour={item.logoFour} logoFive={item.logoFive}
            link={item.link}
          />
      ))}
      </div>
      <div className='text-center'>
      <Link href='Win_Aung_Resume.pdf' target={'_blank'}>
        <button className='bg-[#EBB943] px-1 lg:px-4 lg:py-2 py-1 rounded-md text-black'>View Resume</button>
      </Link>
      </div>
    </div>
  )
}
export default Portfolio