import spotify from "@/utils/spotify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlayListInterface } from ".";
import ms from "pretty-ms";
import { IoMusicalNotes } from "react-icons/io5";
import Item from "./Item";
import PlaylistSkeleton from "./PlaylistSkeleton";

function Playlist() {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState<PlayListInterface>({} as PlayListInterface);
    const [time, setTime] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setPlaylist({} as PlayListInterface);
        spotify.getPlaylist(id).then((e) => (e.failed ? navigate("/login") : setPlaylist(e)));
    }, [id]);

    useEffect(() => {
        if (Object.keys(playlist).length !== 0) {
            console.log(playlist.tracks.items[1]);
            let duration = 0;
            playlist.tracks.items.forEach((e) => {
                duration += e.track.duration_ms;
            });
            setTime(ms(duration, { secondsDecimalDigits: 0 }));
        }
    }, [playlist]);

    return (
        <div className="basis-full min-w-0 bg-zinc-900 rounded-2xl p-5">
            {Object.keys(playlist).length !== 0 ? (
                <div className="w-full h-full flex flex-col gap-5 overflow-auto no-scroll">
                    <div className="min-h-40 flex gap-5 items-center">
                        <div className="h-full aspect-square bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center">
                            {playlist.images ? (
                                <img
                                    className="h-full w-full object-cover"
                                    src={playlist.images[0].url}
                                    loading="lazy"
                                />
                            ) : (
                                <IoMusicalNotes
                                    opacity={0.2}
                                    size={50}
                                />
                            )}
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-zinc-200">{playlist.public ? "Public Playlist" : "Private Playlist"}</span>
                            <h1 className="text-4xl text-zinc-200">{playlist.name}</h1>
                            <span className="text-sm text-zinc-400">
                                {playlist.owner.display_name}, {playlist.tracks.total} Songs, {time}
                            </span>
                        </div>
                    </div>
                    <table className="h-full">
                        <thead>
                            <tr className="flex pb-3 px-4 border-b-2 border-solid border-zinc-800">
                                <th className="text-end text-zinc-300 font-medium w-10">#</th>
                                <th className="basis-full text-zinc-300 font-medium text-start pl-5">Title</th>
                                <th className="basis-2/3 text-zinc-300 font-medium text-start">Album</th>
                                <th className="basis-2/3 text-zinc-300 font-medium text-start">Date Added</th>
                                <th className="text-end text-zinc-300 font-medium w-44">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {playlist.tracks.items.map((e, i) => (
                                <Item
                                    e={e}
                                    i={i}
                                    key={i}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <PlaylistSkeleton />
            )}
        </div>
    );
}

export default Playlist;
