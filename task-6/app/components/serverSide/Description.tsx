import React from 'react';
import jsonData from '@/app/Jobs';
import DescriptiondProps from '@/app/types/Description_types';

const Description: React.FC<DescriptiondProps> = ({ index }) => {
  const jobList = jsonData.job_postings[index];

  return (
    <div className="w-[750px] border-2 pl-2 pr-4">
      {/* Description */}
      <div>
        <h3 className="mt-3 mb-1 text-2xl font-serif font-bold">Discription</h3>
        <div>{jobList.description}</div>
      </div>
      
      {/* Responsibility */}
      <div>
        <h3 className="mt-3 mb-1 text-2xl font-serif font-bold">Responsibilities:</h3>
        <ul>
          {jobList.responsibilities.map((responsibility: string, idx: number) => (
            <li key={idx}>{responsibility}</li>
          ))}
        </ul>
      </div>
      
      {/* Ideal Candidate */}
      <div>
        <h3 className="mt-3 mb-1 text-2xl font-serif font-bold">Ideal Candidate:</h3>
        <div>{jobList.ideal_candidate.age}</div>
        <div>{jobList.ideal_candidate.gender}</div>
        <ul>
          {jobList.ideal_candidate.traits.map((trait: string, idx: number) => (
            <li key={idx}>{trait}</li>
          ))}
        </ul>
      </div>
      
      {/* When and Where */}
      <div>{jobList.when_where}</div>
    </div>
  );
};

export default Description;
