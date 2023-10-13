interface Props{
  title: string;
  center?: boolean;
  direction?: string;
}

export const Heading = ({title, center, direction}: Props) => {
  return (
    <h2 
    className={`${center && 'text-center'} text-5xl max-sm:text-3xl text-primary font-extrabold mb-5`}
    data-aos={`${direction ? `fade-${direction}`: 'fade-down'}`} data-aos-duration="1500"
    >
        {title}
    </h2>
  )
}
