import Image from 'next/image'
import { Heading, Subheading } from '../helpers'

interface Props{
  heading: string;
  para1: string;
  para2: string;
}


export const About = ({heading, para1, para2}: Props) => {
  return (
    <section className='sm:px-10 px-3 py-10 max-w-[1400px] w-full mx-auto'>
      <div className='flex flex-wrap max-lg:flex-col items-center justify-center gap-10'>

        <div className='flex-1'>

        <Subheading title='About Us'/>
        <Heading title={heading} direction='right'/>

        <p className='mt-5 text-gray-700 sm:text-lg'>{para1}</p>
        <br />
        <p className='text-gray-700 sm:text-lg'>{para2}</p>

        <div className='mt-4'>

        <Subheading title='What will you get?'/>

        <div className='flex items-center justify-around sm:gap-5 gap-2 mt-2 w-full'>  
            <div className='flex items-center gap-2 max-sm:text-sm w-full hover:text-bg bg-secondary  hover:bg-orange-600 rounded-md py-2 px-4'
            data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200"
            >
              <i className='fas fa-headphones text-lg'></i>
              <p>Excellent Support</p>
            </div>

            <div className='flex items-center gap-2 max-sm:text-sm w-full hover:text-bg bg-secondary  hover:bg-orange-600 rounded-md py-2 px-4'
            data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200"
            >
              <i className='fas fa-dollar text-lg'></i>
              <p>Guaranteed Savings</p>
            </div>
        </div>

        <div className='flex items-center justify-around sm:gap-5 gap-2 mt-2 w-full'>  
            <div className='flex items-center gap-2 max-sm:text-sm hover:text-bg w-full bg-secondary hover:bg-orange-600 rounded-md py-2 px-4'
            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200"
            >
              <i className='fas fa-gear text-lg'></i>
              <p>Customized Solutions</p>
            </div>

            <div className='flex items-center gap-2 max-sm:text-sm hover:text-bg w-full  bg-secondary hover:bg-orange-600 rounded-md py-2 px-4'
            data-aos="fade-up" data-aos-delay="250" data-aos-duration="1200"
            >
              <i className='fas fa-handshake text-lg'></i>
              <p>Trustable Experience</p>
            </div>
        </div>

        </div>

        </div>

        <div className='relative flex-1'
        data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200"
        >
          <Image src="/images/about-us.png" alt='about-us' width={500} height={400} 
          className='object-contain rounded-md'
          />
        </div>

      </div>

    </section>
  )
}
