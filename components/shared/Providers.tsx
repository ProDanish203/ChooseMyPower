import Image from "next/image"
import { Heading } from "../helpers"
import { providerData } from "@/utils/data"

export const Providers = () => {
  return (
    <section className="sm:px-10 px-3 py-10 bg-bg">

      <Heading title="Our Providers" center={true}/>

      <div className="max-md:w-full flex flex-wrap items-center justify-center gap-5 ">
        {
          providerData.map((provider, i) => {
            const delay = (i % 4 + 2 ) * 50;
            return (
              <div className="py-4 px-4 rounded-sm shadow-sm cursor-pointer bg-gray-200" key={i}
              data-aos="fade-up" data-aos-delay={`${delay}`} data-aos-duration="1200"
              >
                <div className="relative">
                  <Image src={provider.image} alt={provider.name} width={130} height={80}
                  className="object-contain hide-img-bg"/>
                </div>
              </div>
              ) 
          })
        }
    
        

      </div>

    </section>
  )
}
