"use client"
import { navLinks } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";

export const Header = () => {

  const [scrolled, setScrolled] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  const checkScroll = () => {
    window.scrollY >= 150 ? setScrolled(true) : setScrolled(false); 
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll)    

    return () => window.removeEventListener("resize", checkScroll)    
  }, [])

  return (
    <header className={`${scrolled ? "bg-secondary": "bg-transparent"} sm:px-10 px-3 py-3 flex items-center justify-between w-screen fixed top-0 left-0 z-40`}>
        <div className='relative w-[200px] h-[40px]'>
          <Image src="/images/logo.png" alt='choose-my-power' width={350} height={150} 
          className='object-contain absolute -top-5 left-0'
          />
        </div>

        {/* Desktop nav */}
        <nav className='flex items-center justify-between gap-4 max-md:hidden'>
          {navLinks.map((link, i) => (
            <Link href={link.path} 
            className={`${scrolled ? "text-primary": "text-bg"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className='md:hidden'>
          <i className={`fas fa-bars text-2xl ${scrolled ? "text-primary": "text-bg"} cursor-pointer`}
          onClick={() => setMobileNav(prev => !prev)}
          ></i>
        </div>
        {/* Mobile Nav */}


    </header>
  )
}
