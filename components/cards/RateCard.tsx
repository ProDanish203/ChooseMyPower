"use client"
import Image from "next/image";
import { useState } from "react";
import { RateModal } from "./RateModal";

export const RateCard = ({data} :any) => {
    // console.log(data);
    const {_id, company_logo, company_name, jdp_rating, plan_name, term_value, price_kwh500, price_kwh1000, price_kwh2000,} = data;

    const [showModal, setShowModal] = useState(false);

  return (
    <div className='flex gap-4 mb-10 items-center rounded-md shadow-md bg-gray-200 w-full px-4 py-4 max-h-[100px] max-sm:min-h-fit overflow-hidden'>

        <button type="button" className="px-2 bg-gray-500 text-white rounded-md"
        onClick={() => setShowModal(true)}
        >
            <i className="fas fa-angle-down text"></i>
        </button>

        {
            showModal && (
                <RateModal id={_id} setShowModal={setShowModal}/>
            )
        }

        <div className="relative w-[100px] h-[90px] max-sm:w-[100px] max-sm:h-[50px]">
            <Image src={company_logo} alt={company_name} fill
            className="object-contain hide-img-bg"
            />
        </div>
        <div className="bg-neutral-400 h-[100px] w-[2px] "/>

        <div className="max-sm:hidden">
            <h5 className="text-3xl font-bold max-md:text-xl">{term_value} month</h5>
        </div>

        <div className="bg-neutral-400 h-[100px] w-[2px]"/>
        <div className="max-sm:hidden">
            <h5 className="text-3xl font-bold max-md:text-xl">{price_kwh500} <i className="fas fa-cent-sign"></i> <span className="text-lg max-md:text-sm text-neutral-600">/kwh</span></h5>
        </div>

    </div>
  )
}
