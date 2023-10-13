import { Heading } from '@/components/helpers';
import { getSolarSeo } from '@/lib/actions/SEO/SolarPage';
import Image from 'next/image';
import React from 'react'
import { toast } from 'react-toastify';

const Solar = async () => {

    const {data, success} = await getSolarSeo("solar")
    const { _id, heading, para1, para2, subHeading1, subHeading2, subPara1, subPara2} = data;
  
    if(!success) return toast.error("Something went wrong!");

  return (
    <section className='sm:px-10 px-3 py-10 mt-5 max-w-[1400px] w-full mx-auto'>
        
    <Heading title='Solar' center/>

    <div className='flex flex-row-reverse max-md:flex-col items-center justify-center flex-wrap gap-5 '>
        <div className='flex-1 relative max-w-[500px] w-full mx-auto flex items-center h-[450px]'
        data-aos="fade-left" data-aos-duration="1000"
        >
            <Image src='/images/about-us.png' alt={heading} width={500} height={450}
            className='object-cover rounded-md'/>
        </div>

        <div className='flex-1'
        data-aos="fade-right" data-aos-duration="1000"
        >
            <h2 className='text-primary sm:text-3xl text-2xl font-semibold'>{heading}</h2>
                <p className='text-gray-700 max-sm:text-sm mt-5'>{para1}</p>     
                <p className='text-gray-700 max-sm:text-sm mt-5'>{para2}</p>     
            
        </div>
    </div>

    <div className='flex max-md:flex-col items-center justify-center flex-wrap gap-5 '
    >
        <div className='flex-1 relative max-w-[500px] w-full mx-auto flex items-center h-[450px]'
        data-aos="fade-right" data-aos-duration="1000"
        >
            <Image src='/images/about-us.png' alt={heading} width={500} height={450}
            className='object-cover rounded-md'/>
        </div>

        <div className='flex-1'
        data-aos="fade-up" data-aos-duration="1000"
        >
            <h2 className='text-primary text-2xl font-semibold'>{subHeading1}</h2>
            <p className='text-gray-700 max-sm:text-sm mt-5'>{subPara1}</p>     

            <h2 className='text-primary text-2xl font-semibold mt-5'>{subHeading2}</h2>
            <p className='text-gray-700 max-sm:text-sm mt-2'>{subPara2}</p>
        </div>
    </div>


    </section>
  )
}

export default Solar;