"use client"
import { PlanCard } from "@/components/cards";
import { ChooseNavbar } from "@/components/shared";
import { AddressForm } from "@/components/forms";
import { useSearchParams } from "next/navigation";

const Plan = ({params}: {params: {id: string}}) => {

  const {id} = params;  
  const searchParams = useSearchParams();
  const zip = searchParams.get('zip')

  return (
    <>
  <ChooseNavbar step={1}/>

  <main className="xl:px-[4%] px-[2%] py-5 pt-10">
    <section className="max-w-[1700px] w-full mx-auto">
        <div className="flex items-start  max-xl:flex-col flex-wrap w-full gap-10">
        {/* @ts-ignore */}
          <PlanCard id={id} zip={zip}/>
      
          <div className="flex-1 h-full">
            <h2 className="text-5xl font-bold my-2 max-sm:text-2xl">Good Choice!</h2>
            <h3 className="md:text-2xl">Great!, now please provide your address where to send electricity and when it should start.</h3>

            <div className="my-5">
              {/* @ts-ignore */}
              <AddressForm id={id} zip={zip}/>
            </div>

          </div>

        </div>
    </section>
  </main>
    </>
  )
}

export default Plan;