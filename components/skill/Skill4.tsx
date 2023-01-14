import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill4 = ({directionLeft}: Props) => {
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
                <p className='text-3xl font-bold text-black opacity-100'>82%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill4