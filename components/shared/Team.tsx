import { teamData } from "@/utils/data"
import { TeamCard } from "../cards"
import { Heading } from "../helpers"

interface Props{
  tagLine: string;
}

export const Team = ({tagLine}: Props) => {
  return (
    <section className='sm:px-10 px-3 py-10 max-w-[1400px] w-full mx-auto'>
        
        <Heading title="Meet The Experts" center/>
        <p className="text-gray-700 text-center sm:text-lg sm:max-w-[60%] mx-auto">
        {tagLine}
        </p>

        <div className="flex flex-wrap items-center justify-center sm:gap-10 gap-5 mt-5">
        {teamData.map((data, i) => {
          const delay = (i % 4 + 2 ) * 50;
          return (
            <TeamCard name={data.name} post={data.post} image={data.image} delay={delay}/>
          )
        })}
        </div>

    </section>
  )
}
