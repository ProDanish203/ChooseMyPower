"use client"
import { navLinks } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";

export const Header = () => {

  const [scrolled, setScrolled] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  const checkScroll = () => {
    window.scrollY >= 200 ? setScrolled(true) : setScrolled(false); 
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll)    

    return () => window.removeEventListener("resize", checkScroll)    
  }, [])

  return (
    <header className={`bg-primary sm:px-10 px-3 py-3 flex items-center justify-between w-screen fixed top-0 left-0 z-40 shadow-sm`}>
        <Link href="/" className='relative w-[200px] h-[40px]'>
          <Image src="https://res.cloudinary.com/dzxx9hlcr/image/upload/v1697314371/choosemypower/ucgd94tvged4esinbeeg.png" alt='choose-my-power' width={350} height={150} 
          className='object-contain absolute -top-5 left-0'
          data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200"
          />
        </Link>

        {/* Desktop nav */}
        <nav
        className='flex items-center justify-between gap-4 max-md:hidden'>
          {navLinks.map((link, i) => {
            const delay = (i % 4 + 2 ) * 50;
            return (
              <Link href={link.path} key={i} 
              className={`text-bg`}
              data-aos="fade-left" data-aos-delay={`${delay}`} data-aos-duration="1200"
              >
                {link.name}
              </Link>
            )
          } 
          )}
        </nav>

        <div className='md:hidden'
        data-aos="fade-left" data-aos-delay='200' data-aos-duration="1000"
        >
          <i className={`fas ${mobileNav ? 'fa-times': 'fa-bars'} text-2xl text-bg cursor-pointer`}
          onClick={() => setMobileNav(prev => !prev)}
          ></i>
        </div>
        {/* Mobile Nav */}
        {mobileNav && (
          <nav
          data-aos="fade-left" data-aos-delay='200' data-aos-duration="700"
          className='flex flex-col items-start rounded-md w-[300px] bg-primary px-5 py-3 absolute right-1 top-[110%] gap-4 md:hidden shadow-sm'>
          {navLinks.map((link, i) => (
            <Link href={link.path} key={i}
            className={`text-bg text-lg`}
            onClick={() => setMobileNav(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
          )}



    </header>
  )
}
