import { ContactForm } from '@/components/forms'
import { Heading } from '@/components/helpers';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  return (
    <section className='sm:px-10 px-3 pb-10 bg-bg pt-32 min-h-[100vh]'>
        <ToastContainer/>        

        <div className='max-w-[1000px] w-full mx-auto'>
            <Heading title='Contact Us'/>
            <ContactForm/>
        </div>

        <div className='max-w-[1000px] mx-auto w-full my-10'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1772355.5167937349!2d-95.401291!3d29.817178000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1696375388180!5m2!1sen!2sin" width="1000" height="400" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </section>
  )
}

export default Contact