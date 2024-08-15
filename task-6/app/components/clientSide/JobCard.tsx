import React, { useEffect, useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import JobCardProps from '@/app/types/JobCard_types';
import JobListing from '@/app/types/JobListing_types';
import OpportunitiesById from '@/app/Service/Fetch/OpportunitiesById';
import Link from 'next/link';

const JobCard: React.FC<JobCardProps> = ({ index }) => {
  const [jsonData, setJsonData] = useState<JobListing | null>(null);
  const [loadingError, setLoadingError] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const data: JobListing = await OpportunitiesById(index);
        setJsonData(data);
      } catch (error) {
        setLoadingError(true);
      }
    };
    fetchOpportunities();
  }, [index]);

  useEffect(() => {
    if (jsonData?.isBookmarked) {
      setBookmark(true);
    }
  }, [jsonData]);

  const handleBookmark = async () => {
    
    const state = bookmark ? 'delete' : 'post';
    const token = session.accessToken;
    console.log(token)

    
    try {
      const response = await axios[state](
        `https://akil-backend.onrender.com/bookmarks/${jsonData?.id}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
        );
        
      setBookmark(!bookmark);
      console.log(response.data);
    } catch (error) {
      console.error('Error bookmarking the post:', error);
    }
  };
  
  if (loadingError) {
    return <div>Loading error</div>;
  }

  if (jsonData === null) {
    return (
      <div className="w-4/5 h-32 min-w-80 p-6 rounded-3xl shadow-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-w-80 p-6 rounded-3xl bg-white shadow-lg">
      <div className="h-fit p-2 flex text-black bg-white">
        {/* Logo */}
        <div className="h-fit mr-5 ml-2">
          <Link key={jsonData.id} href={`/dashboard/${jsonData.id}`} passHref>
            <img src={jsonData.logoUrl} alt={`${jsonData.title} logo`} />
          </Link>
        </div>

        <div>
          {/* Title */}
          <div className="font-mono w-fit leading-6 text-base font-semibold text-[#25324b] hover:text-blue-500">
            <Link key={jsonData.id} href={`/dashboard/${jsonData.id}`} passHref>
              {jsonData.title}
            </Link>
          </div>

          {/* Company */}
          <div className="text-base font-mono leading-6 font-normal text-[#7C8493]">
            {jsonData.orgName}
          </div>

          {/* Description */}
          <div className="font-mono text-base font-normal leading-6 text-[#25324b]">
            {jsonData.description}
          </div>

          {/* Tags */}
          <div className="flex mt-2">
            <div className="mr-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-[#56CDAD] bg-opacity-10 text-[#56CDAD] min-w-fit w-14 text-center font-semibold text-xs font-mono border-solid">
              In Person
            </div>
            <div className="mr-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-white text-[#FFB836] min-w-fit w-14 text-center font-semibold text-xs font-mono border-solid border-x border-y border-[#FFB836]">
              Education
            </div>
            <div className="mr-2 pl-3 pr-3 pt-1 pb-1 rounded-lg bg-white text-[#4640DE] min-w-fit w-14 text-center font-semibold text-xs font-mono border-solid border-x border-y border-[#4640DE]">
              IT
            </div>
          </div>
        </div>

        <div>
          <button className="w-fit" onClick={handleBookmark}>
            <FaBookmark
              className={`h-8 w-6 hover:text-blue-800 ${
                bookmark ? 'text-blue-500' : 'text-gray-500'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
