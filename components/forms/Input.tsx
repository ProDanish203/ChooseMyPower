"use client"

interface Props{
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({type, placeholder, value, onChange}: Props) => {
  return (
    <div className='w-full'>
      <input type={type}
      placeholder={placeholder}
      className='border-[1px] border-gray-500 px-4 py-2.5 outline-none w-full'
      required
      value={value}
      onChange={onChange}
      />
    </div>
  )
}
