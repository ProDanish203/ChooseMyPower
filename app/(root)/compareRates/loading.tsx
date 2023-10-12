import React from 'react'

const Loading = () => {
  return (
    <div className='text-center flex items-center justify-center w-full h-[50vh] bg-primary my-30'>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading