"use client";
import React from 'react';
import GoogleButton from 'react-google-button';
import { signIn } from 'next-auth/react';
import Link from 'next/Link'

const SignUpWithGoogle = () => {
  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className='flex justify-center'>
      {/* <button
            className="flex items-center gap-2 text-[#4640DE] border-[#CCCCF5] border-[1px] rounded  py-2 w-[400px] justify-center"
            onClick={handleSignIn}
          >
            <p>Sign Up with Google</p>
          </button> */}
        <Link href="/api/auth/signin">
          <GoogleButton/>
          </Link>

    </div>
    
  );
};

export default SignUpWithGoogle;

