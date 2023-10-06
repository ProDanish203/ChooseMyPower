"use client"
import { Select } from "@radix-ui/themes";
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

export const ZipCode = () => {

  const [zip, setZip] = useState('')
  const [type, setType] = useState('residential')

  const router = useRouter();

  const handleZipCode = async (e: FormEvent) => {
    e.preventDefault();

    if(!zip || zip.match(/^[0-9]+$/) == null || zip.length != 5) 
      return toast.error("Please provide a valid zip code"); 

    router.push(`/compareRates/${zip}?type=${type}`)    
  }

  const handleSelectChange = (e:any) => {
    setType(e);
  }

  return ( 
  <form onSubmit={handleZipCode} className='mt-10'
  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"
  >

    <div className='flex items-center max-md:flex-col max-md:justify-center gap-2 bg-secondary md:py-1 py-4 px-4 md:pr-1 relative rounded-md'>

    <input type="text" 
    className='bg-transparent max-md:w-full px-2 py-2.5 outline-none text-lg'
    placeholder="ZIP CODE"
    minLength={5}
    maxLength={5}
    value={zip}
    onChange={(e) => setZip(e.target.value)}
    />

    <div className="max-md:w-full">
    <Select.Root defaultValue={type} size="3" name="type"
    value={type}
    onValueChange={handleSelectChange}
    >
      <Select.Trigger variant="soft" color="indigo"/>
      <Select.Content position="item-aligned" color="indigo">
        <Select.Item value="commercial">Commercial</Select.Item>
        <Select.Item value="residential">Residential</Select.Item>
      </Select.Content>
    </Select.Root>
    </div>

    <div className="max-md:w-full">
      <button className="bg-primary max-md:w-full text-bg py-3 px-5 rounded-md  ">
        <i className="fas fa-magnifying-glass text-xl"></i>
      </button>
    </div>

    </div>
  </form>
  )
}
