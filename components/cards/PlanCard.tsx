"use client"
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Image from "next/image";
import { useState } from "react";
import { RateModal } from "./RateModal";
import Loading from "@/app/(auth)/loading";
import { Loader } from "../helpers";

interface Props{
  id: string;
  zip: string;
}

export const PlanCard = ({id, zip}:Props) => {

  const {data, mutate, isLoading, error} = useSWR(`/api/getPlan/${id}?zip=${zip}`, fetcher);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-slate-600 shadow-md border-2 rounded-md max-w-[400px] w-full mx-auto">
        {showModal && (
          <RateModal data={data} setShowModal={setShowModal}/>
        )}
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-[200px]">
            <Loader dark/> 
          </div>
        )
        : (
          <>
          <div className="bg-primary rounded-sm py-2 px-4 text-white sm:text-xl w-full gap-2 flex items-center">
            <i className="fas fa-user"></i>
            <p>Your Plan</p>
        </div>
      <div className="px-2">

        <div className="flex items-center justify-between gap-3">
          <div className="relative w-52 h-20">
            <Image src={data?.company_logo} alt={data?.company_name} fill
            className="object-contain hide-img-bg"
            />
          </div>
          <div>
            <p className="sm:text-lg">{data?.company_name}</p>
            <p className="max-sm:text-sm">{data?.plan_name}</p>
          </div>
        </div>

        <div className="my-3 flex items-center justify-between gap-2">
          <p className="text-center w-full py-2 rounded-sm bg-slate-500 text-white md:text-lg">
            Rate: 500kwh
          </p>

          <p className="flex items-center justify-center gap-2 text-center w-full py-2 rounded-sm bg-slate-500 text-white md:text-lg">
            <span>{data?.price_kwh500} <i className="fas fa-cent-sign"></i></span>
            <span className="text-gray-200 text-sm">/kwh</span>
          </p>
        </div>

        <div className="w-full">
          <button className="w-full cursor-pointer bg-primary text-white mb-3 py-2 rounded-md md:text-lg"
          onClick={() => setShowModal(true)}
          >More Details</button>
        </div>

      </div>
      </>
      )}   

    </div>
  )
}
