import Image from "next/image"
import Link from "next/link";

interface Props{
  data: {
    image: string;
    title: string;
    slug: string;
    desc: string;
    shortDesc: string;
  },
  delay: number
}

export const ServiceCard = ({data, delay}: Props) => {
  return (
    <div className="relative hover:scale-105 max-w-[400px] flex flex-col gap-3 justify-center items-center shadow-sm px-3 py-3 bg-gray-200 rounded-md"
    data-aos="fade-up" data-aos-delay={`${delay}`} data-aos-duration="1200"
    >
        <div className="relative w-full h-[250px] mb-2">
            <Image src={data.image} alt={data.slug} fill
            className="object-cover rounded-md hover:scale-95"
            />
        </div>

        <div>
            <h3 className="text-2xl max-sm:text-xl hover:text-accent  text-primary font-bold mb-2">
            <Link href={`/services/${data.slug}`}>
              {data.title}
            </Link>
            </h3>

            <p className="text-gray-700 max-sm:text-sm">
            {data.shortDesc}
            </p>

            <Link href={`/services/${data.slug}`}>
              <button className="mt-2 bg-accent text-white px-3 py-2 rounded-sm hover:bg-primary">
                Read More
              </button>
            </Link>
        </div>
    </div>
  )
}
