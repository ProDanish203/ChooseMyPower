"use client"
import { createService, updateService } from "@/lib/actions/SEO/ServicesPage";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { SEOInput } from "./SEOInput";

interface Props{
    id?: string;
    title?: string;
    para1?: string;
    para2?: string;
    image?: string;
}


export const ServicesForm = ({id , image, para1, para2, title}: Props) => {

    const [formData, setFormData] = useState({
        title: title || '',
        para1: para1 || '',
        para2: para2 || '',
        image: image || '',
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try{
        const {success, message } = await updateService({
            id,
            dataFor: 'service',
            title: formData.title,
            para1: formData.para1,
            para2: formData.para2,
            image: formData.image,
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
    className='py-3 px-4 rounded-md bg-blackAccent flex flex-col gap-4 justify-center max-w-[1400px] w-full mx-auto'
    >

    <SEOInput type='text' placeholder='Title' name='title' value={formData.title} onChange={handleChange}/>
    <SEOInput type='text' placeholder='Image url' name='image' value={formData.image} onChange={handleChange}/>

    <div className='w-full flex flex-wrap items-center justify-between gap-3'>

      <div className='md:max-w-[48%] w-full flex flex-col gap-2 justify-center'>
          <label htmlFor="" className="text-white text-lg">Service Paragraph 1</label>

          <textarea
          rows={6}
          placeholder="Service Paragraph 1"
          className='resize-none border-[1px] rounded-md bg-neutral-900 text-white border-gray-500 px-4 py-2.5 outline-none w-full'
          required
          name="para1"
          value={formData.para1}
          onChange={handleChange}
          ></textarea>
      </div>

      <div className='md:max-w-[50%] w-full flex flex-col gap-2 justify-center'>
          <label htmlFor="" className="text-white text-lg">Service Paragraph 2</label>

          <textarea
          rows={6}
          placeholder="Service Paragraph 2"
          className='resize-none border-[1px] rounded-md bg-neutral-900 text-white border-gray-500 px-4 py-2.5 outline-none w-full'
          required
          name="para2"
          value={formData.para2}
          onChange={handleChange}
          ></textarea>
      </div>

    </div>

    <div className='my-5'>
      <button type="submit" 
      className='bg-accent py-2.5 px-3 text-white text-lg rounded-md outline-none max-w-[350px] w-full mx-auto'>
        Update SEO
      </button>
    </div>

    </form>
  )
}
