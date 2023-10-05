import Image from 'next/image'
import { Heading, Subheading } from '../helpers'

export const About = () => {
  return (
    <section className='sm:px-10 px-3 py-10 max-w-[1400px] w-full mx-auto'>
      <div className='flex flex-wrap max-lg:flex-col items-center justify-center gap-10'>

        <div className='flex-1'>

        <Subheading title='About Us'/>
        <Heading title='RELIABLE ENERGY BROKER AND CONSULTANT'/>

        <p className='mt-5 text-gray-700 sm:text-lg'>
        As a leading energy broker, we've helped our clients save money on electricity and gas bills. We help businesses, whether large or small, create energy plans for their commercial electricity and gas needs. We have the experience and expertise to serve customers across multiple states and commodities.
        </p>
        <br />
        <p className='text-gray-700 sm:text-lg'>
        At Choose My Power LLC, we compare energy suppliers and get the best rate for you. In addition, we strive to offer customers customized solutions to meet a broad range of their energy needs.
        </p>

        <div className='mt-4'>

        <Subheading title='What will you get?'/>

        <div className='flex items-center justify-around sm:gap-5 gap-2 mt-2 w-full'>  
            <div className='flex items-center gap-2 max-sm:text-sm w-full hover:text-bg bg-secondary  hover:bg-orange-600 rounded-md py-2 px-4'>
              <i className='fas fa-headphones text-lg'></i>
              <p>Excellent Support</p>
            </div>

            <div className='flex items-center gap-2 max-sm:text-sm w-full hover:text-bg bg-secondary  hover:bg-orange-600 rounded-md py-2 px-4'>
              <i className='fas fa-dollar text-lg'></i>
              <p>Guaranteed Savings</p>
            </div>
        </div>

        <div className='flex items-center justify-around sm:gap-5 gap-2 mt-2 w-full'>  
            <div className='flex items-center gap-2 max-sm:text-sm hover:text-bg w-full bg-secondary hover:bg-orange-600 rounded-md py-2 px-4'>
              <i className='fas fa-gear text-lg'></i>
              <p>Customized Solutions</p>
            </div>

            <div className='flex items-center gap-2 max-sm:text-sm hover:text-bg w-full  bg-secondary hover:bg-orange-600 rounded-md py-2 px-4'>
              <i className='fas fa-handshake text-lg'></i>
              <p>Trustable Experience</p>
            </div>
        </div>

        </div>

        </div>

        <div className='relative flex-1'>
          <Image src="/images/about-us.png" alt='about-us' width={500} height={400} 
          className='object-contain rounded-md'
          />
        </div>

      </div>

    </section>
  )
}
