"use client"
import Image from "next/image";
import Link from "next/link";

interface Props{
    setShowModal: (val: boolean) => void;
    data: any;
}

export const RateModal = ({data, setShowModal}: Props) => {

  return (
    <div className="modal-bg flex items-center justify-center flex-col fixed top-0 left-0 w-full h-screen z-40 p-3">

        <div className="relative bg-gray-100 shadow-md rounded-md max-w-[1000px] max-h-[80vh] overflow-hidden overflow-y-auto w-full mx-auto"
        data-aos="flip-left" data-aos-duration="1200"
        >
            <div className="w-full sticky top-0 z-20 rounded-md py-2 px-4 flex items-center gap-2 justify-between bg-primary">
                <p className="text-white text-lg font-bold capitalize">Plan details</p>
                <i className="fas fa-times text-white text-2xl cursor-pointer" 
                onClick={() => setShowModal(false)}
                ></i>                
            </div>
    
        <div className="py-5 px-4 flex max-sm:flex-col xs:gap-10 justify-between gap-3 items-center ">
        
            <div className="flex max-sm:flex-col max-sm:gap-5 items-center">
                <div className="relative">
                    <Image src={data?.company_logo} alt={data?.company_name} width={200} height={150}/>
                </div>

                <div>
                    <p className="text-lg font-bold">{data?.company_name}</p>
                    <p className="text-sm text-gray-700 font-semibold">{data?.plan_name}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 max-sm:w-full">
                <Link href={`/plan/${data?.plan_id}?zip=${data?.zip_code}`}>
                <button className="bg-primary rounded-full max-sm:w-full max-sm:block text-lg text-white py-2.5 px-10 flex items-center shadow-sm hover:shadow-md hover:gap-3 gap-2 justify-center">
                    Select Plan
                    <i className="fas fa-arrow-right-long max-sm:ml-3"></i>
                </button>
                </Link>

                <Link href={data?.website} target="_blank" className="flex gap-2 items-center text-primary text-lg">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Website
                </Link>

                <Link href={`tel:${data?.enroll_phone}`} className="flex gap-2 items-center text-primary text-lg">
                    <i className="fa-solid fa-phone"></i>
                    {data?.enroll_phone}
                </Link>
            </div>

        </div>

        <div className="bg-gray-400 w-full h-[2px] mb-3"/>

        <div className="py-1 px-4 flex max-sm:flex-col max-sm:items-start items-center gap-4">
            <Link href={data?.fact_sheet} target="_blank" className="flex gap-2 items-center text-primary">
                <i className="far fa-folder text-xl"></i>
                <p className="font-semibold">Electricity Facts Table</p>
            </Link>

            <Link href={data?.terms_of_service} target="_blank" className="flex gap-2 items-center text-primary">
                <i className="far fa-folder text-xl"></i>
                <p className="font-semibold">Terms & Services</p>
            </Link>

            <Link href={data?.yrac_url} target="_blank" className="flex gap-2 items-center text-primary">
                <i className="far fa-folder text-xl"></i>
                <p className="font-semibold">YRAC</p>
            </Link>
        </div>
        
        <div className="py-2 px-4 flex max-sm:flex-col-reverse max-sm:items-start items-center gap-10 pb-10">
            <div className="flex flex-col justify-center gap-1">   
                <div className="flex items-center gap-1">
                    <p className="py-1.5 px-11 text-center bg-gray-300 text-primary text-lg font-semibold">Rate 500kwh</p>
                    <p className="py-1.5 px-10 text-center bg-gray-300 text-primary text-lg"><span className="font-semibold">{data?.price_kwh500}</span> <i className="fas fa-cent-sign "></i> <span className="text-sm text-gray-600">/kwh</span></p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="py-1.5 px-10 text-center bg-gray-300 text-primary text-lg font-semibold">Rate 1000kwh</p>
                    <p className="py-1.5 px-10 text-center bg-gray-300 text-primary text-lg"><span className="font-semibold">{data?.price_kwh1000}</span> <i className="fas fa-cent-sign "></i> <span className="text-sm text-gray-600">/kwh</span></p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="py-1.5 px-10 text-center bg-gray-300 text-primary text-lg font-semibold">Rate 2000kwh</p>
                    <p className="py-1.5 px-10 text-center bg-gray-300 text-primary text-lg"><span className="font-semibold">{data?.price_kwh2000}</span> <i className="fas fa-cent-sign "></i> <span className="text-sm text-gray-600">/kwh</span></p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center max-sm:flex-col max-xs:items-start max-sm:gap-2 gap-10">
                    <div>
                        <h4 className="md:text-5xl text-4xl font-extrabold text-primary ">{data?.price_kwh500}<i className="fas fa-cent-sign"></i></h4>
                        <p className="text-gray-600 font-semibold">Per KWH</p>
                    </div>

                    <div>
                        <h4 className="md:text-5xl text-4xl font-extrabold text-primary ">{data?.term_value} month</h4>
                        <p className="text-gray-600 font-semibold">{data?.rate_type}</p>
                    </div>
                </div>

                <div className="mt-3">
                    <h4 className="text-primary text font-semibold flex items-center gap-2">
                        <i className="fas fa-calendar-xmark"></i>
                        <p>{data?.pricing_details}</p>
                    </h4>
                </div>
            </div>
        </div>

        </div>

    </div>
  )
}
