import PlaylistSection from "@/components/PlaylistSection";
import spotify from "@/utils/spotify";
import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Songs from "./Songs";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

const Search = () => {
    const [outline, setOutline] = useState(false);
    const [input, setInput] = useState<any>(queryString.parse(window.location.search).q || "");
    const [data, setData] = useState<any>({});
    const timeout = useRef<any>(null);
    const navigate = useNavigate();

    async function search() {
        if (input.trim().length === 0) {
            setData({});
            return;
        }
        clearTimeout(timeout.current);
        timeout.current = setTimeout(async () => {
            const result = await spotify.search(input);
            setData(result);
            navigate(`/search?q=${encodeURIComponent(input)}`);
        }, 500);
    }

    useEffect(() => {
        search();
    }, [input]);

    return (
        <div className="basis-full text-white flex flex-col min-w-0 bg-zinc-900 rounded-2xl p-5 gap-5">
            <div className={`min-h-12 max-w-[400px] bg-zinc-800 hover:bg-zinc-700/50 rounded-full flex items-center px-4 gap-2 ${outline && "outline"} outline-[2px] outline-zinc-400`}>
                <IoSearchOutline size={23} />
                <input
                    className="min-w-0 w-full h-full flex items-center text-sm placeholder:font-medium bg-transparent outline-none text-zinc-200"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="What do you want to listen to?"
                    type="text"
                    onFocus={() => setOutline(true)}
                    onBlur={() => setOutline(false)}
                />
            </div>
            {Object.keys(data).length !== 0 ? (
                <div className="overflow-auto no-scroll flex flex-col gap-10">
                    <Songs data={data.tracks} />
                    <PlaylistSection data={{ ...data.playlists, name: "Playlists" }} />
                </div>
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <h2 className="text-zinc-700">No Results</h2>
                </div>
            )}
        </div>
    );
};

export default Search;
