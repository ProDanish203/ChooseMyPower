import { navLinks, servicesData } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <section>
      <footer className='sm:px-10 relative px-3 py-5 sm:pb-20 bg-footer bg-center bg-no-repeat bg-cover w-full'>
      <div className="grid-5 max-w-[1500px] mx-auto w-full">

      <div>
          <div className='relative'>
              <Image src='/images/logo.png' alt="logo" width={250} height={200} className='object-cover' />
          </div>
          <p className='text-bg max-sm:text-sm'>
          As a leading energy broker, we've helped our clients save money on electricity and gas bills. We help businesses, whether large or small, create energy plans for their commercial electricity and gas needs.
          </p>

          <div className='flex items-center justify-start flex-wrap gap-2 mt-4'>
            <div className='bg-orange-600 text-white rounded-full w-[30px] h-[30px] flex items-center justify-center'>
              <i className='fab fa-facebook-f'></i>
            </div>

            <div className='bg-orange-600 text-white rounded-full w-[30px] h-[30px] flex items-center justify-center'>
              <i className='fab fa-linkedin'></i>
            </div>

            <div className='bg-orange-600 text-white rounded-full w-[30px] h-[30px] flex items-center justify-center'>
              <i className='fab fa-pinterest'></i>
            </div>

            <div className='bg-orange-600 text-white rounded-full w-[30px] h-[30px] flex items-center justify-center'>
              <i className='fab fa-instagram'></i>
            </div>
          </div>
      </div>

      <div>
          <h4 className="text-2xl font-semibold footer-heading text-bg">Quick Links</h4>

          <div>
          {navLinks.map((link, i) => (
            <Link href={link.path} className="footer-list-item gap-2 hover:gap-3" key={i}>
              <i className='fas fa-angles-right text-orange-600'></i>
              <span className='text-white'>{link.name}</span>
            </Link>
          ))}
          </div>

      </div>

      <div>
        <h4 className="text-2xl font-semibold text-bg">Services</h4>
        <div>
        {servicesData.map((service, i) => (
          <Link href={`/services/${service.slug}`} className="footer-list-item gap-2 hover:gap-3" key={i}>
            <i className='fas fa-angles-right text-orange-600'></i>
            <span className='text-white capitalize'>{service.slug}</span>
          </Link>
        ))}
        </div>

      </div>

      <div>
          <div className="text-2xl font-semibold text-bg ">           
            Contact
          </div>
          <ul className="mt-5 flex flex-col justify-start gap-4">

              <li>
                <div className="flex text-lg items-center gap-2 text-bg font-semibold">
                  <i className='fas fa-phone'></i>
                  <span className=''>Phone:</span>
                </div>
                <Link href="tel:(832) 509-1997" className='text-gray-300 text-lg font-semibold ml-4'>
                  (832) 509-1997 
                </Link>
              </li>

              <li>
                <div className="flex text-lg items-center gap-2 text-bg font-semibold">
                  <i className='fas fa-envelope'></i>
                  <span className=''>Mail:</span>
                </div>
                <Link href="mailto:choosemypower@outlook.com " className='text-gray-300 text-lg font-semibold ml-4'>
                choosemypower@outlook.com 
                </Link>
              </li>

              <li>
                <div className="flex text-lg items-center gap-2 text-bg font-semibold">
                  <i className='fas fa-location-dot'></i>
                  <span className=''>Address:</span>
                </div>
                <address className='text-gray-300 text-lg font-semibold ml-4'>
                Houston, Texas
                </address>
              </li>

          </ul>
      </div>

    </div>
  </footer>

  <div className='bg-primary text-center text-bg max-sm:text-sm py-3'>
    <p>          
    All rights reserved by <span className='text-secondary'>Choose My Power LLC </span>
    | Designed By  
    <Link href="https://danish-siddiqui.vercel.app" target='_blank' className='text-secondary'>
      <span> Danish Siddiqui</span>
    </Link>
    </p>
  </div>
</section>
  )
}
