import fetchData from "../../hooks/fetchData";
import { useSelector } from "react-redux";
import spotify from "../../utils/spotify";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import { Route, Routes } from "react-router-dom";
import Search from "./search/Search";
import Player from "./player/Player";
import Playlist from "./playlist/Playlist";

const Dashboard = () => {
    const userInfo = useSelector((state: any) => state.userInfo);
    //if params contains any access token then it saves that token
    spotify.token(window.location.hash);

    // fetches the data of current user and stores in inside redux
    fetchData();

    if (Object.keys(userInfo).length !== 0)
        return (
            <div className="flex flex-col h-full w-full p-5 gap-5">
                <div className="flex w-full h-full gap-3 overflow-hidden">
                    <Sidebar />
                    <Routes>
                        <Route
                            path="/"
                            element={<Feed />}
                        />
                        <Route
                            path="/search"
                            element={<Search />}
                        />
                        <Route
                            path="/playlist/:id"
                            element={<Playlist />}
                        />
                    </Routes>
                </div>
                <Player />
            </div>
        );
};
2;

export default Dashboard;
