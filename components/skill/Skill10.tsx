import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill10 = ({directionLeft}: Props) => {
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
                <p className='text-3xl font-bold text-black opacity-100'>65%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill10