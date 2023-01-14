import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill12 = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img  
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{
            duration: 1,
        }}
        whileInView={{
            opacity: 1, x: 0,
        }}
        src='data:image/png;base64,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'
        alt=''
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28
        md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transtion duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>80%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill12