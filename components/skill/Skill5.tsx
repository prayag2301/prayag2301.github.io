import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill5 = ({directionLeft}: Props) => {
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

export default Skill5