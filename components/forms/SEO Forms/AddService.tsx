"use client"
import { useState } from "react"
import { ServicesForm } from "./ServicesForm";


export const AddService = () => {

    const [showForm, setShowForm] = useState(false);

  return (
    <div>
        <div 
        className='bg-blackAccent py-3 hover:scale-105 rounded-md cursor-pointer text-white flex items-center justify-center gap-2 max-w-[200px] w-full mx-auto my-5'
        onClick={() => setShowForm(prev => !prev)}
        >
            <i className='fas fa-plus text-2xl'></i>
            <p>Add Service</p>
        </div>
        {
        showForm && (
        <div
        data-aos="fade-up" data-aos-duration="1200"
        >
            <ServicesForm add/>
        </div>
        )
        }
    </div>
  )
}
