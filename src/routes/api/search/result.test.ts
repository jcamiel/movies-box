import { Movie } from "../../../services/movie/movie";
import { ResultMovie, toResultMovie } from "./result";

test("returns a result form a movie", () => {
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
    const result = toResultMovie(movie);
    const expected: ResultMovie = {
        name: "Conan the Barbarian",
        url: "/movies/conan-the-barbarian",
        director: "John Milius",
        release_date: "1982-05-14",
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
        artwork: "/img/conan-the-barbarian.jpg",
        artwork_128: "/img/conan-the-barbarian-128x192.jpg",
    };
    expect(result).toStrictEqual(expected);
});
