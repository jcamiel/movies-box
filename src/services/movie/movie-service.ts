import { Movie } from "./movie";
import movies from "./movie-repository";

export function findMovieBySlug(slug: string): Movie | undefined {
    return movies.find((it) => it.slug == slug);
}
