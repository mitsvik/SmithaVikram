"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Skeleton = ({project}) => {
    const router = useRouter();

    const handleClick =()=>{
        router.push(project.route);
    }


    return (
        <>
       
        <div onClick={handleClick} className="border border-1 border-transparent hover:border hover:border-1 hover:border-[#57575787]
        flex flex-col justify-start items-start gap-5 dark:bg-[#2020238f] bg-[#cfe4ff] rounded-lg cursor-pointer py-3 px-5">
            <p className='font-bold capitalize font-mono tracking-wide'>{project.title}</p>
            <p className="text-gray-600 dark:text-gray-200 w-[250px] whitespace-nowrap overflow-hidden overflow-ellipsis">{project.description}</p>
        </div>
       
        </>
    )
}

export default Skeleton;
