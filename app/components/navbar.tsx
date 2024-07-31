"use client"
import React, { useState } from 'react' 


import Link from 'next/link'


export default function Navbar() {
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () : void =>{
       setisClick(!isClick)
    }
  return (
    <>
    <nav className="bg-black">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           <div className="flex items-center">
              <div className="flex-shrink-0">
                 <Link href="/" className='flex flex-row gap-5 items-center text-white '> <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                 <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></div>
                 <span>Store</span> </Link>
              </div>
           </div>
           <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                 <Link href="/"
                  className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                 Home
                 </Link>
                 <Link href="/products"
                  className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                 Products
                 </Link>
                 <Link href="/form"
                  className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                 Form
                 </Link>
                 <Link href="/contact"
                  className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                 Contact
                 </Link>
              </div>
           </div>
           <div className="md:hidden flex items-center">
              <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-white
              hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
               onClick={toggleNavbar}>
                 {isClick ? (
                    <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                     <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     strokeWidth={2}
                     d='M6 18L18 6M6 6L12 12'
                     />
                    </svg>
                 ) : (
                    <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                     <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     strokeWidth={2}
                     d='M6 6h16M4 12h16m-7 6h7'
                     />
                    </svg>
                 )}
              </button>
           </div>
        </div>
     </div>
     {isClick && (
        <div className="md:hidden">
           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/"
                  className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
                 Home
                 </Link>
                 <Link href="/products"
                  className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
                 Products
                 </Link>
                 <Link href="/form"
                  className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
                 Form
                 </Link>
                 <Link href="/contact"
                  className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
                 Contact
                 </Link>
           </div>
        </div>
     )}
    </nav>
    </>
  )
}
