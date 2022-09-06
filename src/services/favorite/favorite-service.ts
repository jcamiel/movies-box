import favoriteRepository from "./favorite-repository";
import * as MovieService from "../../services/movie/movie-service";
import { Movie } from "../movie/movie";

export function addFavorite(userId: string, movieId: number): boolean {
    if (!isFavorite(userId, movieId)) {
        favoriteRepository.push({ userId: userId, movieId: movieId });
    }

    return true;
}

export function removeFavorite(userId: string, movieId: number): boolean {
    // Check if this movie is already in user's favorites.
    const favoriteIndex = favoriteRepository.findIndex(
        (favorite) => favorite.userId == userId && favorite.movieId == movieId
    );
    if (favoriteIndex != -1) {
        favoriteRepository.splice(favoriteIndex, 1);
    }

    return true;
}

export function isFavorite(userId: string, movieId: number): boolean {
    const favorite = favoriteRepository.find(
        (favorite) => favorite.userId == userId && favorite.movieId == movieId
    );
    return favorite != undefined;
}

export function favoritesCount(userId: string): number {
    const favorites = favoriteRepository.filter(
        (favorite) => favorite.userId == userId
    );
    return favorites.length;
}

export function findFavoriteMovies(
    userId: string,
    from: number,
    to: number
): Movie[] {
    return favoriteRepository
        .filter((favorite) => favorite.userId == userId)
        .map((favorite) => MovieService.findMovieById(favorite.movieId))
        .filter((movie) => movie != undefined)
        .sort((a, b) =>
            (a as Movie).name.localeCompare((b as Movie).name, "en")
        )
        .slice(from, to + 1) as Movie[];
}
