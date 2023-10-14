import { ZipCode } from '../forms'

interface Props{
  heading: string;
  tagLine: string;
}

export const Hero = ({ heading, tagLine}: Props) => {

  return (
    <section className='sm:px-10 px-3 pb-10 flex flex-col items-center justify-center bg-heroBanner bg-no-repeat bg-center bg-cover hero-section min-h-[100vh]'>
      
      <h1 
      className='text-bg text-7xl max-md:text-4xl mb-5 font-extrabold md:max-w-[90%] text-center'
      data-aos="fade-up" data-aos-duration="1200"
      >{heading}</h1>
      <h3 className='text-bg text-2xl max-md:text-lg'
      data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
      >{tagLine}</h3>

      <ZipCode/>

    </section>
  )
}
