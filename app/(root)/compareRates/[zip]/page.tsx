"use client"
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { providersName, usage } from "@/utils/data";
import Loading from "./loading";
import { RateCard } from "@/components/cards";


const CompareRates = ({params}: {params: {zip:string}}) => {

    const {zip} = params;
    const searchParams = useSearchParams();
    const type = searchParams.get('type')

    const {data, mutate, isLoading, error} = useSWR(`/api/rawData?zip=${zip}`, fetcher);

  return (
    <section className="sm:px-10 px-3 pb-10 bg-primary hero-section pt-32 min-h-[100vh]">
        
    {isLoading ? Loading() : (
    <>
    <h2 className="text-bg md:text-2xl text-lg mb-5 md:text-center ">Showing results for <span className="font-bold">{zip}</span> in <span className="font-bold">{type}</span> setion</h2>

    <div className="flex max-md:flex-col gap-5 w-full">
        {/* Filter section */}
        <div className="bg-secondary py-4 px-3 rounded-md shadow-sm min-w-[300px] max-h-[80vh] overflow-y-scroll">
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
        <div>
        {data ? (
        <>  
        {data.length > 0 ? (
            <h6 className="text-bg mb-5 text-lg font-semibold">
            Total {data?.length} Plans retrieved
        </h6>
        ) : (
        <h6 className="text-bg md:text-2xl text-xl mb-5 font-semibold">
            No Plans retrieved
        </h6>
        )}
        

        {data?.slice(0,10).map((plan:any) => (
        <div key={plan.company_unique_id}
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
  )
}

export default CompareRates;