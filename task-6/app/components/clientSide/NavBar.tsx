import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

const NavBar = async () => {
  const session = await getServerSession(options);

  return (
    <div className='flex w-full justify-between bg-slate-200 py-6 px-3 h-9'>
      <h1 className='font-bold text-xl'>SERA FELAGI</h1>
      <div className='flex space-x-3 mr-5'>
        <Link href="/" className='hover:text-blue-500 transition-colors duration-200'> Home </Link>
        <Link href="/bookmarks" className='hover:text-blue-500 transition-colors duration-200'> Bookmarks</Link>
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/sign_in" className='hover:text-blue-500 transition-colors duration-200'>
            LogOut
          </Link>
        ) : (
          <Link href="/sign_in" className='hover:text-blue-500 transition-colors duration-200'>LogIn</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
