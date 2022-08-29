export interface Movie {
    name: string;
    director: string;
    slug: string;
    artwork?: string;
    writers: string[];
    runningTimes: number;
    releaseDate: string;
    actors: string[];
    boxOffice: {
        min: number;
        max: number;
    };
    links: {
        wikipedia?: string;
        imdb?: string;
    };
}
