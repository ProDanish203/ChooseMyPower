import Image from 'next/image'

interface Props{
    image: string;
    name: string;
    post: string;
    delay?: number;
}

export const TeamCard = ({name, post, image, delay}: Props) => {
  return (
    <div className='hover:shadow-sm hover:scale-105 rounded-sm max-w-[350px] w-full'
    data-aos="fade-up" data-aos-delay={`${delay}`} data-aos-duration="1000"
    >
        
        <div className='image-overlay-container relative sm:h-[450px] h-[300px]'>
            <div className='image-overlay absolute top-0 left-0 z-40 h-full w-full'>

                <div className='flex items-center justify-center gap-3 h-full'>
                    <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-orange-600 text-bg text-lg'>
                        <i className='fab fa-facebook-f'></i>
                    </div>

                    <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-orange-600 text-bg text-lg'>
                        <i className='fab fa-twitter'></i>
                    </div>

                    <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-orange-600 text-bg text-lg'>
                        <i className='fab fa-pinterest'></i>
                    </div>

                    <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-orange-600 text-bg text-lg'>
                        <i className='fab fa-instagram'></i>
                    </div>
                </div>

            </div>
            <Image src={image} alt={name} fill
            className='object-cover rounded-md'
            />
        </div>

        <div className='text-center py-5 team-shadow'>
            <h4 className='text-primary text-xl'>{name}</h4>
            <h6 className='text-md text-gray-700'>{post}</h6>
        </div>

    </div>
  )
}
