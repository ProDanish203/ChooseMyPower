import Image from "next/image"

export const ServiceCard = () => {
  return (
    <div className="relative hover:scale-105 max-w-[400px] flex flex-col gap-3 justify-center items-center shadow-sm px-3 py-3 bg-gray-200 rounded-md">
        <div className="relative w-full h-[250px] mb-2">
            <Image src="/images/services/solar.jpg" alt="Solar-services" fill
            className="object-cover rounded-md hover:scale-95"
            />
        </div>

        <div>
            <h3 className="text-2xl max-sm:text-xl text-primary font-bold mb-2">
            Trade And Sale Of Energy (Oil, Gas, Electricity, Utilities & Mining)
            </h3>

            <p className="text-gray-700 max-sm:text-sm">
            Choose My Power LLC is a leading energy broker. We provide brokerage and consulting services for the trade and sale of energy, including oil, gas, electricity, utilities, and mining...
            </p>

            <button className="mt-2 bg-accent text-white px-3 py-2 rounded-sm hover:bg-primary">
                Read More
            </button>
        </div>
    </div>
  )
}
