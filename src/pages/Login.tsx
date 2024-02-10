import spotify from "../utils/spotify";
import { Button } from "@/components/ui/button";

const Login = () => {
    function handleClick() {
        const options = {
            client_id: import.meta.env.VITE_CLIENT_ID,
            redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
            response_type: "token",
            state: Math.floor(Math.random() * 5000 + 50),
            show_dialog: false,
            scope: "user-read-private user-read-email playlist-read-private playlist-read-collaborative streaming",
        };
        spotify.authorize(options);
    }
    return (
        <div className="w-screen bg-gray-900 gap-5 h-screen flex flex-col justify-center items-center">
            <h2 className="font-medium max-w-[400px] text-center">You're not logged in. Please Login with your spotify account</h2>
            <Button onClick={handleClick}>Login with Spotify</Button>
        </div>
    );
};
export default Login;
