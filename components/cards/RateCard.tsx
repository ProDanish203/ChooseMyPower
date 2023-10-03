import { Separator } from "@radix-ui/themes";
import Image from "next/image";

export const RateCard = ({data} :any) => {

  return (
    <div className='flex gap-4 mb-10 items-center rounded-md shadow-sm bg-secondary w-full px-2 py-2 min-h-[150px] '>
        
        <div className="relative flex flex-col gap-3 justify-center">

        <div className="relative mb-4">
            <Image src={data.company_logo} alt={data.company_name} width={150} height={100} 
            className="object-cover hide-img-bg rounded-md"
            />
        </div>

        <div className="w-full">
                  
            <p className="">Ratings:
            <span className="font-semibold">
                {data.rating_count}/{data.rating_total}
            </span>
            </p>

            <p className="">JDP Rating:
            <span className="font-semibold">
                {data.jdp_rating}
            </span>
            </p>
        </div>
        

        </div>

        <div className="h-[80px] flex items-center justify-center">

        <Separator
        my="3" size="3"
        style={{width: '2px'}}
        color="gray"
        orientation="vertical"
        />
        </div>
        <div className="relative ">
            <p className="text-text font-semibold md:text-md text-sm">Rate: </p>
            <h3 className="text-text text-center font-bold text-3xl">{data.price_kwh500} <i className="fas fa-cent-sign"></i> 
            
            <sub className="text-sm ml-3 text-gray-500">/KWH</sub>
            </h3>
        </div>

        <div className="h-[80px] flex items-center justify-center">

        <Separator
        my="3" size="3"
        style={{width: '2px'}}
        color="gray"
        orientation="vertical"
        />
        </div>

        <div className="relative ">
            <p className="text-text font-semibold md:text-md text-sm">Term: </p>
            <h3 className="text-text font-bold text-3xl text-center">{data.term_value}
            <sub className="text-sm ml-1 text-gray-500">mo</sub>
            </h3>
        </div>

    </div>
  )
}
