"use client";
import React, { useEffect, useState } from 'react';
import AboutProps from '@/app/types/About_types';
import JobListing from '@/app/types/JobListing_types';
import OpportunitiesById from '@/app/Service/Fetch/OpportunitiesById';

const About: React.FC<AboutProps> = ({ index }) => {
  const [job, setJob] = useState<JobListing | null>(null);
  const [loadingError, setLoadingError] = useState<boolean>(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobData = await OpportunitiesById(index);
        setJob(jobData);
      } catch (error) {
        setLoadingError(true);
      }
    };
    fetchJob();
  }, [index]);

  if (loadingError) {
    return <div>Loading Error</div>;
  }

  if (job === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-[285.5px] border-solid border-2 p-3 h-fit'>
      {/* About */}
      <div className="text-wrap w-[285.5px]">
        <h1>About</h1>
        <p>Posted on: {new Date(job.datePosted).toLocaleDateString()}</p>
        <p>Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
        <p>Location: {job.location.join(', ')}</p>
        <p>Start Date: {new Date(job.startDate).toLocaleDateString()}</p>
        <p>End Date: {new Date(job.endDate).toLocaleDateString()}</p>
      </div>

      {/* Categories */}
      <div className="flex mt-4 flex-col">
        <h1>Categories</h1>
        <div className='flex flex-wrap'>
          {job.categories.map((category, idx) => (
            <div key={idx} className='mr-2 mt-1 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-[#EB8533] bg-opacity-10 border-y border-x border-[#EB8533] text-[#EB8533] min-w-fit w-14 text-center font-semibold text-xs font-mono border-solid'>
              {category.split(" ")[0]}
            </div>
          ))}
        </div>
      </div>

      {/* Required Skills */}
      <div className="mt-2">
      <h3 className="text-lg font-bold text-gray-900">Required Skills</h3>
      <div className="flex flex-wrap mt-2">
        {job.requiredSkills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default About;
