'use client'

import Link from 'next/link'
import siteMetadata from '@/content/siteMetaData'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'



const Footer = () => {

    return (
    
    <div className='py-10 px-5'> 
        <div className='md:max-w-3xl xl:max-w-5xl mx-auto md:flex md:flex-row md:justify-between flex flex-col items-center text-sm md:text-base space-y-2 '>
            {/* lhs links */}
            <ul className='flex space-x-2 font-mono'>
            <li>{`© ${new Date().getFullYear()}`}</li>
                <li>{`•`}</li>
                <li>
                    <Link href='/'>
                    {siteMetadata.author}
                    </Link>
                </li>
                
            </ul>
               {/* rhs links */}
               <ul className='flex cursor-pointer items-center space-x-5'>
                <li>
                    <a href='/'
                    target="_blank"
                    rel="nonreferrer"
                    aria-label="linkedin">
                        <FaLinkedinIn className='sm:text-2xl' />

                    </a>

                </li>
                <li>
                    <a href='/'
                    target="_blank"
                    rel="nonreferrer"
                    aria-label="github" >
                        <FaGithub className="sm:text-2xl"  />

                    </a>

                </li>
               </ul>




        </div>
    
    </div>
    
);
}
export default Footer;