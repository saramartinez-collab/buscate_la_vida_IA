import React from 'react'

export function Button({ children, className = '', variant = 'default', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium transition rounded-md focus:outline-none focus:ring disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    default: 'bg-black text-white hover:opacity-90',
    outline: 'border border-zinc-300 text-zinc-900 hover:bg-zinc-50',
    ghost: 'text-zinc-900 hover:bg-zinc-100'
  }
  const sizes = { sm: 'h-8 px-3 text-sm', md: 'h-10 px-4', lg: 'h-12 px-5 text-base' }
  return (
    <button className={[base, variants[variant], sizes[size], className].join(' ')} {...props}>
      {children}
    </button>
  )
}
