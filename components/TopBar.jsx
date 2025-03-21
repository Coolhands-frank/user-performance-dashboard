"use client"
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import MobileViewDrawer from "../components/MobileViewDrawer"
import Image from 'next/image';

const Topbar = () => {
  const [isMobileDrawer, setIsMobileDrawer] = useState(false)

  const handleMobileDrawerToggle = () => {
    setIsMobileDrawer(!isMobileDrawer);
  };

    return (
      <nav className="flex justify-between items-center text-black p-6 border-gray-300 border-b">
        <div>
          <h1 className="text-3xl font-semibold">WhatBytes</h1>
        </div>

        <div className="flex items-center p-2 md:border md:border-gray-300 md:rounded-lg">
            <div className="relative h-6 w-6 md:h-6 md:w-6 mr-2 rounded-full">
              <Image 
                src="/my-image.jpg" 
                alt="profile image"
                fill 
                className="object-cover rounded-full"
              />
            </div>
            <p className="hidden md:block">coolhands</p>
            <Bars3Icon className="md:hidden w-8 h-8" onClick={handleMobileDrawerToggle}/>
        </div>

        <MobileViewDrawer isOpen={isMobileDrawer} onClose={handleMobileDrawerToggle} />
      </nav>
    );
  };
  
  export default Topbar;