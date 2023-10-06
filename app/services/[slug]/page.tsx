import { Heading } from '@/components/helpers'
import { servicesData } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link';


const Service = ({params}: {params: {slug:string}}) => {
    const {slug} = params;

    const data = servicesData.filter(x => x.slug == slug)

  return (
    <section className='sm:px-10 px-3 py-10 mt-5 max-w-[1400px] w-full mx-auto'>
    <Heading title='Services' center/>
    <h4 className='md:text-xl text-orange-600 font-semibold'>Services / {slug}</h4>

    <div className='flex flex-row-reverse max-md:flex-col-reverse items-center justify-center flex-wrap gap-5 mt-2'
    >
        <div className='flex-1 relative max-w-[600px] w-full mx-auto flex items-center h-[450px]'>
            <Image src={data[0].image} alt={data[0].title} width={600} height={550}
            className='object-cover rounded-md'/>
        </div>

        <div className='flex-1 shadow-md sm:px-5 py-3 pb-5 rounded-md '>
            <h2 className='text-primary sm:text-3xl text-2xl font-semibold'>{data[0].title}</h2>
            {data[0].desc.map((text, i) => (
                <p className='text-gray-700 max-sm:text-sm mt-5' key={i}>{text}</p>     
            ))}
        </div>
    </div>

    <div className='mt-10'> 
        <h6 className='text-xl text-orange-600'>Browse for other services: </h6>

        <div className='bg-gray-300 mt-2 sm:px-4 px-2 py-4 max-w-[450px] rounded-md shadow-sm flex flex-col gap-4' >
            {servicesData.map((service, i) => (
            <Link href={`/services/${service.slug}`} className='bg-secondary p-2 rounded-md hover:bg-primary hover:text-white flex items-center gap-2 hover:gap-3'>
                <i className='fas fa-angles-right'></i>
                <p className='capitalize'>{service.slug.replace(/-/g, ' ')}</p>
            </Link>
            ))}
            
        </div>

    </div>


    </section>
  )
}

export default Service