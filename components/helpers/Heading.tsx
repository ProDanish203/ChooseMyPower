interface Props{
    title: string;
}

export const Heading = ({title}: Props) => {
  return (
    <h2 className='text-4xl max-sm:text-xl text-primary font-semibold mb-5'>
        {title}
    </h2>
  )
}
