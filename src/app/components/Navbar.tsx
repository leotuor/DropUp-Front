'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DropdownMenu from './dropdownMenu/DropdownMenu';
import LoginMenu from './loginMenu/LoginMenu';

function Navbar() {
  return (
    <div className="w-full bg-teal-300 rounded-b shadow-md py-1">
      <nav className="flex align-center">
        <DropdownMenu className='my-2 ml-2'/>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" >
            <Image
              className='w-auto h-auto'
              src="/logo.png"
              alt="logo"
              width={120}
              height={40}
              priority={true}
            />
          </Link>
        </div>
        <div>
          <LoginMenu/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar