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
    className='py-3 px-4 rounded-md bg-gray-100 flex flex-col gap-4 justify-center'
    >

        <div>
            <SEOInput type='text' placeholder='Main Heading' name='heading' value={formData.heading} onChange={handleChange}/>
        </div>

        <div>
            <SEOInput type='text' placeholder='Main Heading' name='heading' value={formData.heading} onChange={handleChange}/>
        </div>

        <div>
            <SEOInput type='text' placeholder='Main Heading' name='heading' value={formData.heading} onChange={handleChange}/>
        </div>

        <div>
            <SEOInput type='text' placeholder='Main Heading' name='heading' value={formData.heading} onChange={handleChange}/>
        </div>

    </form>
  )
}
