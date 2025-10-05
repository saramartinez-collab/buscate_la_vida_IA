import React from 'react'

export function Input({ className = '', ...props }) {
  return <input className={['h-10 px-3 border rounded-md w-full', className].join(' ')} {...props} />
}
