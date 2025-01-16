import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import ThemeProvider from "@/Provider/ThemeProvider"; 
import Footer from "@/components/Footer/Footer";





export const metadata = {
  title: "Smitha | Portfolio",
  description: "Developed By Smitha.",
};

export default function RootLayout({ children }) {
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