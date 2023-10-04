interface Props{
  title: string;
  center?: boolean
}

export const Heading = ({title, center}: Props) => {
  return (
    <h2 className={`${center && 'text-center'} text-4xl max-sm:text-2xl text-primary font-semibold mb-5`}>
        {title}
    </h2>
  )
}
