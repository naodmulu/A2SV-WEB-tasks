import JobCard from "./components/clientSide/JobCard";
import jsonData from "./Jobs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {jsonData.job_postings.map((_, index) => (
        <Link key={index} href={`/dashboard/${index}`} passHref>
          <div>
            <JobCard index={index} />
          </div>
        </Link>
      ))}
    </main>
  );
}
