import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ExperienceCard2({}: Props) {
  return (
    <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0
    w-[400px] md:w-[700px] md:h-[600px] xl:w-[800px] snap-center bg-[rgb(39,40,42)] p-10 hover:opacity-100
    opacity-40 cursor-pointer scroll-hidden transition-opacity duration-200 overflow-hidden'>
        <motion.img  
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.5,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        viewport={{
           once: true
        }}

        className='w-20 h-20 rounded-full object-cover object-center'
        src='https://www.iitbhu.ac.in/contents/iitbhu/img/other/iit_logo_original.png'
        alt=''
        />

        <div className='px-0 md:px-10'>
            <h4 className='uppercase text-3xl font-light'>Research Intern, AI/ML</h4>
            <p className='font-bold text-2xl mt-1'>IIT-BHU</p>
            <div className='flex space-x-2 my-2'>
                <img 
                className='h-8 w-8 rounded-full'
                src='data:image/png;base64,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'
                />
                <img 
                className='h-8 w-8 rounded-full'
                src='data:image/png;base64,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'
                />
                <img 
                className='h-8 w-8 rounded-full'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qM38hAM6HBOQJXiV-RKvyL4ibpAltShmsL6NtKSNfg&s'
                />
            </div>

            <p className='uppercase py-5 text-gray-300'>august 2021 to February 2022</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Worked on Projects and tasks assigned in the field of Facial Recognition Systems</li>
                <li>Implemented Deep learning models for faster 
                    verification </li>
                <li>Developed a custom Dlib face recognition model for cows.</li>
                <li>Worked with multiple databases such as Elastic Search 
                    and Kibana to determine efficiency during verification.</li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard2