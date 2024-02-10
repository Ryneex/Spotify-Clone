import { useDispatch } from "react-redux";
import { setFeaturedPlaylists, setPlaylists, setUser } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import spotify from "../utils/spotify";

const fetchData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function setUserData() {
        const data = await spotify.getMe();
        data.failed ? navigate("/login") : dispatch(setUser(data));
    }

    async function setPlaylist() {
        const data = await spotify.getMyPlaylist();
        data.failed ? navigate("/login") : dispatch(setPlaylists(data.items));
    }

    async function getFeaturedPlaylist() {
        const data = await spotify.getFeaturedPlaylist();
        data.failed ? navigate("/login") : dispatch(setFeaturedPlaylists({ ...data.playlists, name: data.message }));
    }

    useEffect(() => {
        setUserData();
        setPlaylist();
        getFeaturedPlaylist();
    }, []);
};

export default fetchData;
