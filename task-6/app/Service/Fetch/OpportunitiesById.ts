import JobListing from "@/app/types/JobListing_types";

interface JsonTypes {
  success:boolean;
  message: string;
  data: JobListing;
  errors: string | null;
  count: number;
}
const OpportunitiesById = async (id: string): Promise<JobListing> => {

  const endpoint: string = ` https://akil-backend.onrender.com/opportunities/${id}`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Network response was not successful');
    }

    const userData: JsonTypes = await response.json();
    console.log('User Data:', userData);
    const data: JobListing = userData.data;
    return data;
    
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default OpportunitiesById;
