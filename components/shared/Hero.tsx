"use client"
import { FormEvent, useState } from 'react'
import { ZipCode } from '../forms'
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

export const Hero = () => {

  const [zip, setzip] = useState('')
  const [type, setType] = useState('residential')

  const router = useRouter();

  const handleZipCode = async (e: FormEvent) => {
    e.preventDefault();

    if(!zip || zip.match(/^[0-9]+$/) == null || zip.length != 5) 
      return toast.error("Please provide a valid zip code"); 

    router.push(`/compareRates/${zip}?type=${type}`)    
  }

  return (
    <section className='sm:px-10 px-3 pb-10 flex flex-col items-center justify-center bg-heroBanner bg-no-repeat bg-center bg-cover hero-section pt-20 min-h-[100vh]'>
      
      <h1 className='text-bg text-7xl max-md:text-4xl mb-5 font-bold md:max-w-[90%] md:text-center'>Reliable Energy Broker And Consultant</h1>
      <h3 className='text-bg text-2xl max-md:text-sm'>We work closely with you to know your business and ensure energy decisions are not made in a vacuum.</h3>

      <form onSubmit={handleZipCode} className='mt-10'>
        <ZipCode zip={zip} setZip={setzip} type={type} setType={setType}/>
      </form>
    </section>
  )
}
