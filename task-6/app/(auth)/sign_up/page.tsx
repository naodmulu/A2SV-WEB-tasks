import React from 'react'
import SignUpWithGoogle from '@/app/components/clientSide/SignUpWithGoogle'
import SignUpForm from '@/app/components/clientSide/SignUpForm'

const SignUp = () => {
  return (
    <div className='mt-2 flex justify-center relative top-9 py-3'>
      <div>
      
      <div>
        <h1 className='min-w-[408px] p-1 pb-1 mb-5 mt-1 text-[#25324B] font-black text-4xl text-center'>
                  SignUp Today!
        </h1>
            <SignUpWithGoogle/>
      </div>
      
      <div className='mt-5'>
        <p className='text-center mb-6' >Or SignUp with Email</p>
          <SignUpForm/>
      </div>
      
      </div>
    </div>
  )
}

export default SignUp