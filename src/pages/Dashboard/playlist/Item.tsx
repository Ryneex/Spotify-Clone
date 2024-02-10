import ms from "pretty-ms";
import { PlayListInterface } from ".";
import date from "date-and-time";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTrack } from "@/slice/userSlice";

const Item = ({ e, i }: { e: PlayListInterface["tracks"]["items"][number]; i: number }) => {
    const dispatch = useDispatch();
    const currentTrack = useSelector((state: any) => state.currentTrack);

    function getArtists() {
        let names = "";
        e.track.artists.forEach((e, i) => (i === 0 ? (names += e.name) : (names += `, ${e.name}`)));
        return names;
    }

    return (
        <tr
            className={`${currentTrack === e.track.id && "bg-zinc-800"} flex my-2 px-4 py-2 h-14 rounded-lg items-center cursor-pointer hover:bg-zinc-800`}
            onClick={() => dispatch(setCurrentTrack(e.track.id))}
        >
            <td className="text-end text-zinc-400 font-normal w-10">{i + 1}</td>
            <td className="basis-full h-full text-zinc-300 font-normal text-start flex gap-4 pl-5">
                <img
                    className="h-full rounded-md"
                    src={e.track.album.images[2].url}
                />
                <div className="flex flex-col">
                    <span className="text-zinc-200 overflow-hidden pr-5">{e.track.name}</span>
                    <span className=" text-zinc-400 text-sm">{getArtists()}</span>
                </div>
            </td>
            <td className="basis-2/3 text-zinc-300 font-normal text-sm text-start overflow-hidden pr-5">{e.track.album.name}</td>
            <td className="basis-2/3 text-zinc-300 font-normal text-sm text-start">{date.format(new Date(e.added_at), "MMM D , YYYY")}</td>
            <td className="text-end  text-zinc-300 font-normal text-sm w-44">{ms(e.track.duration_ms, { secondsDecimalDigits: 0 })}</td>
        </tr>
    );
};

export default Item;
