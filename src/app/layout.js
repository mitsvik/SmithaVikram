'use client'
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import ThemeProvider from "@/Provider/ThemeProvider"; 
import Footer from "@/components/Footer/Footer";


import React, {useState, useEffect} from "react";

export default function RootLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Navbar />

        
         {children}
        <Footer />
         
        </ThemeProvider>

      </body>

    </html>
  );
}