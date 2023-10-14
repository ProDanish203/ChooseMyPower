import { ServicesForm } from "@/components/forms/SEO Forms/ServicesForm";
import { getService } from "@/lib/actions/SEO/ServicesPage";

const ServiceSeo = async ({params}: {params: {id: string}}) => {
  const {id} = params;
  const {data, success} = await getService(id);
  const {_id, title, para1, para2, image} = data;

  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-10">
      <section className="max-w-[1400px] w-full mx-auto">

        <h3 className="text-center text-white text-5xl max-sm:text-3xl font-extrabold">Services Page</h3>

        <div className="mt-10">
            <ServicesForm id={_id} title={title} para1={para1} para2={para2} image={image}/>
        </div>

      </section>
    </main>
  )
}

export default ServiceSeo;