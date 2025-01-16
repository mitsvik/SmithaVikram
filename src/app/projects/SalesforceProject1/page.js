import React from 'react'
import DetailedProject from '@/components/Projects/DetailedProject'

const projectData = {
  githubRepo: "https://github.com/sampleuser/project3",
  live: "https://project3.com",
  images: [
    "https://imageplaceholder.net/600x400",
    "https://imageplaceholder.net/600x400",
  ],
  title: "Project 3",
  description: "Description for project 3.",
  keyFeatures: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
  ],
  technologies: [
    {
      name: "React",
      link: "https://reactjs.org/",
      icon: "/static/icon/React.png",
    },
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      icon: "/static/icon/Tailwind.png",
    },
  ],
}

const page = () => {
  
  return (
    <div>
      <div>
        <DetailedProject projectData={projectData} />
      </div>
      
    </div>
  )
}

export default page
