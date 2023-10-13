"use client"
interface Props{
    type: string;
    placeholder: string;
    value: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const SEOInput = ({type, placeholder, name, value, onChange}: Props) => {
    return (
    <div className='w-full flex flex-col gap-2 justify-center'>

        <label htmlFor="">{placeholder}</label>

        <input type={type}
        placeholder={placeholder}
        className='border-[1px] rounded-md border-gray-500 px-4 py-2.5 outline-none w-full'
        autoComplete="off"
        required
        name={name}
        value={value}
        onChange={onChange}
        />
    </div>
    )
}