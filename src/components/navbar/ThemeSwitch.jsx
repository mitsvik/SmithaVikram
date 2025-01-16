'use client'

import React, {useEffect, useState} from 'react';
import { useTheme } from 'next-themes';
import {Sun, Moon} from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
      setMounted(true);
  }, []);

  const isDarkMode = mounted && (theme === 'dark' || resolvedTheme === 'dark');

  return (
   <motion.div 
   onClick={()=> setTheme(isDarkMode?'light':'dark')}
   aria-label="Toggle Theme"
   type="button"
   className="mx-1 flex justify-center items-center h-8 w-8 rounded p-1"
   whileTap={{scale:0.7, rotate:360, transition:{duration:0.2}}}
   whileHover={{scale:1.2}}
   
   
   
   >
    {isDarkMode ? <Sun size={16}/> : <Moon size={16}/>}

   </motion.div>
  )
}

export default ThemeSwitch
