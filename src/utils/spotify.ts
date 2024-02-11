import queryString from "query-string";

const spotify = {
    authorize: (options) => {
        window.open(`https://accounts.spotify.com/authorize?${queryString.stringify(options)}`, "_self");
    },

    token: (hash: string = ""): string | null => {
        const params: any = queryString.parse(hash);
        if (params.access_token) {
            //sets a new token in local storage if token in provided in hash
            localStorage.setItem("access_token", params.access_token);
            //cleans the URL
            location.href = location.href.split("#")[0];
        }
        return localStorage.getItem("access_token");
    },

    getMe: async () => {
        const data = await fetch("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: "Bearer " + spotify.token(),
            },
        });
        if (data.status != 200) {
            localStorage.removeItem("access_token");
            return { ...data, failed: true };
        }
        return await data.json();
    },

    getMyPlaylist: async () => {
        const data: any = await fetch("https://api.spotify.com/v1/me/playlists", {
            headers: {
                Authorization: "Bearer " + spotify.token(),
            },
        });
        if (data.status != 200) {
            localStorage.removeItem("access_token");
            return { ...data, failed: true };
        }
        return await data.json();
    },

    getFeaturedPlaylist: async () => {
        const data: any = await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
            headers: {
                Authorization: "Bearer " + spotify.token(),
            },
        });
        if (data.status != 200) {
            localStorage.removeItem("access_token");
            return { ...data, failed: true };
        }
        return await data.json();
    },

    getPlaylist: async (id) => {
        const data: any = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
            headers: {
                Authorization: "Bearer " + spotify.token(),
            },
        });
        if (data.status != 200) {
            return { ...data, failed: true };
        }
        return await data.json();
    },

    search: async (string: string = "") => {
        if (string.length === 0) return;
        const uri = queryString.stringify({ q: string, type: "album,artist,playlist,track,show,episode,audiobook" });
        const data: any = await fetch(`https://api.spotify.com/v1/search?${uri}`, {
            headers: {
                Authorization: "Bearer " + spotify.token(),
            },
        });
        if (data.status != 200) {
            return { ...data, failed: true };
        }
        return await data.json();
    },
};

export default spotify;
