import { Request, Response } from "express";
import express = require("express");
import { findMovies } from "../../services/movie/movie-service";
import { query, validationResult } from "express-validator";
import { Movie } from "../../services/movie/movie";
import { toISO8601Short } from "../../utils/date";

const router = express.Router();

interface ResultMovie {
    readonly name: string;
    readonly director: string;
    readonly releaseDate: string;
    readonly actors: string[];
}

function toResultMovie(movie: Movie): ResultMovie {
    return {
        name: movie.name,
        director: movie.director,
        releaseDate: toISO8601Short(movie.releaseDate),
        actors: movie.actors,
    };
}

router.get(
    "/",
    query("q").exists().escape().trim(),
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const movies = findMovies(req.query.q as string, "name");
        const resultMovies = movies.map((movie) => toResultMovie(movie));
        return res.json(resultMovies);
    }
);

export default router;
