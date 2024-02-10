import { createSlice } from "@reduxjs/toolkit";
import { FeedPlaylists } from ".";

interface State {
    userInfo: object;
    playlists: [];
    feedPlaylists: FeedPlaylists[];
    currentTrack: string;
}

const initialState: State = {
    userInfo: {},
    playlists: [],
    feedPlaylists: [],
    currentTrack: "4jPy3l0RUwlUI9T5XHBW2m",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload;
        },
        setPlaylists: (state, action) => {
            state.playlists = action.payload;
        },
        setFeaturedPlaylists: (state, action) => {
            state.feedPlaylists = [...state.feedPlaylists, action.payload];
        },
        setCurrentTrack: (state, action) => {
            state.currentTrack = action.payload;
        },
    },
});

export const { setUser, setPlaylists, setFeaturedPlaylists, setCurrentTrack } = userSlice.actions;
export default userSlice.reducer;
