import { PlanCard } from '@/components/cards'
import { PaymentForm } from '@/components/forms';
import { ChooseNavbar } from '@/components/shared'

interface Params{
  params: {
    id: string;
  }, 
  searchParams: {
    zip: string;
    mongoId: string;
  }
}

const Payment = ({params, searchParams}: Params) => {

  const {id} = params;  
  const {zip, mongoId} = searchParams

  return (
    <>
  <ChooseNavbar step={3}/>

  <main className="xl:px-[4%] px-[2%] py-5 pt-10">
    <section className="max-w-[1700px] w-full mx-auto">
        <div className="flex items-start  max-xl:flex-col flex-wrap w-full gap-10">
        {/* @ts-ignore */}
          <PlanCard id={id} zip={zip}/>
      
          <div className="flex-1 h-full">
            <h2 className="text-5xl font-bold my-2 max-sm:text-2xl">Almost Done!</h2>
            <h3 className="sm:text-xl">Now please provide your billing information</h3>

            <div className="my-10">
              {/* @ts-ignore */}
              <PaymentForm planId={id} mongoId={mongoId} zip={zip}/>
            </div>

          </div>


        </div>
    </section>
  </main>
    </>
  )
}

export default Payment