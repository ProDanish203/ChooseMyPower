import { ContactForm } from "@/components/forms";
import { Heading } from "@/components/helpers";
import { About, Counter, Hero, Providers, Services, Team } from "@/components/shared";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main>
      <ToastContainer/>

      <Hero/>

      <Providers/>

      <About/>

      <Team/>

      <Services/>

      <Counter/>

      <section className="sm:px-10 px-3 py-10 ">
      <div className="flex flex-wrap gap-20 items-center justify-center">
        <div className='max-w-[450px] w-full'>
          <Heading title='Contact Us'/>
          <ContactForm/>
        </div>

        <div className="max-lg:hidden">
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
