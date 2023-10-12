import { Heading } from '@/components/helpers';
import { solarData, solarSubData } from '@/utils/data';
import Image from 'next/image';
import React from 'react'

const Solar = () => {
  return (
    <section className='sm:px-10 px-3 py-10 mt-5 max-w-[1400px] w-full mx-auto'>
        
    <Heading title='Solar' center/>

    <div className='flex flex-row-reverse max-md:flex-col items-center justify-center flex-wrap gap-5 '>
        <div className='flex-1 relative max-w-[500px] w-full mx-auto flex items-center h-[450px]'
        data-aos="fade-left" data-aos-duration="1000"
        >
            <Image src={solarData.image} alt={solarData.title} width={500} height={450}
            className='object-cover rounded-md'/>
        </div>

        <div className='flex-1'
        data-aos="fade-right" data-aos-duration="1000"
        >
            <h2 className='text-primary sm:text-3xl text-2xl font-semibold'>{solarData.title}</h2>
            {solarData.content.map((text, i) => (
                <p className='text-gray-700 max-sm:text-sm mt-5' key={i}>{text}</p>     
            ))}
        </div>
    </div>

    <div className='flex max-md:flex-col items-center justify-center flex-wrap gap-5 '
    >
        <div className='flex-1 relative max-w-[500px] w-full mx-auto flex items-center h-[450px]'
        data-aos="fade-right" data-aos-duration="1000"
        >
            <Image src={solarSubData.image} alt={solarData.title} width={500} height={450}
            className='object-cover rounded-md'/>
        </div>

        <div className='flex-1'>
            <h2 className='text-primary text-2xl font-semibold'>{solarSubData.heading1}</h2>
            <p className='text-gray-700 max-sm:text-sm mt-5'>{solarSubData.content1}</p>     

            <h2 className='text-primary text-2xl font-semibold mt-5'>{solarSubData.heading2}</h2>
            <p className='text-gray-700 max-sm:text-sm mt-2'>{solarSubData.content2}</p>
        </div>
    </div>


    </section>
  )
}

export default Solar;