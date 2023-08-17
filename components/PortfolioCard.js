import { AppContext } from '@/pages'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useContext} from 'react'

function PortfolioCard({link, index, id, img, text, colorOne, colorTwo, colorThree, colorFour, colorFive, logoOne, logoTwo, logoThree, logoFour, logoFive, cn}) {
  const [showModal, setShowModal] = useState(false)
  const {portfolioId, setPortfolioID, filteredItem} = useContext(AppContext)
  const [changeState, setChangeState] = useState('hidden')


  const handleShow = (itemId) => {
    setShowModal(true)
    // setPortfolioID(id)
    // filteredItem()

    if(itemId == index){
      setChangeState('flex')
      setTimeout(() => {
        setChangeState('hidden')
      }, 4000)
    } 
  }
  return (
         <div onClick={(e) => handleShow(id)} className={` ${cn} group relative cursor-pointer`}>
         
          <Image alt='' className={`${cn} rounded`} src={img} width={500} height={500}/>
          <div className={`${changeState} sm:hidden absolute inset-0 bg-black/70 text-[#EBB943] text-center items-center sm:group-hover:flex justify-center italic flex-col gap-4 px-4`}>
            <p className='text-xs sm:text-lg '>{text}</p>
            <div className='flex space-x-2 text-xs sm:text-2xl'>
            <div className={colorOne}>{logoOne}</div>
            <div className={colorTwo}>{logoTwo}</div>
            <div className={colorThree}>{logoThree}</div>
            <div className={colorFour}>{logoFour}</div>
            <div className={colorFive}>{logoFive}</div>
            </div>
            <Link href={link} target='_blank' className='border rounded px-2 text-sm'>Visit Site</Link>
          </div>
          </div>

  )
}

export default PortfolioCard