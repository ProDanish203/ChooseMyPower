import { fetchClients } from "@/lib/actions/fetchClients";

const Admin = async () => {

  const {data, success} = await fetchClients();
  // console.log(data)

  return (
    <>
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-10">
      <section className="max-w-[1400px] w-full mx-auto">

        <h3 className="text-center text-white text-5xl max-sm:text-3xl font-extrabold">Admin Page</h3>

        <div className="mt-10">
            <h3 className="text-3xl text-white underline cursor-pointer">Download CSV</h3>
        </div>

      </section>
    </main>
    </>
  )
}

export default Admin;