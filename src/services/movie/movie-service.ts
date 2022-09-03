import { Movie } from "./movie";
import movies from "./movie-repository";

export function findMovieBySlug(slug: string): Movie | undefined {
    return movies.find((movie) => movie.slug == slug);
}

export function findMovies(search: string, sort: "name" | "release"): Movie[] {
    const searchNormalized = search.toLowerCase();
    const results = movies.filter(
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
