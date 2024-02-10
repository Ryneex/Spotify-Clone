export interface PlayListInterface {
    collaborative: boolean;
    external_urls: ExternalUrls;
    followers:     Followers;
    href:          string;
    id:            string;
    images:        Image[];
    primary_color: string;
    name:          string;
    description:   string;
    type:          string;
    uri:           string;
    owner:         Owner;
    public:        boolean;
    snapshot_id:   string;
    tracks:        Tracks;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  null;
    total: number;
}

export interface Image {
    url:    string;
    height: number | null;
    width:  number | null;
}

export interface Owner {
    href:          string;
    id:            string;
    type:          OwnerType;
    uri:           string;
    display_name?: string;
    external_urls: ExternalUrls;
    name?:         string;
}

export enum OwnerType {
    Artist = "artist",
    User = "user",
}

export interface Tracks {
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    href:     string;
    total:    number;
    items:    Item[];
}

export interface Item {
    added_at:        Date;
    primary_color:   null;
    video_thumbnail: VideoThumbnail;
    is_local:        boolean;
    added_by:        Owner;
    track:           Track;
}

export interface Track {
    preview_url:       null | string;
    available_markets: string[];
    explicit:          boolean;
    type:              TrackType;
    episode:           boolean;
    track:             boolean;
    album:             Album;
    artists:           Owner[];
    disc_number:       number;
    track_number:      number;
    duration_ms:       number;
    external_ids:      ExternalIDS;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    name:              string;
    popularity:        number;
    uri:               string;
    is_local:          boolean;
}

export interface Album {
    available_markets:      string[];
    type:                   AlbumTypeEnum;
    album_type:             AlbumTypeEnum;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    uri:                    string;
    artists:                Owner[];
    external_urls:          ExternalUrls;
    total_tracks:           number;
}

export enum AlbumTypeEnum {
    Album = "album",
    Compilation = "compilation",
    Single = "single",
}

export enum ReleaseDatePrecision {
    Day = "day",
}

export interface ExternalIDS {
    isrc: string;
}

export enum TrackType {
    Track = "track",
}

export interface VideoThumbnail {
    url: null;
}
