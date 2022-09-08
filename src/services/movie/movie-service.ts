import { Movie } from "./movie";
import * as MovieRepository from "./movie-repository";

/**
 * Returns a movie by slug, or `undefined` if no match.
 * @param slug The movie's slug.
 */
export function findMovieBySlug(slug: string): Movie | undefined {
    return MovieRepository.movies.find((movie) => movie.slug == slug);
}

/**
 * Returns a movie by primary id, or `undefined` if no match.
 * @param id The movie's primary id.
 */
export function findMovieById(id: number): Movie | undefined {
    return MovieRepository.movies.find((movie) => movie.id == id);
}

/**
 * Returns a list of movie that matches a search term. If no match, returns an empty list.
 * @param search The search term.
 * @param sort "name" for sorting by name or "release" for sorting by release date.
 */
export function findMovies(search: string, sort: "name" | "release"): Movie[] {
    const searchNormalized = search.toLowerCase();
    const results = MovieRepository.movies.filter(
        (movie) =>
            movie.name.toLowerCase().includes(searchNormalized) ||
            movie.releaseDate
                .getFullYear()
                .toString()
                .includes(searchNormalized) ||
            movie.actors.some((actor) =>
                actor.toLowerCase().includes(searchNormalized)
            ) ||
            movie.director.toLowerCase().includes(searchNormalized)
    );

    switch (sort) {
        case "name":
            return results.sort((a: Movie, b: Movie) =>
                a.name.localeCompare(b.name, "en-US")
            );
        case "release":
            // TODO:
            return [];
    }
}
