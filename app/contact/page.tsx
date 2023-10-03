import { ContactForm } from '@/components/forms'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  return (
    <section className='sm:px-10 px-3 pb-10 bg-bg hero-section pt-32 min-h-[100vh]'>
        <ToastContainer/>        

        <ContactForm/>

    </section>
  )
}

export default Contact