import Image from "next/image"
import Link from "next/link";

interface Props{
  data: {
    _id: string;
    image: string;
    title: string;
    para1: string;
    para2: string;
  },
  delay: number;
  edit?: boolean;
  path?: string;
}

export const ServiceCard = ({data, delay, edit, path}: Props) => {
  return (
    <div className={`relative hover:scale-105 max-w-[400px] flex flex-col gap-3 justify-center items-center shadow-sm px-3 py-3 ${edit ? 'bg-blackAccent': 'bg-gray-200'}  rounded-md`}
    data-aos="fade-up" data-aos-delay={`${delay}`} data-aos-duration="1200"
    >
        <div className="relative w-full h-[250px] mb-2">
            <Image src={data.image} alt={data.title} fill
            className="object-cover rounded-md hover:scale-95"
            />
        </div>

        <div>
            <h3 className={`text-2xl max-sm:text-xl hover:text-accent ${edit ? 'text-white': 'text-primary'}  font-bold mb-2`}>
            {edit ? data.title : (
              <Link href={`/service/${data._id}`}>
                {data.title}
              </Link>
            )}
            </h3>

            <p className="text-gray-600 max-sm:text-sm">
            {data.para1.substring(0, 200)}...
            </p>

            <Link href={`${edit ? `/admin/services/${data._id}`: `/services/${data._id}`}`}>
              <button className="mt-2 min-w-[150px] bg-accent text-white px-3 py-2 rounded-sm hover:bg-primary">
                {edit ? "Edit": "Read More"}
              </button>
            </Link>
        </div>
    </div>
  )
}
