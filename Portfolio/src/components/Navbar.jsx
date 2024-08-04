import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

import React from 'react'

const Navbar = () => {
  const socials= [
    {
      id:1,
      icon:<FaLinkedin/>,
      link:"https://www.linkedin.com/in/abhishek-rajbhar-6a308b226/",
    },
    {
      id:2,
      icon:<FaGithub/>,
      link:"https://github.com/Abhiii-shek",
    },
    {
      id:3,
      icon: <FaSquareXTwitter/>,
      link:"https://twitter.com",
    },
    {
      id:4,
      icon:<FaInstagram/>,
      link:"https://instagram.com",
    },
  ]
  const tailwindColors=["text-blue-500","text-green-500","text-gray-300" ,"text-pink-700"]
  return (
   
   <>
   <nav className='border-b border-neutral-900 mb-20 flex   py-6'>
    <div className='flex flex-shrink-0 item-center'>
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <h1 className="text-6xl font-light">Ar</h1>

    </div>

<div className=" flex  gap-4 pl-[30%] md:pl-[70%] lg:pl-[80%] ">


{
  socials.map((item,index)=>{
    const colors=tailwindColors[index %  tailwindColors.length];
    return(
      <li key={index.id} className={`${colors} flex text-3xl `}>
        <a href={item.link}>{item.icon}</a>
      </li>
    )
  })
}

    </div>
    {/* <div className="text-white text-2xl flex gap-5 ">
        <FaLinkedin href="https://www.linkedin.com/in/abhishek-rajbhar-6a308b226/"/>
        <FaGithub href="https://github.com/Abhiii-shek"/>
        <FaSquareXTwitter href="https://twitter.com"/>
        <FaInstagram href="https://instagram.com"/>
    </div> */}

   </nav>
   </>
  )
}

export default Navbar