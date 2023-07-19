import React from 'react'

function SkillsCard({name, logo, color}) {
  return (
    <div className='group w-32 rounded-lg drop-shadow-2xl hover:bg-[#937849] bg-[#282525] h-24 lg:w-[200px] lg:h-40 flex flex-col justify-center items-center'>
        <div className={`${color} text-3xl pb-2 lg:text-4xl`}>{logo}</div>
        <p className='group-hover:text-white text-sm'>{name}</p>
    </div>
  )
}

export default SkillsCard