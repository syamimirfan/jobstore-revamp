import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//set it to latin and the weight for the font
//call the poppins in the className for body to start use 
const poppins = Poppins({ subsets: ["latin"],
  weight: ['400', '700']
 });


export const metadata: Metadata = {
  title: "Jobstore  Malaysia  - Search Jobs in Malaysia | June 2024",
  description: "The technical test for Front-End Developer @ Jobstore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
