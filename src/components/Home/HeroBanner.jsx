"use client";
import React from "react";
import siteMetadata from "@/content/siteMetaData";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { MoveDown } from "lucide-react"

const HeroBanner = () => {
    const variants = {
        hidden: { opacity: 0, x: -200 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 0 },
      };
  return (
    <div className="relative flex justify-center items-center md:h-[calc(100vh-98px)] md:max-w-4xl mx-auto">
      <motion.main
       variants={variants}
       data-scroll
       
     className="mb-auto w-full"
       initial="hidden"
       animate="enter"
       transition={{ duration: 0.5, ease: 'easeInOut' }}
      
      
      
      >
        <div className="w-full flex items-center flex-col space-y-7 absolute top-[80px] left-1/2 transform -translate-x-1/2">
         <Image src={siteMetadata.profile} width={200} height={200} alt={siteMetadata.author} className="rounded-full"/>
          <div className="text-center space-x-5 mx-2 "> 
            {/* text below the image */}
            <div className="mb-10 space-y-3">
              <h1 className="text-3xl md:text-5xl font-semibold font-mono">Hi, I&#39;m {siteMetadata.author} </h1>
              <p className="text-lg md:text-xl font-semibold font-mono">{siteMetadata.position}</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold font-mono">
                <Typewriter
                words={["Crafting Scalable, Robust Solutions in the Salesforce Ecosystem"]}
                loop={1}
                cursor            
                cursorStyle='.'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}          
                />
                
            </h3>
          </div>
        </div>
      </motion.main>

      <div className="absolute   md:bottom-8 move-down-animation ">
        <div className="flex flex-col cursor-pointer  items-center justify-center">
        <a href="#projects"><MoveDown size={20} /></a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
