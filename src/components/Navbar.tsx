import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="flex gap-4 p-4 bg-gray-200 dark:bg-gray-800 text-lg font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Navbar