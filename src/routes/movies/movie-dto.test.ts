import { Movie } from "../../services/movie/movie";
import { MovieDto, toMovieDto } from "./movie-dto";

test("returns a dto form a movie", () => {
    const movie: Movie = {
        name: "Conan the Barbarian",
        artwork: "conan-the-barbarian.jpg",
        slug: "conan-the-barbarian",
        director: "John Milius",
        writers: ["John Milius", "Oliver Stone"],
        runningTimes: 129,
        releaseDate: new Date("1982-05-14"),
        actors: [
            "Arnold Schwarzenegger",
            "James Earl Jones",
            "Sandahl Bergman",
            "Ben Davidson",
            "Cassandra Gaviola",
            "Gerry Lopez",
            "Mako",
            "Valerie Quennessen",
            "William Smith",
            "Max von Sydow",
        ],
        boxOffice: {
            min: 68900000,
            max: 79100000,
        },
        links: {
            wikipedia:
                "https://en.wikipedia.org/wiki/Conan_the_Barbarian_(1982_film)",
        },
    };
    const movieDto = toMovieDto(movie);
    const expected: MovieDto = {
        name: "Conan the Barbarian",
        year: 1982,
        director: "John Milius",
        writers: "John Milius, Oliver Stone",
        actors: "Arnold Schwarzenegger, James Earl Jones, Sandahl Bergman, Ben Davidson, Cassandra Gaviola, Gerry Lopez, Mako, Valerie Quennessen, William Smith, Max von Sydow",
        artwork: "conan-the-barbarian.jpg",
        releaseDate: "May 5, 1982",
        url: "/movies/conan-the-barbarian",
        imdbUrl: "",
        wikipediaUrl:
            "https://en.wikipedia.org/wiki/Conan_the_Barbarian_(1982_film)",
    };
    expect(movieDto).toStrictEqual(expected);
});
