export interface Movie {
    id: number;
    name: string;
    director: string;
    slug: string;
    artwork?: string;
    writers: string[];
    runningTimes: number;
    releaseDate: Date;
    actors: string[];
    boxOffice: {
        min: number;
        max: number;
    };
    links: {
        wikipedia: string;
        imdb: string;
    };
}
