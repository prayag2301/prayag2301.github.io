import React from 'react'
import Image from 'next/image';
import proshop from '../public/images/proshop.png'
import cows from '../public/images/cows.png'
import covid from '../public/images/covid.png'
import animal from '../public/images/animal.png'
import {motion} from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {

    const projects= [
        {
            id: 1,
            path: proshop,
            name: 'E_COMMERCE',
            description: "Developed an E - Commerce website using MERN Stack with Admin and Client interface and implemented Paypal sandbox for payments.Simple, responsive and easy to use UI/UX, user can easily navigate in the website and can give ratings and comments to the products. Admin can view the status of the orders and mark them as delivered once the product is delivered.",
        },
        {
            id: 2,
            path: covid,
            name: 'COVID-19',
            description: 'A React.js website for tracking covid-19 cases across the globe. This website contains Mathdroid Covid-19 REST API v1.0 to display statistics of all countries -displays Infected, Recovered, Deaths and Active cases. The API call updates these statistics every hour.'
        },
        {
            id: 3,
            path: cows,
            name: 'DLIB_FOR_COWS',
            description: 'Custom designed and implemented face detection file using SVM .Made custom bounding boxes using imglab tool. Plotted landmark points on all cow images present in the training dataset. Trained the entire dataset using the existing dlib resnet model. This also helps to form facial embeddings. To perform facial recognition, performed searching on embeddings of all cows from the training dataset.'
        },
        {
            id: 4,
            path: proshop,
            name: 'TRAFFIC SIGNS CLASSIFIER',
            description: 'Developed a web app to classify various traffic signs with approximately 96% accuracy. Convolutional Neural Networks were used for deep learning models and image processing. The model was deployed on a web app using Flask.'
        },
        {
            id: 5,
            path: animal,
            name: 'INTELLIGENT ANIMAL ALERT SYSTEM',
            description: 'A CNN based classification model used to identify wild animals or humans. The project makes use of twilio API for alert messages to users if a wild animal is identified. Accuracy of the model is over 90% This project won the award for “Most creative use of twilio” in Wildhacks hackathon organized by MLH.'
        },
    ];

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
            {projects.map((project) =>(
                <motion.div key={project.id}
                initial={{ opacity: 0, y: -300}}
                transition={{ duration: 1.5}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true}}
                className='w-screen  flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen'>
                    <Image 
                        className='max-w-2xl'
                        src={project.path}
                        alt=''
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-5xl'>
                        <h4 className='text-xl font-semibold text-center'>
                            <span className='underline decoration-slate-400/50'>
                                Project {project.id} of {projects.length}: {project.name}
                            </span>
                        </h4>

                        <p className='text-sm text-center md:text-justify'>
                        {project.description}
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