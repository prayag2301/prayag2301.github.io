import React from 'react'
import ExperienceCard from './ExperienceCard'
import ExperienceCard2 from './ExperienceCard2'
import ExperienceCard3 from './ExperienceCard3'
import ExperienceCard4 from './ExperienceCard4'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className='w-full max-w-6xl flex space-x-5 overflow-x-scroll p-10 
        snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[teal]/80'>
            <ExperienceCard  />
            <ExperienceCard3  />
            <ExperienceCard2  />
            <ExperienceCard4 />
        </div>
    </div>
  )
}

export default WorkExperience