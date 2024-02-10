export interface FeedPlaylists {
    name: string;
    items: {
        collaborative: boolean;
        description: string;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        images: {
            height: any;
            url: string;
            width: any;
        }[];
        name: string;
        owner: {
            display_name: string;
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            type: string;
            uri: string;
        };
        primary_color: string;
        public: boolean;
        snapshot_id: string;
        tracks: {
            href: string;
            total: number;
        };
        type: string;
        uri: string;
    }[];
}