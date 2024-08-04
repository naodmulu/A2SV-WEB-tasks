import JobCard from "./components/clientSide/JobCard";
import jsonData from "./Jobs";

export default function Home() {

  
  return (

    <main className="">
      
      {jsonData.job_postings.map((_, index) => (
        <JobCard key={index} index={index} />
      ))}
      
    </main>
      );
}
