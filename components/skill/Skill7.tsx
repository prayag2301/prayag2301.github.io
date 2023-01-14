import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill7 = ({directionLeft}: Props) => {
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
                <p className='text-3xl font-bold text-black opacity-100'>70%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill7