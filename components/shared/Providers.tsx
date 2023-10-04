import Image from "next/image"
import { Heading } from "../helpers"
import { providerData } from "@/utils/data"

export const Providers = () => {
  return (
    <section className="sm:px-10 px-3 py-10 bg-bg">

      <Heading title="Our Providers" center={true}/>

      <div className="max-md:w-full flex flex-wrap items-center justify-center gap-5 ">
        {
          providerData.map((provider, i) => (
          <div className="py-4 px-4 rounded-sm shadow-sm cursor-pointer bg-secondary" key={i}>
            <div className="relative">
              <Image src={provider.image} alt={provider.name} width={200} height={140}
              className="object-contain hide-img-bg"
              />
            </div>
          </div>
          ))
        }
    
        

      </div>

    </section>
  )
}
