import { IoMusicalNotes } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function MyPlaylist({ e }) {
    return (
        <NavLink
            to={`/playlist/${e.id}`}
            className={({ isActive }) => `${isActive && "bg-zinc-800"} flex h-[45px] gap-3 items-center cursor-pointer hover:bg-zinc-800 rounded-lg px-3 py-2`}
        >
            {e.images.length === 0 ? (
                <div className="h-full aspect-square bg-zinc-700 rounded-md flex items-center justify-center">
                    <IoMusicalNotes
                        opacity={0.3}
                        size={20}
                    />
                </div>
            ) : (
                <img
                    className="h-full object-cover rounded-md"
                    src={e.images[2].url}
                />
            )}
            <span>{e.name}</span>
        </NavLink>
    );
}

export default MyPlaylist;
