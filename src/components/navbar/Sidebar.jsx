"use client";
import headerNavLinks from "@/content/headerNavLinks";
import React , {useState, useEffect}from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { AnimatePresence, motion } from 'framer-motion';

const Sidebar = () => {
  const pathName = usePathname();
  const [navShow, setNavShow] = useState(false);

  const variants = {
    enter:{opacity:1, x:0, transition:{ease:"easeOut", duration:0.5}},
    exit:{opacity:0, x:'100vw', transition:{ease:"easeIn", duration:0.5}}
  }
  useEffect(() => {
    if(navShow){
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
  }, [navShow]);



  return (
    <div className="md:hidden">
      <button
      onClick={()=>setNavShow(!navShow)}
        className="flex items-center h-6 w-6 mx-2"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <AnimatePresence>
        

      <motion.div
      animate = {navShow ?'enter':'exit'}
      variants={variants}
      initial='exit'
      exit='exit'
      
      
      className="fixed inset-0 z-20 w-full h-full bg-white dark:bg-black">
        <header className="flex justify-end py-5 px-4">
          <button className="h-6 w-6 rounded"
          onClick={()=>setNavShow(!navShow)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
              
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </header>
        <nav className="fixed mt-8 h-full ">
          <div className="px-12 py-4 "  onClick={() => setNavShow(!navShow)}>
            <Link
              href="/"
              className={classNames(
                "font-mono horizontal-underline text-base pb-1 text-gray-900 dark:text-gray-100" ,
                { "horizontal-underline-active text-title": pathName === "/" }
              )}
            >
              Home
            </Link>
          </div>
          {headerNavLinks.map(({ title, href }) => {
            const active = pathName?.includes(href);
            return (
              <div key={title} className="px-12 py-4  text-gray-900 dark:text-gray-100">
                <Link
                  href={href}
                  onClick={()=>setNavShow(!navShow)}
                  className={classNames(
                    "font-mono horizontal-underline text-base pb-1",
                    { "horizontal-underline-active text-title": active }
                  )}
                  aria-label={title}
                >
                  {title}
                </Link>
              </div>
            );
          })}
        </nav>
      </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
