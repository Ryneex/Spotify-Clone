import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Player = () => {
    const currentTrack = useSelector((state: any) => state.currentTrack);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(false);
    }, [currentTrack]);

    return (
        <div className="h-20 relative">
            <Skeleton className="h-full w-full bg-zinc-800 absolute top-0 left-0" />
            <iframe
                className={`relative ${loaded ? "opacity-100" : "opacity-0"}`}
                src={`https://open.spotify.com/embed/track/${currentTrack}?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media;"
                loading="eager"
                onLoad={() => setLoaded(true)}
            ></iframe>
        </div>
    );
};

export default Player;
