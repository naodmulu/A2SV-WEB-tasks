import React from 'react'
import VerifyCard from '@/app/components/clientSide/VerifyCard'

const Verify_email = () => {
  return (
    <div className='mt-2 flex justify-center relative top-32'>
      <div className=''>
        <h1 className='mb-[25px] text-4xl font-black font-serif text-[#25324B] text-center'>Verify Email</h1>
        <p className='w-[408px] mt-5 mb-[45px] font-normal text-sm text-[#7C8493]'>We've sent a verification code to the email address you provided. To complete the verification process, please enter the code here.</p>

        <div className="w-[402px] h-72 py-10 ">
          <VerifyCard/>
        </div>


      </div>
    </div>
  )
}

export default Verify_email 