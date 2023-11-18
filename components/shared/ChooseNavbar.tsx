import React from 'react'

export const ChooseNavbar = ({step}: {step:number}) => {
  return (
    <nav className='flex flex-wrap items-center justify-center gap-5 py-4 bg-slate-600 px-5 w-full text-white'>
        
        <p className='flex items-center gap-2 max-xs:gap-1 justify-center md:text-xl'>
            <i className={`fas ${step >= 1 ? 'text-green-500 fa-check-circle' : 'fa-circle-xmark'}`}></i>
            <span>Plan</span>
        </p>

        <p className='flex items-center gap-2 max-xs:gap-1 justify-center md:text-xl'>
            <i className={`fas ${step >= 2 ? 'text-green-500 fa-check-circle' : 'fa-circle-xmark'}`}></i>
            <span>Start Date</span>
        </p>

        <p className='flex items-center gap-2 max-xs:gap-1 justify-center md:text-xl'>
            <i className={`fas ${step >= 3 ? 'text-green-500 fa-check-circle' : 'fa-circle-xmark'}`}></i>
            <span>Info</span>
        </p>

        <p className='flex items-center gap-2 max-xs:gap-1 justify-center md:text-xl'>
            <i className={`fas ${step >= 4 ? 'text-green-500 fa-check-circle' : 'fa-circle-xmark'}`}></i>
            <span>Billing</span>
        </p>

        <p className='flex items-center gap-2 max-xs:gap-1 justify-center md:text-xl'>
            <i className={`fas ${step >= 5 ? 'text-green-500 fa-check-circle' : 'fa-circle-xmark'}`}></i>
            <span>Complete</span>
        </p>

    </nav>
  )
}
