import React from 'react'
import Image from 'next/image';
import proshop from '../public/images/proshop.png'
import {motion} from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {

    const projects= [1 ,2 ,3, 4, 5];

  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[teal]/80'>
            {projects.map((project, i) =>(
                <motion.div 
                initial={{ opacity: 0, y: -300}}
                transition={{ duration: 1.5}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true}}
                className='w-screen  flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen'>
                    <Image 
                        className='max-w-2xl'
                        src={proshop}
                        alt=''
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-5xl'>
                        <h4 className='text-xl font-semibold text-center'>
                            <span className='underline decoration-slate-400/50'>
                                Project {i+1} of {projects.length}: WEB DEVELOPMENT
                            </span>
                        </h4>

                        <p className='text-sm text-center md:text-justify'>
                        Developed an E - Commerce website using MERN Stack with Admin and Client interface and implemented Paypal sandbox for 
                        payments. Simple, responsive and easy to use UI/UX, user can easily navigate in the website and can give ratings and comments to 
                        the products. Admin can view the status of the orders and mark them as delivered once the product is delivered.
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[teal]/10 left-0 h-[500px] 
        -skew-y-12' />

        </motion.div>
  )
}

export default Projects