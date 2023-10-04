import React from 'react'

export const Loader = ({dark}: {dark:boolean}) => {
  return (
    <div className={`${dark ? 'lds-ellipsis dark': 'lds-ellipsis'}`}><div></div><div></div><div></div><div></div></div>
  )
}
