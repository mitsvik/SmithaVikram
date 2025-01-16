import React from "react";
import { Github } from "lucide-react";
import Link from "next/link";

const GithubButton = ({ link }) => {
  return (
    <Link href={link} target="_blank" className="border border-1 hover:border  dark:hover:border-title hover:border-[#57575787]
    dark:bg-transparent bg-Light  rounded-lg cursor-pointer font-mono flex justify-center items-center px-4 py-2 ">
    
        <Github size={20}/>
        <span className="text-sm md:text-md ps-2">GitHub</span>
    
    </Link>
  );
};

export default GithubButton;
