"use client"
import { PlanCard } from "@/components/cards";
import { UserInfo } from "@/components/forms";
import { ChooseNavbar } from "@/components/shared";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Plan = ({params}: {params: {id: string}}) => {

    const {id} = params;  
    const searchParams = useSearchParams();
    const mongoId = searchParams.get('db')

  return (
    <>
  <ChooseNavbar step={2}/>

  <main className="xl:px-[4%] px-[2%] py-5 pt-10">
    <section className="max-w-[1700px] w-full mx-auto">
        <div className="flex items-start  max-xl:flex-col flex-wrap w-full gap-10">

          <PlanCard id={id}/>
      
          <div className="flex-1 h-full">
            <h2 className="text-5xl font-bold my-2 max-sm:text-2xl">Enter Your Information</h2>
            <h3 className="sm:text-xl">Great!, now please provide your personal information</h3>

            <div className="my-10">
              <UserInfo mongoId={mongoId}/>
            </div>


          </div>


        </div>
    </section>
  </main>
    </>
  )
}

export default Plan;