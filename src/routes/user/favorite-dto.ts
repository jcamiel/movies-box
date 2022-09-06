import { Movie } from "../../services/movie/movie";

export interface FavoriteDto {
    readonly name: string;
    readonly id: string;
    readonly year: number;
    readonly director: string;
    readonly actors: string;
    readonly artwork: string | undefined;
    readonly url: string;
}

export function toFavoriteDto(movie: Movie): FavoriteDto {
    let artwork;
    if (movie.artwork) {
        artwork = movie.artwork.replace("800x1200", "128x192")
    }

    const year = movie.releaseDate.getFullYear();
    return {
        name: movie.name,
        id: movie.slug,
        year: year,
        director: movie.director,
        actors: movie.actors.join(", "),
        artwork: artwork,
        url: `/movies/${movie.slug}`,
    };
}
