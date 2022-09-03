import { Movie } from "./movie";

// Dark crystals 2 directors: Frank Oz

const movies: Movie[] = [
    {
        name: "Dune",
        artwork: "dune.jpg",
        director: "David Lynch",
        slug: "dune-1984",
        writers: ["David Lynch"],
        runningTimes: 137,
        releaseDate: new Date("1984-12-03"),
        actors: [
            "Kyle MacLachlan",
            "Jürgen Prochnow",
            "Max von Sydow",
            "Patrick Stewart",
            "Sting",
            "Sean Young",
        ],
        boxOffice: {
            min: 30900000,
            max: 37900000,
        },
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Dune_(1984_film)",
            imdb: "https://www.imdb.com/title/tt0087182/",
        },
    },
    {
        name: "The Dark Crystal",
        artwork: "the-dark-crystal.jpg",
        director: "Jim Henson",
        slug: "the-dark-crystal",
        writers: ["David Odell", "Jim Henson"],
        runningTimes: 93,
        releaseDate: new Date("1982-12-17"),
        actors: [
            "Stephen Garlick",
            "Lisa Maxwell",
            "Billie Whitelaw",
            "Percy Edwards",
        ],
        boxOffice: {
            min: 41400000,
            max: 41400000,
        },
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/The_Dark_Crystal",
            imdb: "https://www.imdb.com/title/tt0083791/",
        },
    },
    {
        name: "Blade Runner",
        artwork: "blade-runner.jpg",
        director: "Ridley Scott",
        slug: "blade-runner",
        writers: ["Hampton Fancher", "David Peoples"],
        runningTimes: 117,
        releaseDate: new Date("1982-06-25"),
        actors: [
            "Harrison Ford",
            "Rutger Hauer",
            "Sean Young",
            "Edward James Olmos",
        ],
        boxOffice: {
            min: 41600000,
            max: 41600000,
        },
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Blade_Runner",
        },
    },
    {
        name: "Tron",
        artwork: "tron.jpg",
        slug: "tron",
        director: "Steven Lisberger",
        writers: ["Steven Lisberger", "Bonnie MacBird", "Charles S. Haas"],
        runningTimes: 96,
        releaseDate: new Date("1982-07-09"),
        actors: [
            "Jeff Bridges",
            "Bruce Boxleitner",
            "David Warner",
            "Cindy Morgan",
            "Barnard Hughes",
        ],
        boxOffice: {
            min: 50000000,
            max: 50000000,
        },
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Tron",
            imdb: "https://www.imdb.com/title/tt0084827/",
        },
    },
    {
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
    },
    {
        name: "Indiana Jones and the Raiders of the Lost Ark",
        artwork: "raiders-of-the-lost-ark.jpg",
        director: "Steven Spielberg",
        slug: "raiders-of-the-lost-ark",
        writers: ["Lawrence Kasdan"],
        runningTimes: 115,
        releaseDate: new Date("1981-06-12"),
        actors: [
            "Harrison Ford",
            "Karen Allen",
            "Paul Freeman",
            "Ronald Lacey",
            "John Rhys-Davies",
            "Denholm Elliott",
        ],
        boxOffice: {
            min: 389900000,
            max: 389900000,
        },
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Raiders_of_the_Lost_Ark",
            imdb: "https://www.imdb.com/title/tt0082971/",
        },
    },
    {
        name: "Top Gun",
        artwork: "top-gun.jpg",
        director: "Tony Scott",
        slug: "top-gun",
        writers: ["Jim Cash", "Jack Epps Jr."],
        runningTimes: 110,
        releaseDate: new Date("1986-05-12"),
        actors: [
            "Tom Cruise",
            "Kelly McGillis",
            "Val Kilmer",
            "Anthony Edwards",
            "Tom Skerritt",
        ],
        boxOffice: {
            min: 357300000,
            max: 357300000,
        },
        links: {
            wikipedia: "https://en.wikipedia.org/wiki/Top_Gun",
            imdb: "https://www.imdb.com/title/tt0092099/",
        },
    },
];

export default movies;
