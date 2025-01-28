import React from 'react'
import DetailedProject from '@/components/Projects/DetailedProject'

const projectData = {
  githubRepo: "https://github.com/mitsvik/currency-converter",
  live: "https://muhportfolio-dev-ed.my.site.com/currency-converter",
  images: [
    "/static/Currency/Image1.jpg"
  
  ],
  title: "Currency Convertor",
  description: "A Currency Converter lets users input an amount, select currencies, and quickly calculate conversions with a swap feature for easy reversal.",
  
  keyFeatures: [
    "Amount Input Field: Includes a user-friendly input field to enter the amount for conversion.",
    "First Currency Selection: Provides a dropdown menu to select the base currency.",
    "Target Currency Selection: Offers a second dropdown menu to choose the target currency.",
    "Swap Currency Button: Features a button to quickly reverse the selected base and target currencies.",
    "Convert Button: Includes a dedicated button to calculate and display the converted value.",
    "Clear Output Display: Shows the converted amount clearly for easy understanding."
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
