import JobListing from "./JobListing_types";

interface JsonTypes {
        success:boolean;
        message: string;
        data: JobListing[];
        errors: string | null;
        count: number;
    }

export default JsonTypes