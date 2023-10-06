import { servicesData } from "@/utils/data"
import { ServiceCard } from "../cards"
import { Heading, Subheading } from "../helpers"

export const Services = () => {
  return (
    <section className="sm:px-10 px-3 py-10 mt-5 max-w-[1400px] w-full mx-auto"> 

        <div className="text-center"
        
        >
            <Subheading title="What We Do"/>
            <Heading title="Our Services"/>

            <p className="text-gray-700 text-center sm:max-w-[60%] mx-auto sm:text-lg">
            At Choose Power LLC, we empower our clients to make intelligent energy procurement decisions. We work closely with energy suppliers and use that relationship to secure our clients a better energy deal.
            </p>

            <p className="text-gray-700 mt-2 text-center sm:max-w-[60%] mx-auto sm:text-lg">
            The right power to choose is choosemypower!
            </p>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-5 w-full mx-auto mt-5">
        {servicesData.map((data, i) => (
          <ServiceCard data={data} key={i} delay={(i % 4 + 2 ) * 50}/>
        ))}
        </div>

    </section>
  )
}
