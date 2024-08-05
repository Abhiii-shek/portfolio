import React from 'react'
import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/kevinRushProfile.png"
import {motion} from "framer-motion"

const container =(delay)=>
(
    {
        hidden:{x:-100 ,opacity:0},
        visible:{x:0 ,opacity:1,
            transition:{duration:0.5,delay:delay},
        },
    }
)
const container2 =(delay)=>
    (
        {
            hidden:{x:100 ,opacity:0},
            visible:{x:0 ,opacity:1,
                transition:{duration:0.5,delay:delay},
            },
        }
    )

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                variants={container(0.2)}
                initial="hidden"
                animate="visible"

                className='pb-16 text-6xl  text-center md:text-start font-thin lg:mt-16 lg:text-7xl'>Abhishek Rajbhar</motion.h1>
                <motion.span
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                className=' bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent'>Front End Developer</motion.span>

                <motion.p
                  variants={container(1)}
                  initial="hidden"
                  animate="visible"
                className='my-2 max-w-xl text-center  py-6 font-light  text-xl '>
                    {HERO_CONTENT}
                </motion.p>


            </div>

            </div>
            <div className='w-full lg:w-1/2 p-8'>
            <motion.div
            variants={container2(1.2)}
            initial="hidden"
            animate="visible" className='flex justify-center'>
                <img src={profilePic} alt="" />
            </motion.div>
            </div>
           

        </div>
        
        
                </div>
  )
}

export default Hero