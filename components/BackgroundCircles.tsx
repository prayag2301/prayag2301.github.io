import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
        initial={{
            opacity: 0,
            scale: 3,
        }}
        animate={{
            // scale: [1,2,2,3,1],
            // opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
            scale: 1,
            opacity: 1,

        }}
        transition={{
            duration: 1.5,
        }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#1becff] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52' />
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-pulse' />
        <div className='absolute border border-[#1becff] rounded-full h-[700px] w-[700px] mt-52' />
    </motion.div>
  )
}

export default BackgroundCircles