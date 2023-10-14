import React from 'react'

const Loading = () => {
  return (
    <div className='text-center flex items-center justify-center w-full min-h-[70vh] h-full my-30'>
        <div className="lds-roller dark"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading