import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill9 = ({directionLeft}: Props) => {
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

export default Skill9