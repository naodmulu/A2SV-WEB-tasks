import React from 'react'
import Description from '../components/serverSide/Description'
import About from '../components/serverSide/About'

const Applicant = () => {
  return (
    <div className="w-full p-5 flex justify-between ">
      

      {/* Description */}
      <Description index={0}/>
      
      {/* About */}
      <About index={0}/>
      
    </div>
  )
}

export default Applicant