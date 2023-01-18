import React, { useState } from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm , SubmitHandler} from 'react-hook-form' 
import { useEffect} from 'react'

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

function ContactMe({}: Props) {

    const { 
        register, 
        handleSubmit, 
        
     } = useForm<Inputs>(); 

  const onSubmit: SubmitHandler<Inputs> = (formData) => {

    // const [mounted, setMounted] = useState(false);
    // useEffect(() => setMounted(true), []);
    // if (!mounted) return null;

    window.location.href = `mailto:prayagsharma2001@gmail?subject=${formData.subject}&
    body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  }; 

  return (
    <div className='flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            Contact
        </h3>    
        
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center text-gray-300'>
                Drop in a message
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#f7ab0a] h-7 -w-7 animate-bounce'/>
                    <p className='text-2xl'>
                        +917738288819
                    </p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#f7ab0a] h-7 -w-7'/>
                    <p className='text-2xl'>
                        prayagsharma2001@gmail.com
                    </p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#f7ab0a] h-7 -w-7'/>
                    <p className='text-2xl'>
                        Mumbai, Mahrashtra
                    </p>
                </div>
                </div>

                <form
                onSubmit={handleSubmit(onSubmit)} 
                className='flex flex-col space-y-2 w-fit mx-auto'
                suppressHydrationWarning>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type='text' />
                        <input {...register('email')} placeholder='Email' className='contactInput' type='email' />

                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button 
                    type='submit'
                    className='bg-[teal] py-5 px-10 rounded-md text-black font-bold
                    text-lg'>Submit</button>
                </form>
            </div>
        </div>
  )
}

export default ContactMe