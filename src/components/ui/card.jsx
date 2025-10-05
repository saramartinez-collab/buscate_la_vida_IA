import React from 'react'

export function Card({ className = '', children }) {
  return <div className={['border rounded-xl bg-white', className].join(' ')}>{children}</div>
}
export function CardHeader({ children }) {
  return <div className="p-5 border-b">{children}</div>
}
export function CardTitle({ children, className = '' }) {
  return <h3 className={['text-lg font-semibold', className].join(' ')}>{children}</h3>
}
export function CardContent({ children, className = '' }) {
  return <div className={['p-5', className].join(' ')}>{children}</div>
}
