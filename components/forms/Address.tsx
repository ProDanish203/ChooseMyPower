"use client"
import React, { useState } from 'react'


export const Address = () => {

    const [address, setAddress] = useState("")

  return (
    <>
    <form
    className='max-w-[400px] w-full'
    >
        <div className='flex items-center justify-between gap-2 py-2 px-3 text-lg  border border-primary rounded-md'>
            <input type="text" placeholder='Enter Full Address'
            className='w-full outline-none border-none bg-transparent'
            name='address'
            value={address}
            onChange={(e:any) => setAddress(e.target.value)}
            />
            <i className='fas fa-location-dot text-xl'></i>
        </div>
    </form>
    </>
  )
}
