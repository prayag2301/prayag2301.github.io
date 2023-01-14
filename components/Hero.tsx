import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {

    const [text,count] = useTypewriter({
        words: [
            "Hi, I am Prayag Sharma",
            "Ardent learner in the CS Industry",
            "Feel free to reach out!"
        ],
        loop: true,
        delaySpeed: 500,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles  />
        <img
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src='data:image/jpeg;base64,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'
            alt=''
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                CSE undergraduate
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold pz-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='teal'  />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
 }