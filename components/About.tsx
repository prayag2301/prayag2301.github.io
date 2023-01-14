import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import image from '../public/images/jammu.jpg'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 2,
    }}
    className='flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            About
        </h3>


        <Image
            src={image}
            alt=''
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56
        rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"  
        
        />

        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.25
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0, scale: 1}}
        className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                My Background
            </h4>
            <p className='text-base'>
                Final year Computer Science undergraduate. Over 10 months experience in Internships in various industries. 
                Ardent learner in the field of Machine Learning, Artificial 
                Intelligence and Web development. Dynamic and creative Software Developer 
                with experience of multiple tools and technologies.
            </p>
            <p className='text-base'>
                I am a football fanatic, and spend most of my free time playing sports.
                My hobbies also include writing articles and reading non-fiction.
            </p>
        </motion.div>


    </motion.div>
  )
}