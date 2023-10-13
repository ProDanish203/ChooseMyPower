"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Input } from '.'
import { SEOInput } from './SEOInput'

export const HomeForm = () => {

    const [formData, setFormData] = useState({
        heading: '',
        tagLine: '',
        aboutHeading: '',
        aboutPara1: '',
        aboutPara2: '',
        expertsTagline: '',
        servicesTagline: '',
        footerPara: '',
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
    }

  return (
    <form onSubmit={handleSubmit} 
    className='py-3 px-4 rounded-md bg-gray-200 flex flex-col gap-4 justify-center max-w-[1400px] w-full mx-auto'
    >

        <div>
            <SEOInput type='text' placeholder='Main Heading' name='heading' value={formData.heading} onChange={handleChange}/>
        </div>

        <div className='w-full flex flex-col gap-2 justify-center'>
            <SEOInput type='text' placeholder='Main Page Tagline' name='tagLine' value={formData.tagLine} onChange={handleChange}/>
        </div>

        <div>
            <SEOInput type='text' placeholder='About Heading' name='aboutHeading' value={formData.aboutHeading} onChange={handleChange}/>
        </div>


        <div className='w-full flex flex-col gap-2 justify-center'>
            <label htmlFor="">About Paragraph 1</label>

            <textarea
            rows={4}
            placeholder="About Paragraph 1"
            className='resize-none border-[1px] rounded-md border-gray-500 px-4 py-2.5 outline-none w-full'
            required
            name="aboutPara1"
            value={formData.aboutPara1}
            onChange={handleChange}
            ></textarea>
        </div>

        <div className='w-full flex flex-col gap-2 justify-center'>
            <label htmlFor="">About Paragraph 2</label>

            <textarea
            rows={4}
            placeholder="About Paragraph 2"
            className='resize-none border-[1px] rounded-md border-gray-500 px-4 py-2.5 outline-none w-full'
            required
            name="aboutPara2"
            value={formData.aboutPara2}
            onChange={handleChange}
            ></textarea>
        </div>

        
        <div>
            <SEOInput type='text' placeholder='Experts Section Tagline' name='expertsTagline' value={formData.expertsTagline} onChange={handleChange}/>
        </div>

        <div>
            <SEOInput type='text' placeholder='Services Section Tagline' name='servicesTagline' value={formData.servicesTagline} onChange={handleChange}/>
        </div>

        <div className='my-5'>
            <button className='bg-primary py-2.5 px-3 text-white text-lg rounded-md outline-none max-w-[350px] w-full mx-auto'>
                Update SEO
            </button>
        </div>

    </form>
  )
}
