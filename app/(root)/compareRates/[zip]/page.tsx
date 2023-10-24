"use client"
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { providersName, usage } from "@/utils/data";
import Loading from "./loading";
import { RateCard } from "@/components/cards";
import { useState } from "react";


const CompareRates = ({params}: {params: {zip:string}}) => {

    const {zip} = params;
    const searchParams = useSearchParams();
    const type = searchParams.get('type')

    const [showFilter, setShowFilter] = useState(false)

    const {data, mutate, isLoading, error} = useSWR(`/api/getRates/${zip}`, fetcher);
    // console.log(error)

  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-10">
    <section className="max-w-[1400px] w-full mx-auto">
        
    {isLoading ? Loading() : (
    <>
    <h2 className="text-primary md:text-2xl text-lg mb-5 md:text-center ">Showing results for <span className="font-bold">{zip}</span> in <span className="font-bold">{type}</span> section</h2>

    <div className="flex max-xl:flex-col gap-5 w-full">
        {/* Filter section */}

        <button type="button" 
        onClick={() => setShowFilter(prev => !prev)}
        className={`xl:hidden flex items-center gap-3 bg-gray-200 py-2 px-4 w-fit rounded-md`}>
            <i className="fas fa-filter text-2xl "></i>
            <p className="text-xl font-bold text-primary">{showFilter ? "Hide": "Show"} Filters</p>
        </button>
        
        <div className={`${!showFilter && 'max-xl:hidden'} bg-gray-200 py-4 px-3 rounded-md shadow-md min-w-[300px] max-h-[50vh] overflow-y-auto`}
        >
            <h4 className="md:text-xl text-lg mb-4 text-text font-semibold">Plan Filters</h4>
            <div>

            <p className="font-semibold mb-1">Providers: </p>
            {providersName.map((provider, i) => (
            <div key={i}
            className="flex items-center gap-2"
            >
                <input type="checkbox" 
                className="w-[20px] h-[20px]"
                id={`check-${provider}`}
                defaultChecked
                />
                <label htmlFor={`check-${provider}`}>{provider}</label>
            </div>
            ))}
            </div>
            
            <div className="mt-4">
            <p className="font-semibold mb-1">Usage: </p>
            {usage.map((kwh, i) => (
            <div key={i}
            className="flex items-center gap-2"
            >
                <input type="checkbox" 
                className="w-[20px] h-[20px]"
                id={`check-${kwh}`}
                />
                <label htmlFor={`check-${kwh}`}>{kwh}</label>
            </div>
            ))}
            </div>
            
        </div>
        {/* Results section */}
        <div className="w-full">
        {data ? (
        <>  
        {data.length > 0 ? (
            <h6 className="text-primary mb-5 text-lg">
            Total {data?.length} Plans retrieved
        </h6>
        ) : (
        <h6 className="text-primary md:text-2xl text-xl mb-5">
            No Plans retrieved
        </h6>
        )}
        
        {data?.map((plan:any) => (
        <div key={plan.plan_id}
        className="flex flex-col gap-4 justify-center items-start w-full "
        >
            <RateCard data={plan}/>
        </div>
        ))}
        </>
        ): (
        <h3 className="text-xl font-bold text-bg">No results: </h3>
        )}
        
        </div>

    </div>
    </>
    )}
    </section>
    </main>
  )
}

export default CompareRates;