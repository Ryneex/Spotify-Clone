import { Swiper, SwiperSlide } from "swiper/react";
import { FeedPlaylists } from "../slice";
import { memo, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMusicalNotes } from "react-icons/io5";

const PlaylistSection = ({ data }: { data: FeedPlaylists }) => {
    const swiper: any = useRef();
    if (data.items.length === 0) return;
    return (
        <div className="select-none">
            <div className="flex items-center gap-1 mb-5 pr-2">
                <h2 className="font-medium mr-auto">{data.name}</h2>
                <IoIosArrowBack
                    size={35}
                    className="cursor-pointer rounded-full hover:bg-zinc-800 p-2"
                    onClick={() => swiper.current.slidePrev()}
                />
                <IoIosArrowForward
                    size={35}
                    className="cursor-pointer rounded-full hover:bg-zinc-800 p-2"
                    onClick={() => swiper.current.slideNext()}
                />
            </div>
            <Swiper
                onSwiper={(e) => (swiper.current = e)}
                slidesPerView={6}
                spaceBetween={20}
            >
                {data.items.map((e, i) => (
                    <SwiperSlide key={i}>
                        <Link
                            to={`/playlist/${e.id}`}
                            className="bg-zinc-800 rounded-lg p-3 flex flex-col cursor-pointer"
                        >
                            <div className="w-full flex items-center justify-center aspect-square overflow-hidden">
                                {e.images[0]?.url ? (
                                    <img
                                        className="w-full h-full object-cover rounded-md"
                                        src={e.images[0]?.url}
                                        loading="lazy"
                                    />
                                ) : (
                                    <IoMusicalNotes opacity={0.2} size={50} />
                                )}
                            </div>
                            <span className="pt-3 font-medium text-nowrap overflow-hidden mr-3">{e.name || "No Name"}</span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default memo(PlaylistSection);
