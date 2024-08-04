import React from 'react'
import { CONTACT } from '../constants'
import {motion } from "framer-motion"

const Contacts = () => {
  return (
    <div className='border-b border-neutral-900 pb-20 my-20'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0,y:-10}}
        transition={{duration:1}}
        className='text-4xl tracking-tighter text-center '>Get in   <span className="text-neutral-500">Touch</span> </motion.h1>
       
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4 '>{CONTACT.phoneNo}</p>
            <a className='border-b' href="https://mail.google.com/mail/u/0/#inbox?compose=new">{CONTACT.email}</a>

        </motion.div>
    </div>
  )
}

export default Contacts