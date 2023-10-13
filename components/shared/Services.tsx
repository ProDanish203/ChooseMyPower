import { ServiceCard } from "../cards"
import { Heading, Subheading } from "../helpers"
import { getServicesSeo } from "@/lib/actions/SEO/ServicesPage";

interface Props{
  tagLine: string;
}

export const Services = async ({tagLine}: Props) => {

  const {data, success} = await getServicesSeo();

  return (
    <section className="sm:px-10 px-3 py-10 mt-5 max-w-[1400px] w-full mx-auto"> 

        <div className="text-center">
            <Subheading title="What We Do"/>
            <Heading title="Our Services"/>

            <p className="text-gray-700 text-center sm:max-w-[60%] mx-auto sm:text-lg">{tagLine}</p>

            <p className="text-gray-700 mt-2 text-center sm:max-w-[60%] mx-auto sm:text-lg">
            The right power to choose is choosemypower!
            </p>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-5 w-full mx-auto mt-5">
        {data?.map((info: any, i: number) => (
          <ServiceCard data={info} key={i} delay={(i % 4 + 2 ) * 50}/>
        ))}
        </div>

    </section>
  )
}
