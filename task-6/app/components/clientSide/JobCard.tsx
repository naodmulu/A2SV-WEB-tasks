'use client';
import React from 'react';
import jsonData from '@/app/Jobs';
import JobCardProps from '@/app/types/JobCard_types';



const JobCard: React.FC<JobCardProps> = ({index}) => {
    const id = 0;
    const jobList = jsonData.job_postings[index];

    return (
        <div className="w-4/5 min-w-80 p-6 rounded-3xl bg-white shadow-lg">
        <div className='h-fit p-2 flex text-black bg-white'>
            {/* logo */}
            <div className='mr-5 ml-2'>
            <img src={jobList.image } alt={`${jobList.title} logo`} />
            </div>
            
            <div >
            {/* Title */}
            <div className='font-mono leading-6 text-base font-semibold text-[#25324b]' >{jobList.title}</div>
            
            {/* Company */}
            <div className='text-base font-mono leading-6 font-normal text-[#7C8493]'>{jobList.company}</div>
            
            {/* Description */}
            <div className='font-mono text-base font-normal leading-6 text-[#25324b]'>{jobList.description}</div>


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
