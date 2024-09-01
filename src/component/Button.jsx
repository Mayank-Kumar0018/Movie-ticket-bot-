import React from 'react'

function Button({className , children , ...prop}) {
  return (
    <button className={`bg-blue-500 text-white p-2 w-full rounded-lg ${className}`} {...prop}>{children}</button>
  )
}

export default Button