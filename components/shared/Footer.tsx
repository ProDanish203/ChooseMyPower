import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <section >
      <footer>

      </footer>

      <div className='bg-primary text-center text-bg sm:text-lg py-3'>
        <p>
          
          All rights reserved by <span className='text-secondary'>Choose My Power LLC </span>
          | Designed By  
          <Link href="https://danish-siddiqui.vercel.com" target='_blank' className='text-secondary'>
            <span> Danish Siddiqui</span>
          </Link>
        </p>
      </div>
    </section>
  )
}
