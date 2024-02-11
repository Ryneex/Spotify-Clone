import { BiSearch } from "react-icons/bi";
import { IoHome, IoLogInOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import MyPlaylist from "./MyPlaylist";
import { useEffect } from "react";
import spotify from "../../../utils/spotify";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const playlists = useSelector((state: any) => state.playlists);
    useEffect(() => {
        spotify.getFeaturedPlaylist();
    }, []);

    return (
        <div className="min-w-[300px] text-white flex flex-col gap-3">
            {/* Home & Search button */}
            <div className="flex flex-col gap-1 bg-zinc-900 rounded-2xl px-3 py-4">
                <NavLink
                    to="/"
                    className={({ isActive }) => `${isActive && "bg-zinc-800"} flex gap-3 text-md font-medium items-center hover:bg-zinc-800 px-4 h-[45px] rounded-lg cursor-pointer`}
                >
                    <IoHome size={20} />
                    Home
                </NavLink>
                <NavLink
                    to="/search"
                    className={({ isActive }) => `${isActive && "bg-zinc-800"} flex gap-3 text-md font-medium items-center hover:bg-zinc-800 px-4 h-[45px] rounded-lg cursor-pointer`}
                >
                    <BiSearch size={25} />
                    Search
                </NavLink>
            </div>
            {/* Playlists */}
            <div className="basis-full flex flex-col bg-zinc-900 rounded-2xl px-3 pt-4">
                <h3 className="font-medium pb-4">Your Playlists</h3>
                <div className="flex flex-col gap-1 h-full">
                    {playlists.map((e: any, i) => (
                        <MyPlaylist
                            e={e}
                            key={i}
                        />
                    ))}
                </div>
                <Link
                    to="/login"
                    className="h-10 bg-zinc-900 rounded-2xl flex items-center justify-between pb-3"
                >
                    <IoLogInOutline
                        size={30}
                        opacity={0.7}
                        onClick={() => localStorage.removeItem("access_token")}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
