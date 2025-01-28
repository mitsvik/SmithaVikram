import React from "react";
import LiveButton from "./LiveButton";
import GithubButton from "./GithubButton";
import Link from 'next/link'
import { CircleDashed } from "lucide-react"

const DetailedProject = ({ projectData }) => {
  return (
    <div className="mx-auto max-w-3xl xl:max-w-5xl px-4 mt-20 xl:px-0">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-between'>">
        <div>
          <h1 className="text-5xl font-extrabold font-mono dark:text-title text-title mt-5">{projectData.title}</h1>
        </div>
        <div className="flex md:justify-end gap-5 mt-5">
          {projectData.live ? (
            <LiveButton link={projectData.live} />
          ) : (
            <div></div>
          )}
          {projectData.githubRepo ? (
            <GithubButton link={projectData.githubRepo} />
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="my-5">
        <div className="flex flex-col justify-center" >
          {projectData.images.map((image, index) => (
            <img src={image} alt="project-screenshot" 
            className='rounded-xl border-2 border-[#57575787] mt-10'
            key={index} />
          ))}
        </div>
        <div className="mt-10">
          <p className="mt-5 text-2xl font-playfair leading-relaxed"> {projectData.description}</p>
          <div>
            <h1 className="font-bold text-md md:text-lg lg:text-xl font-mono text-title dark:text-title mt-10">
           
              Key Features
            </h1>
            <ul className="space-y-3 mt-5 font-mono">
              {projectData.keyFeatures.map((point, index) => (
                <li className='flex items-center gap-3'
                key={index}>
                  <div className='w-5'>
                      <CircleDashed size={15} style={{ color: '#004AAD' }} />
                    </div>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="dark:bg-[#2020238f] bg-[#cfe4ff] border border-1 rounded-md 
           font-mono border-[#57575787] p-5 flex flex-col md:flex-row justify-center items-center mt-10 ">
            <div>
              <h1 className="font-bold text-sm">Built with:</h1>
            </div>
            <div className='flex space-x-2 ms-2'>
              {projectData.technologies.map((tech, index) => (
                <Link href={tech.link} target="blank" key={index}>
                  <span className="text-[12px] flex items-center font-semibold">
                    <img src={tech.icon} alt={tech.name} width={18} height={18}/>
                    <span>{tech.name}</span>
                   
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProject;
