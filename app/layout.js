import "./globals.css";
import Topbar from "../components/TopBar"
import { Poppins } from "next/font/google";
import SideBar from "../components/SideBar";
import { ChartProvider } from "../app/context/ChartContext"

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  display: 'swap'
});

export const metadata = {
  title: "WhatBytes Assignment",
  description: "Developed using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <ChartProvider>
          <Topbar />
          <main className="flex ">
            <SideBar />
            {children}
          </main>
        </ChartProvider>
      </body>
    </html>
  );
}
