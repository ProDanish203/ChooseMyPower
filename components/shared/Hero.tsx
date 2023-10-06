import { ZipCode } from '../forms'

export const Hero = () => {

  return (
    <section className='sm:px-10 px-3 pb-10 flex flex-col items-center justify-center bg-heroBanner bg-no-repeat bg-center bg-cover hero-section min-h-[100vh]'>
      
      <h1 
      className='text-bg text-7xl max-md:text-4xl mb-5 font-bold md:max-w-[90%] md:text-center'
      data-aos="fade-up" data-aos-duration="1200"
      >Reliable Energy Broker And Consultant</h1>
      <h3 className='text-bg text-2xl max-md:text-sm'
      data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
      >We work closely with you to know your business and ensure energy decisions are not made in a vacuum.</h3>

      <ZipCode/>

    </section>
  )
}
