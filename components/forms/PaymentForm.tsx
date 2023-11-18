"use client"
import { addBilling } from "@/lib/actions/ClientData";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import { toast } from "react-toastify";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

interface Props{
    mongoId: string;
    planId: string;
}

export const PaymentForm = ({mongoId, planId}: Props) => {

    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (e:any) => {
        setState((prev) => ({ ...prev, focus: e.target.name }));
    }

    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if(state.number.length > 16 || state.number.length < 16) return toast.error("Invalid card number");
        if(!state.name || !state.number || !state.cvc || !state.expiry) return toast.error("Please provide all details");

        const {success} = await addBilling({
            cvv: state.cvc,
            expiry:state.expiry,
            name: state.name, 
            number: state.number,
            id: mongoId
        });

        if(success) 
            router.push(`/complete/${planId}?db=${mongoId}`)
        else
            toast.error("Something went wrong");
    }

  return (
    <>
    <div className="w-full mx-auto max-md:flex-col max-md:gap-5 flex flex-row-reverse justify-between items-center">

    <Cards
    number={state.number}
    expiry={state.expiry}
    cvc={state.cvc}
    name={state.name}
    // @ts-ignore
    focused={state.focus}
    />

    <form onSubmit={handleSubmit} className="max-w-[500px] w-full px-2">

    <div className='w-full flex flex-col gap-2 justify-center mb-3'>

        <label htmlFor="" className="text-black text-md">Card Holder Name</label>
        <div className="border-[1px] border-slate-500 rounded-md  px-4 py-2.5 flex items-center justify-between gap-2 relative">
            <input type="text"
            placeholder="John Smith"
            className='bg-transparent outline-none w-full'
            autoComplete="off"
            required
            name="name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            />

            <i className={`fas fa-user text-slate-600 text-lg`}></i>
        </div>
    </div>

    <div className='w-full flex flex-col gap-2 justify-center mb-3'>

        <label htmlFor="" className="text-black text-md">Credit Card Number</label>
        <div className="border-[1px] border-slate-500 rounded-md  px-4 py-2.5 flex items-center justify-between gap-2 relative">
            <input type="number"
            placeholder="0000-0000-0000-0000"
            className='bg-transparent outline-none w-full'
            autoComplete="off"
            required
            name="number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            />

            <i className={`fas fa-credit-card text-slate-600 text-lg`}></i>
        </div>
    </div>

    <div className="flex max-md:flex-col w-full items-center gap-2 mb-4">

        <div className='w-full flex flex-col gap-2 justify-center'>

            <label htmlFor="" className="text-black text-md">Expiry Date</label>
            <div className="border-[1px] border-slate-500 rounded-md  px-4 py-2.5 flex items-center justify-between gap-2 relative">
                <input type="text"
                placeholder="MM/YYYY"
                className='bg-transparent outline-none w-full'
                autoComplete="off"
                // required
                name="expiry"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                />

                <i className={`fas fa-calendar-xmark text-slate-600 text-lg`}></i>
            </div>
        </div>

        <div className='w-full flex flex-col gap-2 justify-center'>

            <label htmlFor="" className="text-black text-md">Security Code</label>
            <div className="border-[1px] border-slate-500 rounded-md  px-4 py-2.5 flex items-center justify-between gap-2 relative">
                <input type="number"
                placeholder="123"
                className='bg-transparent outline-none w-full'
                autoComplete="off"
                // required
                name="cvc"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength={3}
                minLength={3}
                />

                <i className={`fas fa-key text-slate-600 text-lg`}></i>
            </div>
        </div>

    </div>

    <div className="w-full my-3 sm:my-6">
        <button type="submit" className="bg-primary w-full text-white px-2 text-center py-2 text-lg rounded-md">Proceed</button>
    </div>

    </form>
    </div>
    </>
  )
}
