import { Skeleton } from "@/components/ui/skeleton";

const PlaylistSkeleton = () => {
    return (
        <div className="w-full h-full flex flex-col gap-5 overflow-auto no-scroll">
            <div className="h-40 flex gap-5">
                <Skeleton className="h-full aspect-square rounded-lg bg-zinc-800" />
                <div className="flex grow flex-col gap-4 justify-center">
                    <Skeleton className="h-5 bg-zinc-800 w-20" />
                    <Skeleton className="h-5 bg-zinc-800 w-60" />
                    <Skeleton className="h-5 bg-zinc-800 w-40" />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <table>
                    <thead>
                        <tr className="flex pb-3 px-4 border-b-2 border-solid border-zinc-800">
                            <th className="text-end text-zinc-300 font-medium w-10">#</th>
                            <th className="basis-full text-zinc-300 font-medium text-start pl-5">Title</th>
                            <th className="basis-2/3 text-zinc-300 font-medium text-start">Album</th>
                            <th className="basis-2/3 text-zinc-300 font-medium text-start">Date Added</th>
                            <th className="text-end text-zinc-300 font-medium w-44">Time</th>
                        </tr>
                    </thead>
                </table>
                <Skeleton className="h-12 rounded-lg bg-zinc-800" />
                <Skeleton className="h-12 rounded-lg bg-zinc-800" />
                <Skeleton className="h-12 rounded-lg bg-zinc-800" />
                <Skeleton className="h-12 rounded-lg bg-zinc-800" />
                <Skeleton className="h-12 rounded-lg bg-zinc-800" />
            </div>
        </div>
    );
};

export default PlaylistSkeleton;
