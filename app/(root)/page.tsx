import { ContactForm } from "@/components/forms";
import { Heading } from "@/components/helpers";
import { About, Counter, Hero, Providers, Services } from "@/components/shared";
import { getHomeData } from "@/lib/actions/SEO/HomePage";
import Image from "next/image";
import { toast } from "react-toastify";

export default async function Home() {

  const {data, success} = await getHomeData("home")
  const {heading, tagLine, aboutHeading, aboutPara1, aboutPara2, expertsTagline, servicesTagline, footerPara} = data;

  if(!success) return toast.error("Something went wrong!");
  return (
    <main>

      <Hero heading={heading} tagLine={tagLine}/>

      <Providers/>

      <About heading={aboutHeading} para1={aboutPara1} para2={aboutPara2}/>

      <Services tagLine={servicesTagline}/>

      <Counter/>

      <section className="sm:px-10 px-3 py-10 ">
      <div className="flex flex-wrap gap-20 items-center justify-center">
        <div className='max-w-[650px] w-full'>
          <Heading title='Contact Us'/>
          <ContactForm/>
        </div>

        <div className="max-lg:hidden"
        data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000"
        >
          <div className="relative">
            <Image src="/images/contact-us.png" alt='contact-us' width={500} height={400}
            className="object-contain rounded-md"
            />
          </div>
        </div>

      </div>
      </section>

    </main>
  )
}
