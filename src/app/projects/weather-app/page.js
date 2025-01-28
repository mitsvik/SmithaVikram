import React from 'react'
import DetailedProject from '@/components/Projects/DetailedProject'

const projectData = {
  githubRepo: "https://github.com/mitsvik/WeatherApp",
  live: "https://muhportfolio-dev-ed.my.site.com/weather-app",
  images: [
    "/static/WeatherApp/image1.png",
    "/static/WeatherApp/image2.png",
  ],
  title: "Weather App",
  description: "A user-friendly app that provides real-time weather updates for any city. It displays the current climate with visuals, temperature, location details, and a summary of how it feels, along with humidity and precipitation percentages.",
  
  keyFeatures: [
    "Search Functionality: Enter any city name to get instant weather updates",
    "Current Climate Display: Shows the weather condition with an appropriate image (e.g., sunny, cloudy, rainy)",
    "Temperature & Location: Displays the current temperature and city name.",
    "Weather Feels Description: A personalized note on how the weather feels (e.g., \"It feels warm and humid\").",
    "Climatic Percentages: Details such as humidity, wind speed, and precipitation percentage."

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
