import "swiper/css";
import { useSelector } from "react-redux";
import PlaylistSection from "../../../components/PlaylistSection";
import { FeedPlaylists } from "../../../slice";
import { Skeleton } from "@/components/ui/skeleton";

const Feed = () => {
    const feedPlaylists = useSelector((state: any) => state.feedPlaylists);
    return (
        <div className="basis-full text-white flex flex-col gap-12 min-w-0 bg-zinc-900 rounded-2xl p-5 overflow-auto no-scroll">
            {feedPlaylists.length !== 0 ? (
                feedPlaylists.map((e: FeedPlaylists, i: number) => (
                    <PlaylistSection
                        key={i}
                        data={e}
                    />
                ))
            ) : (
                <>
                    {[1, 2].map((__, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-5"
                        >
                            <Skeleton className="h-8 w-60 bg-zinc-800" />
                            <div className="flex gap-5">
                                <Skeleton className="aspect-[19/20] basis-full bg-zinc-800" />
                                <Skeleton className="aspect-[19/20] basis-full bg-zinc-800" />
                                <Skeleton className="aspect-[19/20] basis-full bg-zinc-800" />
                                <Skeleton className="aspect-[19/20] basis-full bg-zinc-800" />
                                <Skeleton className="aspect-[19/20] basis-full bg-zinc-800" />
                                <Skeleton className="aspect-[19/20] basis-full bg-zinc-800" />
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Feed;
