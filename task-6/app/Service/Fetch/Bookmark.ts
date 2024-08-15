import JsonTypes from "@/app/types/Json_types";
import Bookmark_types from "@/app/types/Bookmark_types";

const Bookmark = async (): Promise<Bookmark_types[]> => {

  const endpoint: string = ` https://akil-backend.onrender.com/opportunities/bookmark`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Network response was not successful');
    }

    const userData: JsonTypes = await response.json();
    // console.log('User Data:', userData);
    const data:Bookmark_types[] = userData.data;
    return data;

  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export default Bookmark;
