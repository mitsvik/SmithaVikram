'use client'
import React from 'react'
import projects from '../../content/projectsData'
import {motion} from 'framer-motion'



const Projects = () => {
  return (
    <div  className='py-16  px-6 md:px-12 lg:px-24' id='projects'> 
      {/* Project Title */}
      <div className='mb-10 space-y-5'> 
        <h1 className='text-3xl md:text-5xl font-extrabold font-mono text-center dark:text-title text-title tracking-tight'>Projects</h1>
        <p className='text-lg text-center font-mono'>A selection of my recent projects, showcasing a variety of skills and expertise.</p>

      </div>
      {/* Project Images */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       
      {projects.slice(0, 3).map((project) => (
                    <motion.div key={project.id}
                    
                    className='relative group rounded-lg overflow-hidden shadow-xl duration-300 '
                    whileHover={{ scale: 1.05 }}>
                        <img src={project.imgSrc}
                            alt={project.title}
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />

        <div className="absolute bottom-0
                        bg-gradient-to-t from-black/70 to-transparent 
                        h-full 
                        backdrop-blur-sm 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity 
                        duration-500 
                        flex flex-col items-start justify-end 
                        text-white p-6">
                            <h3 className='text-lg font-semibold font-mono text-title'>{project.title}</h3>
                            <p className='text-gray-200 mb-2'>{project.description}</p>
                            <a href={project.route}   className="flex items-center justify-center">View Project</a>
                        </div>
                    </motion.div>
                ))}

        
      </div>
      {/* Project Button */}
      <div className="text-center mt-20">
        <a href='/projects' 
        className='px-8 py-3 bg-title text-white font-semibold font-mono rounded-lg hover:bg=blue-700 transition'>View All Projects</a>
        
      </div>
     
    </div>
  )
}

export default Projects
