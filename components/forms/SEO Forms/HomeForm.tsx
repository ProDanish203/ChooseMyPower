"use client"
import { FormEvent, useState } from 'react'
import { SEOInput } from './SEOInput'
import { toast } from 'react-toastify'
import { createHome, updateHome } from '@/lib/actions/SEO/HomePage'
import { Separator } from '@radix-ui/react-select'

interface Props{
    id?: string;
    heading?: string;
    tagLine?: string;
    aboutHeading?: string;
    aboutPara1?: string;
    aboutPara2?: string;
    expertsTagline?: string;
    servicesTagline?: string;
    footerPara?: string;
}

export const HomeForm = ({id, heading, tagLine, aboutHeading, aboutPara1, aboutPara2, expertsTagline, servicesTagline, footerPara}: Props) => {

    const [formData, setFormData] = useState({
        heading: heading || '',
        tagLine: tagLine || '',
        aboutHeading: aboutHeading || '',
        aboutPara1: aboutPara1 || '',
        aboutPara2: aboutPara2 || '',
        expertsTagline: expertsTagline || '',
        servicesTagline: servicesTagline || '',
        footerPara: footerPara || '',
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
            
            const {success, message } = await updateHome({
                id,
                dataFor: 'home',
                heading: formData.heading,
                tagLine: formData.tagLine,
                aboutHeading: formData.aboutHeading,
                aboutPara1: formData.aboutPara1,
                aboutPara2: formData.aboutPara2,
                expertsTagline: formData.expertsTagline,
                servicesTagline: formData.servicesTagline,
                footerPara: formData.footerPara,
            });

            if(success) return toast.success("Data updated succesfully");

        }catch(error){
            toast.error("Something went wrong");
            console.log(error);
        }
    }

  return (
    <form onSubmit={handleSubmit} 
    className='py-3 px-4 rounded-md bg-blackAccent flex flex-col gap-4 justify-center max-w-[1400px] w-full mx-auto'
    >   
        <h4 className='text-white text-2xl font-extrabold text-center'>Home Banner Section</h4>
        <SEOInput type='text' placeholder='Main Heading' name='heading' value={formData.heading} onChange={handleChange}/>

        <SEOInput type='text' placeholder='Main Page Tagline' name='tagLine' value={formData.tagLine} onChange={handleChange}/>
        <div className='my-5 w-full h-[2px] bg-accent'/>


        <SEOInput type='text' placeholder='About Heading' name='aboutHeading' value={formData.aboutHeading} onChange={handleChange}/>
        <div className='w-full flex flex-wrap items-center justify-between gap-3'>

            <div className='md:max-w-[48%] w-full flex flex-col gap-2 justify-center'>
                <label htmlFor="" className='text-white text-lg'>About Paragraph 1</label>

                <textarea
                rows={4}
                placeholder="About Paragraph 1"
                className='resize-none border-[1px] rounded-md bg-neutral-900 text-white border-gray-500 px-4 py-2.5 outline-none w-full'
                required
                name="aboutPara1"
                value={formData.aboutPara1}
                onChange={handleChange}
                ></textarea>
            </div>

            <div className='md:max-w-[50%] w-full flex flex-col gap-2 justify-center'>
                <label htmlFor="" className='text-white text-lg'>About Paragraph 2</label>

                <textarea
                rows={4}
                placeholder="About Paragraph 2"
                className='resize-none border-[1px] rounded-md bg-neutral-900 text-white border-gray-500 px-4 py-2.5 outline-none w-full'
                required
                name="aboutPara2"
                value={formData.aboutPara2}
                onChange={handleChange}
                ></textarea>
            </div>

        </div>

        <SEOInput type='text' placeholder='Experts Section Tagline' name='expertsTagline' value={formData.expertsTagline} onChange={handleChange}/>
        <SEOInput type='text' placeholder='Services Section Tagline' name='servicesTagline' value={formData.servicesTagline} onChange={handleChange}/>

        <div className='w-full flex flex-col gap-2 justify-center'>
            <label htmlFor="" className='text-white text-lg'>Footer Paragraph</label>

            <textarea
            rows={4}
            placeholder="Foter Paragraph"
            className='resize-none border-[1px] rounded-md bg-neutral-900 text-white border-gray-500 px-4 py-2.5 outline-none w-full'
            required
            name="footerPara"
            value={formData.footerPara}
            onChange={handleChange}
            ></textarea>
            </div>

        <div className='my-5'>
            <button type='submit'
            className='bg-accent py-2.5 px-3 text-white text-lg rounded-md outline-none max-w-[350px] w-full mx-auto'>
                Update
            </button>
        </div>

    </form>
  )
}
