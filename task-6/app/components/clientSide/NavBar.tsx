import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

const NavBar = async () => {
  const session = await getServerSession(options)
  return (
    <div className='flex justify-between bg-slate-200 py-6 px-3 h-9'>
        <h1>SERA FELAGI</h1>
        <div className='flex  space-x-3 mr-5'>
            <Link href="/"> Home </Link>
            <Link href="/sign_in"> SignIn</Link>
            <Link href="/sign_up"> SignUp</Link>
            { session ? (
            <Link href="/api/auth/signout?callbackUrl =/sign_in">LogOut</Link>
            ) : (
              <Link href="/sign_in" >LogIn</Link>
            )
            }

        </div>
    </div>
  )
}

export default NavBar