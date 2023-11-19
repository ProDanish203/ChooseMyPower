"use client"
import { createClient } from "@/lib/actions/ClientData";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import { toast } from "react-toastify";

interface Props{
    id: string;
    zip: string;
}

export const AddressForm = ({id, zip}: Props) => {

    const [address, setAddress] = useState("")
    const [selectedDate, setSelectedDate] = useState('');

    const router = useRouter();

    const isDateInPast = (date:Date) => {
        const today = new Date();
        return date < today;
    }
      
    const handleDateChange = (e:any) => {
        const selected = new Date(e.target.value);
        if (!isDateInPast(selected)) {
            setSelectedDate(e.target.value);
        } else {
            toast.error("Please select a valid date.")
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if(!address || !selectedDate) return toast.error("Please provide all the  details");

        const {data, success, message} = await createClient({address, startDate: selectedDate}); 

        if(success)
            router.push(`/userInfo/${id}?zip=${zip}&&db=${data._id}`);
        else
            toast.error("Something went wrong");
    }
    
  return (
    <form onSubmit={handleSubmit} className="max-w-[500px] w-full">
        <div className='flex items-center justify-between gap-2 py-2 px-3 text-lg  border border-primary rounded-md'>
            <input type="text" placeholder='Enter Full Address'
            className='w-full outline-none border-none bg-transparent'
            name='address'
            value={address}
            autoComplete="off"
            onChange={(e:any) => setAddress(e.target.value)}
            
            />
            <i className='fas fa-location-dot text-xl'></i>
        </div>

        <div className="sm:my-5 my-3">
            <h3 className="md:text-2xl mb-5">Please select when would you like to start your service.</h3>
            
            <input type="date" 
            className="sm:max-w-[300px] w-full border border-primary px-2 py-2 rounded-md text-lg"
            value={selectedDate}
            onChange={handleDateChange}
            />
        </div>

        <button type="submit" className="bg-primary sm:max-w-[300px] w-full text-white px-2 text-center py-2 text-lg rounded-md">Continue</button>
    </form>
  )
}
