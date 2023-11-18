"use client"
interface Props{
    type: string;
    placeholder: string;
    value: string;
    name: string;
    handleChange: any
    icon: string;
}

export const NameInput = ({type, placeholder, icon, name, value, handleChange}: Props) => {
  return (
    <div className='w-full flex flex-col gap-2 justify-center'>

        <label htmlFor="" className="text-black text-md">{placeholder}</label>
        <div className="border-[1px] border-slate-500 rounded-md  px-4 py-2.5 flex items-center justify-between gap-2 relative">
            <input type={type}
            placeholder={placeholder}
            className='bg-transparent outline-none w-full'
            autoComplete="off"
            required
            name={name}
            value={value}
            onChange={handleChange}
            />

            <i className={`fas fa-${icon} text-slate-600 text-lg`}></i>
        </div>
    </div>
  )
}
