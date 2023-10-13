import { HomeForm } from "@/components/forms";
import { getHomeSeo } from "@/lib/actions/SEO/HomePage"

const HomeSeo = async () => {

    const {data, success } = await getHomeSeo('home');
    console.log(data, success);

  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-10">
      <section className="max-w-[450px] w-full mx-auto">

        <h3 className="text-center text-primary text-5xl max-sm:text-3xl font-extrabold">Home Page SEO</h3>

        <div className="mt-10">
          <HomeForm/>
        </div>

      </section>
    </main>
  )
}

export default HomeSeo