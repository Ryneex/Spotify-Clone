import { setCurrentTrack } from "@/slice/userSlice";
import ms from "pretty-ms";
import { useDispatch } from "react-redux";

const Songs = ({ data }: any) => {

    const dispatch = useDispatch();

    function getArtists(e) {
        let names = "";
        e.artists.forEach((e, i) => (i === 0 ? (names += e.name) : (names += `, ${e.name}`)));
        return names;
    }
    return (
        <div>
            <h2 className="font-medium mb-5">Songs</h2>
            <div className="flex flex-col gap-4">
                {data.items.slice(0, 5).map((e, i) => (
                    <div
                        key={i}
                        className="h-12 text-zinc-300 font-normal items-center flex gap-4 pr-4 cursor-pointer"
                        onClick={() => dispatch(setCurrentTrack(e.id))}
                    >
                        <img
                            className="h-full rounded-md"
                            src={e.album.images[2].url}
                        />
                        <div className="flex flex-col">
                            <span className="text-zinc-200">{e.name}</span>
                            <span className=" text-zinc-400 text-sm">{getArtists(e)}</span>
                        </div>
                        <span className="text-sm text-zinc-300 ml-auto">{ms(e.duration_ms, { secondsDecimalDigits: 0 })}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Songs;
