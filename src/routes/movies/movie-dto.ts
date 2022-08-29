import { Movie } from "../../services/movie/movie";

export interface MovieDto {
    readonly name: string;
    readonly year: number;
    readonly director: string;
    readonly writers: string;
    readonly actors: string;
    readonly artwork: string | undefined;
    readonly releaseDate: string;
    readonly url: string;
    readonly imdbUrl: string;
    readonly wikipediaUrl: string;
}

export function toMovieDto(movie: Movie): MovieDto {
    const releaseDate = new Date(movie.releaseDate);
    const month = releaseDate.toLocaleString("en-US", { month: "long" });
    const year = releaseDate.getFullYear();
    const releaseDateFormatted = `${month} ${releaseDate.getDay()}, ${year}`;
    return {
        name: movie.name,
        year: year,
        director: movie.director,
        writers: movie.writers.join(", "),
        actors: movie.actors.join(", "),
        artwork: movie.artwork,
        releaseDate: releaseDateFormatted,
        url: `/movies/${movie.slug}`,
        imdbUrl: movie.links.imdb || "",
        wikipediaUrl: movie.links.wikipedia || "",
    };
}
