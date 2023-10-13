import { SolarForm } from '@/components/forms';
import { getSolarSeo } from '@/lib/actions/SEO/SolarPage';

const SolarSeo = async () => {

    const {data, success } = await getSolarSeo('solar');
    const {_id, heading, para1, para2, subHeading1, subHeading2, subPara1, subPara2} = data;

  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-10">
      <section className="max-w-[1400px] w-full mx-auto">

        <h3 className="text-center text-primary text-5xl max-sm:text-3xl font-extrabold">Solar Page SEO</h3>

        <div className="mt-10">
            <SolarForm id={_id} heading={heading} para1={para1} para2={para2} subHeading1={subHeading1} subHeading2={subHeading2} subPara1={subPara1} subPara2={subPara2}/>
        </div>

      </section>
    </main>
  )
}

export default SolarSeo;