"use client";import { useState, useEffect } from 'react';
import JobCard from "./components/clientSide/JobCard";
import Opportunities from "./Service/Fetch/Opportunities";
import Link from "next/link";
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
      <div>Loading...</div>
    );
  }

  return (
    <main className="">
      {jsonData.map((item,index) => (
        <Link key={item.id} href={`/dashboard/${item.id}`} passHref>
          <div>
            <JobCard index={item.id} />
          </div>
        </Link>
      ))}
    </main>
  );
}
