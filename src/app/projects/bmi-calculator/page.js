import React from 'react'
import DetailedProject from '@/components/Projects/DetailedProject'

const projectData = {
  githubRepo: "https://github.com/mitsvik/BMICalculator",
  live: "https://muhportfolio-dev-ed.my.site.com/bmi-calculator",
  images: [
   "/static/BMI/Image1.jpg",
   "/static/BMI/Image3.png",

  ],
  title: "BMI",
  description: "A BMI (Body Mass Index) Calculator helps you determine if your weight is within a healthy range based on your height and weight.",
  
  keyFeatures: [
    "Simple Input Fields: Allows users to enter height (in cm) and weight (in kg) easily.",
    "Automatic Calculation: Instantly calculates the Body Mass Index (BMI) based on the entered values.",
    "Clear Results Display: Shows the calculated BMI value along with a corresponding health status.",
    "Health Insights: Provides guidance and tips for maintaining a healthy weight."
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
