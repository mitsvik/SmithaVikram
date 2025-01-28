import React from 'react'
import DetailedProject from '@/components/Projects/DetailedProject'

const projectData = {
  githubRepo: "https://github.com/mitsvik/AlarmClock",
  live: "https://muhportfolio-dev-ed.my.site.com/alarm-clock",
  images: [
   "/static/Alarm/Image1.png"
  ],
  title: "Alarm Clock App",
  description: "An Alarm Clock displays the current time and allows you to set or clear alarms with customizable hours, minutes, and AM/PM options.",
  
  keyFeatures: [
    "Real-Time Clock: Displays the current time in real-time (e.g., 07:56:16 AM).",
    "Custom Alarm Settings: Allows users to set hours, minutes, and AM/PM for the alarm.",
    "Set Alarm Option: Provides a button to activate the alarm.",
    "Clear Alarm Functionality: Includes an option to reset or cancel alarms easily."
],


technologies: [
  {
    name: "Salesforce",
    link: "https://developer.salesforce.com/developer-centers/lightning-web-components",
    icon: "/static/icon/salesforce.png"
  },

]
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
