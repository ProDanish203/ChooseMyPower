import { TeamCard } from "../cards"
import { Heading } from "../helpers"


export const Team = () => {
  return (
    <section className='sm:px-10 px-3 py-10 max-w-[1100px] w-full mx-auto'>
        
        <Heading title="Meet The Experts" center/>
        <p className="text-gray-700 text-center sm:text-lg">
        At Choose My Power LLC, we bring the experience and expertise to ensure you get the lowest energy rates. Our mission is to help businesses and consumers reduce their energy bills.
        </p>

        <div className="grid-3 mt-5 mx-auto w-full">
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
        </div>

    </section>
  )
}
