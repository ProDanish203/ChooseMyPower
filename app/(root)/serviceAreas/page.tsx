import { ZipCode } from '@/components/forms'

const ServiceAreas = () => {
  return (
    <section>
    <div className='bg-primary sm:px-10 px-3 py-10'>
        <div className='min-h-[50vh] max-w-[1400px] w-full mx-auto flex max-lg:flex-col flex-wrap items-center justify-between gap-10'>

            <div className='flex-1'>
                <h2 className='max-lg:text-center text-bg text-5xl max-sm:text-4xl font-extrabold mb-3'
                data-aos="fade-up" data-aos-duration="1000"
                >
                    Our Sevice Areas
                </h2>

                <h4 className='max-lg:text-center text-bg font-medium text-xl max-sm:text-lg'
                data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000"
                >
                    Find your desireable service area and compare electricity prices easily. 
                </h4>
            </div>

            <div className='mx-auto w-full max-w-[460px]'>
                <ZipCode/>
            </div>
        </div>

    </div>

    <div className='max-w-[1500px] mx-auto w-full sm:px-10 px-3 py-10'>
        <h3 className='text-text text-3xl font-medium'>Find power companies in Texas</h3>

        <p className='mt-4 text-gray-700 md:text-[17px]'>
        At Choose My Power, building relationships with trusted electricity providers lets us better serve our customers. Our marketplace is free to use and only shows energy rates and plans from power companies that have proven to be reputable and reliable.
        </p>

        <p className='mt-4 text-gray-700 md:text-[17px]'>
        On our marketplace, you wont find providers with a history of dishonest business practices or misleading terms. We work with top-notch power companies in Texas to ensure you receive the service you pay for and help you find lower electric rates. 
        </p>
    </div>

    </section>
  )
}

export default ServiceAreas