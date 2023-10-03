import { Hero, Providers } from "@/components/shared";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main>
      <ToastContainer/>

      <Hero/>

      <Providers/>

    </main>
  )
}
