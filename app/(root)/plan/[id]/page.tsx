import { PlanCard } from "@/components/cards";
import { Address } from "@/components/forms";
import { ChooseNavbar } from "@/components/shared";

const Plan = ({params}: {params: {id: string}}) => {

    const {id} = params;

  return (
    <>
  <ChooseNavbar step={2}/>

  <main className="xl:px-[4%] px-[2%] py-5 pt-10">
    <section className="max-w-[1700px] w-full mx-auto">
        <div className="flex items-center max-xl:flex-col flex-wrap w-full gap-10">

          <PlanCard id={id}/>
      
          <div className="flex-1 h-full">
            <h2 className="text-5xl font-bold my-2 max-sm:text-4xl">Good Choice!</h2>
            <h3 className="text-2xl max-sm:text-xl">Great!, now please provide your address where to send electricity and when it should start</h3>

            <div className="my-20">
              <Address/>
            </div>
          </div>


        </div>
    </section>
  </main>
    </>
  )
}

export default Plan