import { GoogleProfile } from "next-auth/providers/google";

interface CustomGoogleProfileProps extends GoogleProfile {
    sub: string;
    name: string;
    email: string;
    picture: string;
}

export default CustomGoogleProfileProps