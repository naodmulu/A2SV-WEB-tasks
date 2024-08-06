import JobListing from "@/app/types/JobListing_types";
import JsonTypes from "@/app/types/Json_types";

const Opportunities = async (): Promise<JobListing[]> => {

  const endpoint: string = ` https://akil-backend.onrender.com/opportunities/search`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Network response was not successful');
    }

    const userData: JsonTypes = await response.json();
    // console.log('User Data:', userData);
    const data:JobListing[] = userData.data;
    return data;

  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export default Opportunities;
