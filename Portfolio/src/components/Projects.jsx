import React, { lazy } from 'react'
import {PROJECTS} from "../constants"
import {motion} from "framer-motion"

const Projects = () => {

  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='text-center my-20 text-4xl '>Projects</h2>
        <div>
         {
            PROJECTS.map((project,index)=>(
                <div className='mb-8 gap-4 flex flex-wrap justify-center md:justify-center lg:justify-center' key={index} >
                    <motion.div  whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}>
                        

                    <img width={250} height= {250} className=' items-center rounded-2xl' src={project.image} alt={project.title} />
                    </motion.div>
                    <motion.div 
                     whileInView={{opacity:1, x:0}}
                     initial={{opacity:0,x:100}}
                     transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4 md:text-center lg:text-start'>
                    <h6 className='mb-2 font-semibold  '>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>
                        {project.description}
                        </p>
                       <a className='text-blue-600 ' href={project.link}>Link</a>
                        
                        {
                          project.technologies.map((tech,index)=>(
                            <span key={index} className='px-2 py-1  text-purple-900 bg-neutral-900 ml-2 text-sm font-medium rounded text-wrap '>{tech}</span>
                          ))  
                        }
                    

                    </motion.div>
                    </div>
            ))
         }

        </div>
        </div>
  )
}

export default Projects