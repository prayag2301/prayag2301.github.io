import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill = ({directionLeft}: Props) => {
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
                <p className='text-3xl font-bold text-black opacity-100'>77%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill