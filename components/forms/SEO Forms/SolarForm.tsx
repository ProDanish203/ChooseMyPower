"use client"
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import { SEOInput } from "./SEOInput";
import { toast } from "react-toastify";
import { createSolar } from "@/lib/actions/SEO/SolarPage";

interface Props{
  id?: string;
  heading?: string;
  para1?: string;
  para2?: string;
  subHeading1?: string;
  subHeading2?: string;
  subPara1?: string;
  subPara2?: string;
}

export const SolarForm = ({id, heading, para1, para2, subHeading1, subHeading2, subPara1, subPara2}: Props) => {

  const [formData, setFormData] = useState({
    heading: heading || '',
    para1: para1 || '',
    para2: para2 || '',
    subHeading1: subHeading1 || '',
    subHeading2: subHeading2 || '',
    subPara1: subPara1 || '',
    subPara2: subPara2 || '',
  })

  const handleChange = (e: any) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  const pathname = usePathname();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try{
        
        const {success, message } = await createSolar({
            // id,
            // dataFor: 'home',
            heading: formData.heading,
            para1: formData.para1,
            para2: formData.para2,
            subHeading1: formData.subHeading1,
            subHeading2: formData.subHeading2,
            subPara1: formData.subPara1,
            subPara2: formData.subPara2,
            path: pathname
        });

        if(success) return toast.success("Data updated succesfully");

    }catch(error){
        toast.error("Something went wrong");
        console.log(error);
    }
  }

  return (
    <form
    onSubmit={handleSubmit}
    className='py-3 px-4 rounded-md bg-gray-200 flex flex-col gap-4 justify-center max-w-[1400px] w-full mx-auto'
    >

    <SEOInput type='text' placeholder='Main Heading' name='heading' value={formData.heading} onChange={handleChange}/>

    <div className='w-full flex flex-wrap items-center justify-between gap-3'>

      <div className='md:max-w-[48%] w-full flex flex-col gap-2 justify-center'>
          <label htmlFor="">Solar Paragraph 1</label>

          <textarea
          rows={4}
          placeholder="Solar Paragraph 1"
          className='resize-none border-[1px] rounded-md border-gray-500 px-4 py-2.5 outline-none w-full'
          required
          name="para1"
          value={formData.para1}
          onChange={handleChange}
          ></textarea>
      </div>

      <div className='md:max-w-[50%] w-full flex flex-col gap-2 justify-center'>
          <label htmlFor="">Solar Paragraph 2</label>

          <textarea
          rows={4}
          placeholder="Solar Paragraph 2"
          className='resize-none border-[1px] rounded-md border-gray-500 px-4 py-2.5 outline-none w-full'
          required
          name="para2"
          value={formData.para2}
          onChange={handleChange}
          ></textarea>
      </div>

    </div>

    <SEOInput type='text' placeholder='Sub Heading 1' name='subHeading1' value={formData.subHeading1} onChange={handleChange}/>
    <SEOInput type='text' placeholder='Sub Heading 2' name='subHeading2' value={formData.subHeading2} onChange={handleChange}/>
      


    </form>
  )
}
