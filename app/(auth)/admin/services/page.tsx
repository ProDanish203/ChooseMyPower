import { ServiceCard } from "@/components/cards";
import { AddService } from "@/components/forms/SEO Forms/AddService";
import { getServicesSeo } from "@/lib/actions/SEO/ServicesPage";

const ServicesSeo = async () => {

  const {data, success} = await getServicesSeo();

  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-10">
      <section className="max-w-[1400px] w-full mx-auto">

        <h3 className="text-center text-white text-5xl max-sm:text-3xl font-extrabold">Services Page</h3>

        <AddService/> 

        <div className="mt-10 flex items-center flex-wrap justify-center gap-5 w-full mx-auto">
        {data?.map((info:any, i:number) => (
          <ServiceCard data={info} edit key={i} delay={(i % 4 + 2 ) * 50}/>
        ))}
        </div>

      </section>
    </main>
  )
}

export default ServicesSeo;