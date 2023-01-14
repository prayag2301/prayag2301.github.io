import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill3 = ({directionLeft}: Props) => {
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
        src='data:image/jpeg;base64,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'
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

export default Skill3