import { Movie } from "../../services/movie/movie";
import { toISO8601Short } from "../../utils/date";

export interface ResultMovie {
    readonly name: string;
    readonly director: string;
    readonly releaseDate: string;
    readonly actors: string[];
}

export function toResultMovie(movie: Movie): ResultMovie {
    return {
        name: movie.name,
        director: movie.director,
        releaseDate: toISO8601Short(movie.releaseDate),
        actors: movie.actors,
    };
}
