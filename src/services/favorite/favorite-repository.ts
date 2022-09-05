interface Favorite {
    readonly userId: number;
    readonly movieId: number;
}

const favoritesRepository: Favorite[] = [];

export default favoritesRepository;
