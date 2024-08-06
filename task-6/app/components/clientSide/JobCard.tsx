'use client';
import React, { useEffect, useState } from 'react';
import jsonData from '@/app/Service/Fetch/OpportunitiesById';
import JobCardProps from '@/app/types/JobCard_types';
import opportunitiesById from '@/app/Service/Fetch/Opportunities';
import JobListing from '@/app/types/JobListing_types';
import OpportunitiesById from '@/app/Service/Fetch/OpportunitiesById';



const JobCard: React.FC<JobCardProps> = ({index}) => {

    const [jsonData, setJsonData] = useState<JobListing | null>(null);
  const [loadingError, setLoadingError] = useState<boolean>(false);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const data: JobListing = await OpportunitiesById(index);
        console.log(data)
        setJsonData(data);
      } catch (error) {
        setLoadingError(true);
      }
    };
    fetchOpportunities();
  }, []);

  if (loadingError) {
    return (
      <div>Loading error</div>
    );
  }

  if (jsonData === null) {
    return (
        <div className="w-4/5 h-2 min-w-80 p-6 rounded-3xl  shadow-lg">
        Loading...
        </div>
    );
  }
  

    return (
        <div className="w-4/5 min-w-80 p-6 rounded-3xl bg-white shadow-lg">
        <div className='h-fit p-2 flex text-black bg-white'>
            {/* logo */}
            <div className='mr-5 ml-2'>
            <img  alt={`${jsonData.title} logo`} />
            </div>
            
            <div >
            {/* Title */}
            <div className='font-mono leading-6 text-base font-semibold text-[#25324b]' >{jsonData.title}</div>
            
            {/* Company */}
            <div className='text-base font-mono leading-6 font-normal text-[#7C8493]'>{jsonData.orgName}</div>
            
            {/* Description */}
            <div className='font-mono text-base font-normal leading-6 text-[#25324b]'>{jsonData.description}</div>


            {/* symbol */}
            <div className= "flex mt-2 "> 
                {/* 6px, 10px, 6px, 10px */}
                <div className='mr-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-black text-white min-w-fit w-14 text-center font-semibold text-xs font-mono border-solid'>In Person</div>
                <div className='mr-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-black text-white min-w-fit w-14 text-center font-semibold text-xs font-mono border-solid'>Education</div>
                <div className='mr-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-black text-white min-w-fit w-14 text-center font-semibold text-xs font-mono border-solid'> IT</div>

            </div>
            </div>
        </div>
        </div>);
}

export default JobCard;
