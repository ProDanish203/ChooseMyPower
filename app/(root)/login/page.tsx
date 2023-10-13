"use client"
import { Loader } from "@/components/helpers";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import { toast } from "react-toastify"; 

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        if(!email) return toast.error("Email is required")
        if(!password) return toast.error("Password is required")

        try{
        setLoading(true);

        signIn("credentials", {
            email, password,
            redirect: false
        }).then(({ ok, error}:any) => {
            if(ok){
            router.push('/admin')
            }else{
              toast.error(error);
            }
        })

        setLoading(false);
        }catch(error){
        console.log(error);
        setLoading(false);
        toast.error("Something went wrong")
        }
    }

  return (
    <main className=" px-[9%] max-lg:px-[4%] py-5 pt-24">
      
      <section className='max-w-[450px] w-full mx-auto'>
        <h3 className='text-5xl max-md:text-3xl font-extrabold text-center mb-10 text-primary'
        data-aos='fade-up' data-aos-duration='1200'
        >Login</h3>

        <form onSubmit={handleLogin} className="bg-gray-400 flex flex-col justify-center rounded-md gap-5 px-3 py-5" 
        data-aos='fade-up' data-aos-delay='100' data-aos-duration='1200'
        >

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-primary font-semibold">Email Address</label>

            <input type="email" placeholder='Email Address' required id="email" autoComplete="off"
            className='px-3 py-2 rounded-md w-full bg-neutral-800 outline-none text-white'
            value={email}
            onChange={(e:any) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="text-primary font-semibold">Password</label>

            <input type="password" placeholder='Password' required id="password" autoComplete="off"
            className='px-3 py-2 rounded-md w-full bg-neutral-800 outline-none text-white'
            value={password}
            onChange={(e:any) => setPassword(e.target.value)}
            />
          </div>

          <div className="w-full">
            <button type="submit" disabled={loading}
            className="bg-primary text-white text-lg py-2.5 rounded-md w-full mt-2"
            >{loading ? <Loader dark={false}/>: "Login"}</button>
          </div>

        </form>
      </section>

    </main>
  )
}

export default Login;