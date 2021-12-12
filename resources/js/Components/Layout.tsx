import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-bg">
      {children}
    </div>
  )
}
