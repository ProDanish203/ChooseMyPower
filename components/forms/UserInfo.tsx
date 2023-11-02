"use client"
import { useState } from "react"
import { NameInput } from "./NameInput"
import { toast } from "react-toastify"

export const UserInfo = () => {

    const [info, setInfo] = useState({
        fname: "",
        lname: "",
        dob: "",
        phone: "",
        email: "",
    })

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setInfo((prev) => ({
          ...prev, [name]: value,})); 
    };

    const isDateInPast = (date:Date) => {
        const today = new Date();
        return date < today;
    }
    
    const handleDateChange = (e:any) => {
        const selected = new Date(e.target.value);
        if (!isDateInPast(selected)) {
            //@ts-ignore
            setInfo({dob: e.target.value});
        } else {
        toast.error("Please select a valid date.")
        }
    }

  return (
    <>
    <form className="max-w-[1000px] w-full px-2">

        <div className="flex max-md:flex-col w-full items-center gap-2 mb-4">
            <NameInput type='text' placeholder='First Name' icon="user" name='fname' value={info.fname} onChange={handleChange}/>
            <NameInput type='text' placeholder='Last Name' icon="user" name='lname' value={info.lname} onChange={handleChange}/>
        </div>

        <div className="flex max-md:flex-col w-full items-center gap-2 mb-4">
            <NameInput type='email' placeholder='Email Address' icon="envelope" name='email' value={info.email} onChange={handleChange}/>
            <NameInput type='number' placeholder='Phone' icon="phone" name='phone' value={info.phone} onChange={handleChange}/>
        </div>

        <div className="sm:max-w-[250px] w-full flex flex-col gap-2 justify-center">
            <label htmlFor="" className="text-black text-md">Date Of Birth</label>
    
            <input type="date" 
            className="w-full border border-primary px-2 py-2 rounded-md text-lg"
            value={info.dob}
            onChange={handleDateChange}
            />
        </div>


    </form>    
    </>
  )
}
