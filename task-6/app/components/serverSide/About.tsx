import React from 'react';
import jsonData from '@/app/Jobs';
import AboutProps from '@/app/types/About_types';

const About: React.FC<AboutProps> = ({ index }) => {
  const job = jsonData.job_postings[index];

  return (
    // Hug (293.5px)
    <div className='w=[285.5px] border-solid border-2 p-2'>
      {/* About */}
      <div className="">
        <h1>About</h1>
        <p>Posted on: {job.about.posted_on}</p>
        <p>Deadline: {job.about.deadline}</p>
        <p>Location: {job.about.location}</p>
        <p>Start Date: {job.about.start_date}</p>
        <p>End Date: {job.about.end_date}</p>
      </div>

      {/* Categories */}
      <div className="flex mt-4">
        <h1>Catrgories</h1>

        {job.about.categories.map((category, idx) => (
          <div key={idx} className='mr-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-black text-white min-w-fit w-14 text-center font-semibold text-xs font-mono border-solid'>
            {category}
          </div>
        ))}
      </div>

      {/* Required Skills */}
      <div className="mt-4">
        <h3>Required Skills</h3>
        <ul>
          {job.about.required_skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
