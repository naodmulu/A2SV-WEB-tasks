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
    <div className="w-[750px] border-2 pl-2 pr-4">
      {/* Description */}
      <div>
        <h3 className="mt-3 mb-1 text-2xl font-serif font-bold">Description</h3>
        <div className="font-serif text-base">{jsonData.description}</div>
      </div>

      {/* Responsibilities */}
      <div>
        <h3 className="mt-3 mb-1 text-2xl font-serif font-bold">Responsibilities:</h3>
        <ul>
          {jsonData.responsibilities.split('\n').map((responsibility: string, idx: number) => (
            <li className="font-serif text-base" key={idx}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* Ideal Candidate */}
      <div>
        <h3 className="mt-3 mb-1 text-2xl font-serif font-bold">Ideal Candidate:</h3>
        <div className="font-serif text-base">{jsonData.idealCandidate}</div>
      </div>

      {/* When and Where */}
      <div>
        <h3 className="mt-3 mb-1 text-2xl font-serif font-bold">When and Where</h3>
        <div className="font-serif text-base">{jsonData.whenAndWhere}</div>
      </div>
    </div>
  );
};

export default Description;
