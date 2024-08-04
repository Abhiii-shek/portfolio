import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import {RiTailwindCssLine} from "react-icons/ri"
import { FaNodeJs } from 'react-icons/fa';
import { color } from 'framer-motion';
import {motion} from "framer-motion"



const Technologies = () => {
    const icon=[{
        name:"ReactJs",
        id:1,
       logo: <RiReactjsLine/>
       
    },
    {
        id:2,      
        logo: <RiNextjsLine/>,
        
     },
     {
        id:3,
        logo: <DiMongodb/>,
        
     },
     {
        id:4,
        logo: <RiTailwindCssLine/>,
        
     },
     {
        id:5,
        logo: <FaNodeJs/>,
        
      },
        
]
const colors=["text-blue-600","text-green-500","text-green-500","text-blue-600","text-green-500"]
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <h1 className='text-center text-4xl my-20 '>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1}}
            className='flex flex-wrap justify-center rounded-2xl  border-neutral-900 p-4 gap-4'>
                
            {
               

                icon.map((item,index)=>{
                    const colorClass=colors[index % colors.length];
                    return(
                        <li key={index.id} className={`${colorClass} p-4 m-2 rounded-xl flex  text-4xl md:text-5xl border  `}>
                           
                            <span>{item.logo}</span>

                        </li>
                    )
                })
            }


            </motion.div>
        </div>

    </div>
  )
}

export default Technologies