"use client"
import { PlanCard } from '@/components/cards'
import { ChooseNavbar } from '@/components/shared'
import { useSearchParams } from 'next/navigation';

const Complete = ({params}: {params: {id: string}}) => {

    const {id} = params;  
    const searchParams = useSearchParams();
    const mongoId = searchParams.get('db')

  return (
    <>
    <ChooseNavbar step={4}/>

  <main className="xl:px-[4%] px-[2%] py-5 pt-10">
    <section className="max-w-[1700px] w-full mx-auto">
        <div className="flex items-start  max-xl:flex-col flex-wrap w-full gap-10">

          <PlanCard id={id}/>
      
          <div className="flex-1 h-full">
            <h2 className="text-5xl font-bold my-2 max-sm:text-2xl">Almost Done!</h2>
            <h3 className="sm:text-xl">Now please provide your billing information</h3>

            <div className="my-10">
                
            </div>

          </div>


        </div>
    </section>
  </main>
    </>
  )
}

export default Complete