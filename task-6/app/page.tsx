"use client";import { useState, useEffect } from 'react';
import JobCard from "./components/clientSide/JobCard";
import Opportunities from "./Service/Fetch/Opportunities";
import SortByDropdown from './components/clientSide/SortByDropdown';
import JobListing from "./types/JobListing_types";


export default function Home() {
  const [jsonData, setJsonData] = useState<JobListing[] | null>(null);
  const [loadingError, setLoadingError] = useState<boolean>(false);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const data: JobListing[] = await Opportunities();
        console.log(data[0])
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
      <div className=''>Loading...</div>
    );
  }

  return (
    <main className="pl-32 py-12" id='homeContainer'>
      <div className='w-[919px] '>
        <div className=" mb-8 flex justify-between">
          <div className="flex flex-col">
            <h1 className='font-black text-3xl text-[#25324B]'>Opportunities</h1>
            <p className='font-thick text-base text-[#7C8493]'>Showing {jsonData.length} results</p>
          </div>

        <SortByDropdown/>
        </div>
      {jsonData.map((item,index) => {
        return (
            <div className='mb-8'>
              <JobCard index={item.id} />
            </div>
        );
      })}
      </div>
    </main>
  );
}
