import { HomeForm } from "@/components/forms";
import { getHomeData } from "@/lib/actions/SEO/HomePage"

const HomeSeo = async () => {

    const {data, success} = await getHomeData('home');
    const {_id, heading, tagLine, aboutHeading, aboutPara1, aboutPara2, expertsTagline, servicesTagline, footerPara} = data;

  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-10">
      <section className="max-w-[1400px] w-full mx-auto">

        <h3 className="text-center text-white text-5xl max-sm:text-3xl font-extrabold">Home Page</h3>

        <div className="mt-10">
          <HomeForm id={_id} heading={heading} tagLine={tagLine} aboutHeading={aboutHeading} aboutPara1={aboutPara1} aboutPara2={aboutPara2} expertsTagline={expertsTagline} servicesTagline={servicesTagline} footerPara={footerPara}/>
        </div>

      </section>
    </main>
  )
}

export default HomeSeo