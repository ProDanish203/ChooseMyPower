"use client"
import { FormEvent, useState } from "react"
import { NameInput } from "./NameInput"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { completeClient } from "@/lib/actions/ClientData"

interface Props{
    mongoId: string;
    planId: string;
}

export const UserInfo = ({mongoId, planId}: Props) => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");

    const router = useRouter();

    const isDateInFuture = (date:Date) => {
        const today = new Date();
        return date > today;
    }
    
    const is18Plus = (date:Date) => {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        const monthDiff = today.getMonth() - date.getMonth();
    
        return age > 18 || (age === 18 && monthDiff >= 0);
    };

    const handleDateChange = (e:any) => {
        const selected = new Date(e.target.value);
        if (!isDateInFuture(selected)) {
            if(is18Plus(selected))
                setDob(e.target.value);
            else
                toast.error("You are under 18 so we can't proceed.")
                
        } else {
            toast.error("Please select a valid date of birth.")
        }
    }

    

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if(!fname || !lname || !email || !phone) return toast.error("Please provide all details")
        if(!dob) return toast.error("Please provide date of birth");

        const {success} = await completeClient({
            id: mongoId,
            fname, lname, email, phone, dob
        })    

        if(success)
            router.push(`/payment/${planId}?db=${mongoId}`);
        else 
            toast.error("Something went wrong");


    }

  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-[1000px] w-full px-2" >

        <div className="flex max-md:flex-col w-full items-center gap-2 mb-4">
            <NameInput type='text' placeholder='First Name' icon="user" name='fname' value={fname} handleChange={(e:any) => setFname(e.target.value)}/>
            <NameInput type='text' placeholder='Last Name' icon="user" name='lname' value={lname} handleChange={(e:any) => setLname(e.target.value)}/>
        </div>

        <div className="flex max-md:flex-col w-full items-center gap-2 mb-4">
            <NameInput type='email' placeholder='Email Address' icon="envelope" name='email' value={email} handleChange={(e:any) => setEmail(e.target.value)}/>
            <NameInput type='number' placeholder='Phone' icon="phone" name='phone' value={phone} handleChange={(e:any) => setPhone(e.target.value)}/>
        </div>

        <div className="sm:max-w-[250px] w-full flex flex-col gap-2 justify-center">
            <label htmlFor="" className="text-black text-md">Date Of Birth</label>
    
            <input type="date" 
            className="w-full border border-primary px-2 py-2 rounded-md text-lg"
            value={dob}
            onChange={handleDateChange}
            />
        </div>

        <div className="sm:max-w-[350px] w-full my-3 sm:my-6">
            <button type="submit" className="bg-primary w-full text-white px-2 text-center py-2 text-lg rounded-md">Proceed</button>
        </div>


    </form>    
    </>
  )
}
