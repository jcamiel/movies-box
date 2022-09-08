/**
 * User's Favorite model.
 */
interface Favorite {
    readonly userId: string;
    readonly movieId: number;
}

const favoritesRepository: Favorite[] = [];

export default favoritesRepository;
