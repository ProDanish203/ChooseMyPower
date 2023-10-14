import { Heading } from '@/components/helpers'
import { getService, getServicesData } from '@/lib/actions/SEO/ServicesPage';
import Image from 'next/image'
import Link from 'next/link';


const Service = async ({params}: {params: {id:string}}) => {
    const {id} = params;
    const {data} = await getService(id); 
    const { title, image, para1, para2 } = data;
    const allServices = await getServicesData();

  return (
    <section className='sm:px-10 px-3 py-10 mt-5 max-w-[1400px] w-full mx-auto'>
    <Heading title='Services' center/>
    <h4 className='md:text-xl text-orange-600 font-semibold'>Services / {title}</h4>

    <div className='flex flex-row-reverse max-md:flex-col-reverse items-center justify-center flex-wrap gap-5 mt-2'
    >
        <div className='flex-1 relative max-w-[600px] w-full mx-auto flex items-center h-[450px]'>
            <Image src={image} alt={title} width={600} height={550}
            className='object-cover rounded-md'/>
        </div>

        <div className='flex-1 shadow-md sm:px-5 py-3 pb-5 rounded-md '>
            <h2 className='text-primary sm:text-3xl text-2xl font-semibold'>{title}</h2>
        
            <p className='text-gray-700 max-sm:text-sm mt-5'>{para1}</p>     
            <p className='text-gray-700 max-sm:text-sm mt-5'>{para2}</p>     
        </div>
    </div>

    <div className='mt-10'> 
        <h6 className='text-xl text-orange-600'>Browse for other services: </h6>

        <div className='bg-gray-100 mt-2 sm:px-4 px-2 py-4 max-w-[450px] rounded-md shadow-sm flex flex-col gap-4' >
            {allServices.data?.map((service, i) => {
                const delay = (i % 4 + 2 ) * 50;
                return (
                <Link href={`/services/${service._id}`} className='bg-gray-200 p-2 rounded-md hover:bg-primary hover:text-white flex items-center gap-2 hover:gap-3'
                key={i}
                data-aos="fade-up" data-aos-delay={`${delay}`} data-aos-duration="500"
                
                >
                    <i className='fas fa-angles-right'></i>
                    <p className='capitalize'>{service.title}</p>
                </Link>
                ) 
            } )}
            
        </div>

    </div>


    </section>
  )
}

export default Service