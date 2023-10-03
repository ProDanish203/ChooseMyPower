"use client"
import { useState } from 'react'
import { Input } from "./Input";
import { toast } from "react-toastify";
import { Heading } from '../helpers';

export const ContactForm = () => {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    const isValidEmail = (email:string) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        // form validaions
        if(!fname || !lname) return toast.error("Name is required!")
        if(!email) return toast.error("Email is required!")
        if(!isValidEmail(email)) return toast.error("Invalid Email Address!")
        if(!msg) return toast.error("Message is required!")

        try{    
            
        }catch(error){
            console.log(error)
        }
    }

  return (
    <>
    <div className='max-w-[800px] w-full mx-auto'>

    <Heading title='Contact Us'/>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 items-center justify-center w-full'>

            <div className='flex max-sm:flex-col items-center justify-around gap-4 w-full'>
                <Input type='text' placeholder='First Name*' value={fname} onChange={(e:any) => setFname(e.target.value)} />

                <Input type='text' placeholder='Last Name*' value={lname} onChange={(e:any) => setLname(e.target.value)} />

            </div>

            <Input type='email' placeholder='Email Address*' value={email} onChange={(e:any) => setEmail(e.target.value)} />


            <div className='w-full'>
                <textarea rows={5} 
                placeholder='Message*'
                className='border-[1px] resize-none border-gray-500 px-4 py-2.5 outline-none w-full'
                required
                value={msg}
                onChange={(e:any) => setMsg(e.target.value)}
                ></textarea>
            </div>

            <div className='w-full'>
                <button type='submit' className='bg-primary max-sm:w-full py-2 px-3 text-center text-white'>
                    Send Message <i className='fas fa-paper-plane'></i>
                </button>
            </div>


        </form>
    </div>
    </>
  )
}
