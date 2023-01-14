import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill8 = ({directionLeft}: Props) => {
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
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAt1BMVEX///8AAAD/aATm5uaGhob/XwDh4eHV1dW6urrb29tzc3OOjo5oaGj/ZQD/8+zw8PAvLy+srKx9fX09PT3/WgDq6ur5+fnx8fGenp7/fDHCwsLMzMy0tLT/YQDFxcVSUlJfX18lJSV3d3eampo1NTX/k18PDw//j1j/mGn/v6MZGRn/2Mb/oHL/hk3/dCL/bxH/5tv/yrP/rYr/0Lz/q4ZJSUlXV1f/iVD/dzP/fzz/tZP/3s8gICBwT+f5AAAEWklEQVR4nO3YaXfiNhiGYRswYQAPcXCAYYckEwjZ00yamfn/v6te9MqyDEkLtNBz7usTluXlQbIk23EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYB/O+0FQK+eKBkFv+OVAt7MPw/lZot6KNsZtN3E5lt3lelri9g54j7upqARu2en+cLW6tdd1253D3ujWdIbWwDXFEas3Zkn70Le6JZ2w4ubVnJpV8j/tqHYwbRYUig59r9vZmHCN2qFvdiv/JGFdH/V1tby9u/dH4Wj0cLdYPuodg1qqml2hrIoGWdGgMUke8dNpz6goBw/jMa3WjGu0G/mZa9eE00ajns80v7g4y7Yu5aCS53kj3y/FfH/khfdPao907Ul2haYqGkpBbWZe4jXLMFVFXaf2Xe9v7C9hpRtvd9qudfLOpS6Qg0Ylix9eq11StauvYB3cMi6QCuz/ojwxd5/tK6F0oqo+tUz7J7pEpkTfTlgqeVfprrndYv38jZbtfEbd5pp9kf6eEp5LyW8pOZES164TJ4w6Z0w3Z7jK/R26m8ptpwu/jj7XpJk1ZuvDhPrh2DGhfhzkacgStu06vu95789Pq9XL8vbBUx1VNeJM1ZVumr/NV7WZ9g9p8PqHCd3dRptiQj206IQTu0549/RVn+GnilhKN3uqrup6Y7WZPmzSZVWj6X+zYyU86w8GPb2i2m2WKibUJTphs1An5y59LEdp6K6qO8kfm2ZQveFCDpU+3c/VVYunjgyouw2ne0j4nD6LnmrWbMyPqY1msnFeOE8uQ/7fcJyG2q7sOaGc99OEjy/LPxZv7w9qZJWE0hMDcyMdqYeyS1MF09x1pA9LD687u9g24dP1KIxGUpn3jYTSLq/xb7WCuLEuZntdm1AmrkMkXPpeYU7UCSvGjaqf6sHTw/TfSyhz5wES3nk6lx81o5VQ/vog62fqno1X7Lz22oTy2P73Ca9VwGhBWnq7/bnw8wllxHzVnfSH80nC0+NK+BKqRlusklFv6VkJh/pO1Q9Zd0kvPfliqR5XwivVZku1u5BQlmaBfBixT73h093RJJSlqOwuJJTOOVHLIz1jy3eRDVP40SRMO6n/5+aE2dtIQr/ldgsXS3Tm42NMWPJl9+3ITujMzIDGR7riqj7K15NFrFxHFu0HS6g66egqibR690qFhBdmwmFWnr18NvvpC/e4nlU5mjZUbRZNFu/Xb6VQpn4zYctMaH5KbrhrHVnCx1BP98mazZ7xY8Z3iHnueuuXNUeW0HnWEeOWfLiyZ3zHMb8mG49czPiydbwJo4jSNf1wEb0C+7HQTJh9+ZjZVxycFgLenPyLCfVf+sH74bRQZ/UtjD/ShOH1r+gl//5b7D6XsDE7TfwOnIJx7pvlrCIXOkuP+b7fsfS8quiSlpR0NteJHsan5XL5a+vLlsdBLxL0q5/XBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBt/QVrp0PmizfjfgAAAABJRU5ErkJggg=='
        alt=''
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28
        md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transtion duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>72%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill8