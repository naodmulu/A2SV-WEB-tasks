"use client";
import { useState, useEffect } from 'react';
import JobCard from '../components/clientSide/JobCard';
import Link from '@/node_modules/next/link';
import Bookmark_types from '../types/Bookmark_types';
import Bookmark from '../Service/Fetch/Bookmark';

export default function Bookmarked() {
  const [jsonData, setJsonData] = useState<Bookmark_types[] | null>(null);
  const [loadingError, setLoadingError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const data: Bookmark_types[] = await Bookmark();
        console.log(data)
        setJsonData(data);
      } catch (error) {
        setLoadingError(true);
      }
    };
    fetchBookmark();
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
      {jsonData.map((item,index) => {
        return (
          <Link key={item.eventID} href={`/dashboard/${item.eventID}`} passHref>
            <div>
              <JobCard index={item.eventID} />
            </div>
          </Link>
        );
      })}
    </main>
  );
}
