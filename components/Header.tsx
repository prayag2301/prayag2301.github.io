import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
        <motion.div 
        initial={{
            x:500,
            opacity: 0,
            scale: 1.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{ duration: 1.5}}
        className='flex flex-row items-center'
        >
            <SocialIcon 
            url='https://www.linkedin.com/in/prayag-sharma-77498018b/'
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon 
            url='https://twitter.com/Mavengine007'
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon 
            url='https://medium.com/@prayagsharma2001'
            fgColor='gray'
            bgColor='transparent'
            />
            
        </motion.div>

        <Link href='#contact'>
        <motion.div
        initial={{
            x:-500,
            opacity: 0,
            scale: 1.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{ duration: 2}}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        >
            <SocialIcon  
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
               Email
            </p>
        </motion.div>
        </Link>
    </header>
  )
}