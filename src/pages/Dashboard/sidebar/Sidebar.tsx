import { BiSearch } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { useSelector } from "react-redux";
import MyPlaylist from "./MyPlaylist";
import { memo, useEffect, useState } from "react";
import spotify from "../../../utils/spotify";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const playlists = useSelector((state: any) => state.playlists);
    useEffect(() => {
        spotify.getFeaturedPlaylist();
    }, []);

    return (
        <div className="min-w-[300px] flex flex-col gap-3">
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
            <div className="basis-full bg-zinc-900 rounded-2xl px-3 py-4">
                <h3 className="font-medium pb-4">Your Playlists</h3>
                <div className="flex flex-col gap-1">
                    {playlists.map((e: any, i) => (
                        <MyPlaylist
                            e={e}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
