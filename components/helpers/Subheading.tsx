import React from 'react'

export const Subheading = ({title}: {title: string}) => {
  return (
    <h3 className='text-orange-600 font-semibold text-sm'>
        {title}
    </h3>
  )
}
