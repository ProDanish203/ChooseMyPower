"use client"
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { providerData } from "@/utils/data";
import Loading from "./loading";
import { RateCard } from "@/components/cards";
import { useEffect, useState } from "react";

interface Params{
    params: {
        zip: string;
    }, 
    searchParams: {
        type: string
    }
}

const CompareRates = ({params, searchParams}: Params) => {

    const {zip} = params;
    const {type}  = searchParams

    const [showFilter, setShowFilter] = useState(false)

    const {data, mutate, isLoading, error} = useSWR(`/api/getRates/${zip}`, fetcher);

    const initialActiveCompanies = ['RESQL01DB1245945000001-VALU', 'RESQL01DB1245476300001-DISC', 'ELSQL01DB1245250200001-TARA', 'RESQL01DB1245476300001-CIRR', 'ELSQL01DB1245304000001-AMIG', 'ELSQL01DB1245229100018-GREE', 'RESQL01DB1245929800001-TRUE', 'RESQL01DB1245854700001-CHAR', 'RESQL01DB1245472100001-FRON'];
    const [activeCompanies, setActiveCompanies] = useState(initialActiveCompanies);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Update filteredData whenever data or activeCompanies changes
        if (data) {
        const newFilteredData = data.filter((x:any) => activeCompanies.includes(x.company_unique_id));
        setFilteredData(newFilteredData);
        }
    }, [data, activeCompanies]);

    const handleCompanyFilter = (id:any) => {
        const index = activeCompanies.indexOf(id);
        const newActiveCompanies = [...activeCompanies];

        if (index !== -1) {
        newActiveCompanies.splice(index, 1);
        } else {
        newActiveCompanies.push(id);
        }

        setActiveCompanies(newActiveCompanies);
    };

  return (
    <main className="px-[9%] max-lg:px-[2%] py-5 pt-10">
    <section className="max-w-[1400px] w-full mx-auto">
        
    {isLoading ? Loading() : (
    <>
    <h2 className="text-primary md:text-2xl text-lg mb-5 md:text-center ">Showing results for <span className="font-bold">{zip}</span> in <span className="font-bold">{type}</span> section</h2>

    <div className="flex max-xl:flex-col gap-5 w-full">
        {/* Filter section */}

        <button type="button" 
        onClick={() => setShowFilter(prev => !prev)}
        className={`xl:hidden flex items-center gap-3 bg-gray-200 py-2 px-4 w-fit rounded-md`}>
            <i className="fas fa-filter text-lg "></i>
            <p className="text-md text-primary">{showFilter ? "Hide": "Show"} Filters</p>
        </button>
        
        <div className={`${!showFilter && 'max-xl:hidden'} bg-gray-200 py-4 px-3 rounded-md shadow-md min-w-[300px] max-h-[40vh] overflow-y-auto`}
        >
            <h4 className="md:text-xl text-lg mb-4 text-text font-semibold">Plan Filters</h4>
            <div>

            <p className="font-semibold mb-1">Providers: </p>
            {providerData.map((provider, i) => (
            <div key={i}
            className="flex items-center gap-2"
            >
                <input type="checkbox" 
                className="w-[20px] h-[20px]"
                id={`check-${provider.name}`}
                onChange={() => handleCompanyFilter(provider.id)}
                defaultChecked
                />
                <label htmlFor={`check-${provider.name}`}>{provider.name}</label>
            </div>
            ))}
        </div>
            
        </div>

        {/* Results section */}
        <div className="w-full">
        {data ? (
        <>  
        {filteredData.length > 0 ? (
            <h6 className="text-primary mb-5 text-lg">
            Total {data?.length} Plans retrieved
        </h6>
        ) : (
        <h6 className="text-primary md:text-2xl text-xl mb-5">
            No Plans retrieved
        </h6>
        )}
        
        {filteredData?.map((plan:any) => (
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