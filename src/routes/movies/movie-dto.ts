import { Movie } from "../../services/movie/movie";

export interface MovieDto {
    readonly name: string;
    readonly id: string;
    readonly year: number;
    readonly director: string;
    readonly writers: string;
    readonly actors: string;
    readonly artwork: string | undefined;
    readonly releaseDate: string;
    readonly runningTimes: number;
    readonly url: string;
    readonly imdbUrl: string;
    readonly wikipediaUrl: string;
}

export function toMovieDto(movie: Movie): MovieDto {
    const month = movie.releaseDate.toLocaleString("en-US", { month: "long" });
    const year = movie.releaseDate.getFullYear();
    const day = movie.releaseDate.getDate();
    const releaseDateFormatted = `${month} ${day}, ${year}`;
    return {
        name: movie.name,
        id: movie.slug,
        year: year,
        director: movie.director,
        writers: movie.writers.join(", "),
        actors: movie.actors.join(", "),
        artwork: movie.artwork,
        releaseDate: releaseDateFormatted,
        runningTimes: movie.runningTimes,
        url: `/movies/${movie.slug}`,
        imdbUrl: movie.links.imdb || "",
        wikipediaUrl: movie.links.wikipedia || "",
    };
}
