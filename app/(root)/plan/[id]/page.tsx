import { PlanCard } from "@/components/cards";
import { Address, DatePicker } from "@/components/forms";
import { ChooseNavbar } from "@/components/shared";
import Link from "next/link";

const Plan = ({params}: {params: {id: string}}) => {

    const {id} = params;  

  return (
    <>
  <ChooseNavbar step={2}/>

  <main className="xl:px-[4%] px-[2%] py-5 pt-10">
    <section className="max-w-[1700px] w-full mx-auto">
        <div className="flex items-start  max-xl:flex-col flex-wrap w-full gap-10">

          <PlanCard id={id}/>
      
          <div className="flex-1 h-full">
            <h2 className="text-5xl font-bold my-2 max-sm:text-2xl">Good Choice!</h2>
            <h3 className="md:text-2xl">Great!, now please provide your address where to send electricity and when it should start.</h3>

            <div className="my-10">
              <Address/>
            </div>

            <div>
              <h3 className="md:text-2xl mb-5">Please select when would you like to start your service.</h3>
              <DatePicker/>
            </div>

            <Link href={`/userInfo/${id}`} className="my-5 block max-w-[200px] w-full">
              <button className="bg-primary w-full text-white px-2 text-center py-2 text-lg rounded-md">Continue</button>
            </Link>
          </div>


        </div>
    </section>
  </main>
    </>
  )
}

export default Plan;