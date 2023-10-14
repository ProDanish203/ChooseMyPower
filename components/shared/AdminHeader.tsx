"use client"
import { adminLinks } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";

export const AdminHeader = () => {

  const [mobileNav, setMobileNav] = useState(false)
  const [dd, setDD] = useState(false)

  return (
    <header className={`bg-primary sm:px-10 px-3 py-3 flex items-center justify-between w-screen fixed top-0 left-0 z-40 shadow-sm`}>
        <Link href="/admin" className='relative w-[200px] h-[40px]'>
          <Image src="/images/logo.png" alt='choose-my-power' width={350} height={150} 
          className='object-contain absolute -top-5 left-0'
          data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200"
          />
        </Link>

        {/* Desktop nav */}
        <nav
        className='flex items-center justify-between gap-4 max-md:hidden'>

          <div className='relative'>
            <div className='text-white text-lg cursor-pointer'
            onClick={() => setDD(prev => !prev)}
            >Pages <i className='fas fa-caret-down'></i></div>
            {dd && (
            <div className='text-white absolute flex flex-col gap-2 top-[110%] left-0 w-[200px] py-3 px-3 bg-blackAccent rounded-md'
            data-aos="fade-up" data-aos-duration="700"
            >
              <Link href='/admin/home' 
              onClick={() => setDD(false)}
              >
                Home
              </Link>
              <Link href='/admin/solar'
              onClick={() => setDD(false)}
              >
                Solar
              </Link>
              <Link href='/admin/services'
              onClick={() => setDD(false)}
              >
                Services
              </Link>
            </div>
            )}
            
          </div>

          {adminLinks.map((link, i) => {
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
          className='flex flex-col items-start rounded-md w-[300px] white-bg px-5 py-3 absolute right-1 top-[110%] gap-4 md:hidden shadow-sm'>

          <div className='relative'>
            <div className='text-white text-lg cursor-pointer'
            onClick={() => setDD(prev => !prev)}
            >Pages <i className='fas fa-caret-down'></i></div>
            {dd && (
            <div className='text-white  flex flex-col gap-2 w-[200px] py-3 px-3 rounded-md'
            data-aos="fade-left" data-aos-duration="700"
            >
              <Link href='/admin/home' 
              onClick={() => setDD(false)}
              >
                Home
              </Link>
              <Link href='/admin/solar'
              onClick={() => setDD(false)}
              >
                Solar
              </Link>
              <Link href='/admin/services'
              onClick={() => setDD(false)}
              >
                Services
              </Link>
            </div>
            )}
            
          </div>

          {adminLinks.map((link, i) => (
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
