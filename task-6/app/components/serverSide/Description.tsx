"use client";
import React, { useEffect, useState } from 'react';
import DescriptiondProps from '@/app/types/Description_types';
import JobListing from '@/app/types/JobListing_types';
import OpportunitiesById from '@/app/Service/Fetch/OpportunitiesById';

const Description: React.FC<DescriptiondProps> = ({ index }) => {
  const [jsonData, setJsonData] = useState<JobListing | null>(null);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const data: JobListing = await OpportunitiesById(index);
        setJsonData(data);
      } catch (error) {
        setLoadingError('Failed to load data');
      }
    };
    fetchOpportunities();
  }, [index]);

  if (loadingError) {
    return (
      <div>{loadingError}</div>
    );
  }

  if (jsonData === null) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="w-[750px] border-2 py-9 pl-2 pr-4">
      {/* Description */}
      <div className=" mb-14 ">
        <h3 className="mt-3 mb-1 text-2xl font-serif font-bold">Description</h3>
        <div className="font-serif text-base">{jsonData.description}</div>
      </div>

      {/* Responsibilities */}
      <div className=" mb-14 ">
        <h3 className="mb-1 text-2xl font-serif font-bold">Responsibilities:</h3>
        <ul>
          {jsonData.responsibilities.split('\n').map((responsibility: string, idx: number) => (
            
            <li key={index} className=" mb-1 flex items-start">
            <svg
              className="w-6 h-6 p-1 text-green-500 mr-2 bg-green-500 bg-opacity-10 rounded-full"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm text-gray-800" key={idx}>{responsibility}</span>
          </li>
          ))}
        </ul>
      </div>

      {/* Ideal Candidate */}
      <div className=" mb-14 ">
        <h3 className="mt-3 mb-1 text-2xl font-serif font-bold">Ideal Candidate:</h3>
        <div className="font-serif text-base">{jsonData.idealCandidate}</div>
      </div>

      {/* When and Where */}
      <div className=" ">
      <h3 className="mt-3 mb-1 text-2xl font-serif font-bold">When & Where</h3>
      <div className="flex flex-shrink mt-4">
        <div className="">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z"
              />
              <circle cx="12" cy="9" r="2" />
            </svg>
          </div>
        </div>
        <div className="ml-4 text-gray-800">
          <p className="font-serif text-base">
            {jsonData.whenAndWhere}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Description;

