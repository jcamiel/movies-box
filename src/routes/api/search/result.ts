import { Movie } from "../../../services/movie/movie";
import { toISO8601Short } from "../../../utils/date";

export interface ResultMovie {
    readonly name: string;
    readonly url: string;
    readonly director: string;
    readonly release_date: string;
    readonly actors: string[];
    readonly artwork: string | undefined;
    readonly artwork_128: string | undefined;
}

export function toResultMovie(movie: Movie): ResultMovie {
    // TODO: specify base url for url and resources.
    let artwork128;
    if (movie.artwork) {
        artwork128 = movie.artwork.replace("800x1200", "128x192");
    }

    return {
        name: movie.name,
        url: `/movies/${movie.slug}`,
        director: movie.director,
        release_date: toISO8601Short(movie.releaseDate),
        actors: movie.actors,
        artwork: `/img/${movie.artwork}`,
        artwork_128: `/img/${artwork128}`,
    };
}
