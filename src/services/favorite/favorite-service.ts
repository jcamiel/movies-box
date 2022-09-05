import favoriteRepository from "./favorite-repository";
import favoritesRepository from "./favorite-repository";

export function addFavorite(userId: number, movieId: number): boolean {
    if (!isFavorite(userId, movieId)) {
        favoritesRepository.push({ userId: userId, movieId: movieId });
    }

    return true;
}

export function removeFavorite(userId: number, movieId: number): boolean {
    // Check if this movie is already in user's favorites.
    const favoriteIndex = favoriteRepository.findIndex(
        (favorite) => favorite.userId == userId && favorite.movieId == movieId
    );
    if (favoriteIndex != -1) {
        favoritesRepository.splice(favoriteIndex, 1);
    }

    return true;
}

export function isFavorite(userId: number, movieId: number) {
    const favorite = favoriteRepository.find(
        (favorite) => favorite.userId == userId && favorite.movieId == movieId
    );
    return favorite != undefined;
}
