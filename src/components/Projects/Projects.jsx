import React from 'react'
import Skeleton from './Skeleton'

import projects from '@/content/projectsData'

const Projects = () => {
  return (
    <div className='mx-auto max-w-3xl xl:max-w-5xl px-4 xl:px-0 my-20 '>
        <div >
        <h2 className='text-5xl font-extrabold font-mono dark:text-title text-title tracking-tight my-5'>Projects</h2>
        <p className='md:w-[1000px] text-lg font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste veritatis porro fuga quis non iure corporis molestias, ratione delectus ipsum quaerat sint totam dolores at voluptate distinctio praesentium sed.</p>
        </div>
      
   

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10  mt-10'>
        {projects.map((project)=>(
             <Skeleton key={project.id} project={project} />

        ))}

    

    </div>   

 </div>
  )
}

export default Projects
