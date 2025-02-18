"use server"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DropdownMenu from '@/app/components/Navbar/DropdownMenu';
import LoginMenu from '@/app/components/Navbar/LoginMenu';
import { auth } from '@/auth';
import UserAvatar from './UserMenu';
import { logoutFunction } from "@/app/components/Navbar/SignOutAction";
import { signInFunction } from "@/app/components/Navbar/SignInAction";

async function Navbar() {
  const session = await auth();
  const user = session?.user;
  
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
          { user ?
            <UserAvatar userImage={`${user.image}`} logout={logoutFunction}/>
            :
            <LoginMenu login={signInFunction}/>
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar