"use client"
import Image from "next/image";
import { useState } from "react";
import { RateModal } from "./RateModal";

export const RateCard = ({data} :any) => {
    // console.log(data);
    const {_id, company_logo, company_name, jdp_rating, plan_name, term_value, price_kwh500, price_kwh1000, price_kwh2000,} = data;

    const [showModal, setShowModal] = useState(false);

  return (
    <div className='relative flex gap-4 mb-10 items-center rounded-md shadow-md bg-gray-200 w-full px-4 py-4 max-sm:min-h-fit overflow-hidden'>

        <button type="button" className="max-md:px-2 max-md:py-1 px-2 bg-gray-500 text-white rounded-md max-md:absolute max-md:text-lg max-md:bg-primary top-4 right-2"
        onClick={() => setShowModal(true)}
        >
            <i className="fas fa-angle-down"></i>
        </button>

        {
            showModal && (
                <RateModal id={_id} setShowModal={setShowModal}/>
            )
        }   
        <div className="w-full flex items-center justify-between max-md:flex-col max-md:justify-center pr-5 gap-2">

            <div className="flex items-center gap-5 max-md:mb-10">
                <div className="relative w-[100px] h-[90px] max-sm:w-[120px] max-sm:h-[70px] max-md:absolute max-md:top-0 max-md:left-5">
                    <Image src={company_logo} alt={company_name} fill
                    className="object-contain hide-img-bg"
                    />
                </div>
                <div className="bg-neutral-400 h-[100px] w-[2px] max-md:hidden"/>

                <div className="max-md:flex flex items-center gap-10 max-md:absolute top-20 left-5">
                    <div>
                        <h5 className="text-3xl font-bold max-md:text-2xl">{term_value} month</h5>
                    </div>

                    <div className="bg-neutral-400 h-[100px] w-[2px] max-md:hidden"/>
                    <div>
                        <h5 className="text-3xl font-bold max-md:text-2xl">{price_kwh500} <i className="fas fa-cent-sign"></i> <span className="text-lg max-md:text-sm text-neutral-600">/kwh</span></h5>
                    </div>
                </div>
            </div>

            <div className="max-md:w-full max-md:mt-14 flex flex-col gap-2">
                <button type="button" className="max-md:w-full bg-primary text-white md:text-lg flex rounded-full shadow-sm py-2 px-5 items-center gap-2 hover:gap-3 ">
                    Select Plan 
                    <i className="fas fa-arrow-right-long"></i>
                </button>

                <button type="button" className="max-md:w-full bg-primary text-white md:text-lg flex rounded-full shadow-sm  py-2 px-5 items-center gap-2 hover:gap-3"
                onClick={() => setShowModal(true)}
                >
                    View Details
                    <i className="fas fa-arrow-right-long"></i>
                </button>
            </div>

        </div>
    </div>
  )
}
