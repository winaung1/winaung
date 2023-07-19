import React from 'react'
import Data from './Data'
import SkillsCard from './SkillsCard'

function MySkills() {
  return (
    <div>
        <h1 className='text-center pt-10 text-2xl pb-2 text-white lg:text-3xl'>My Skills</h1>
        <div className='sm:w-[500px] lg:w-[700px] xl:w-[900px] mx-auto flex gap-2 flex-wrap justify-center px-10'>
        {
          Data.map((item) => (
            <SkillsCard key={item.id} name={item.name} logo={item.logo} color={item.color}/>
            ))
          }
          </div>
    </div>
  )
}

export default MySkills