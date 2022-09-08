import type { Request, Response } from "express";
import express = require("express");
import * as MovieService from "../../../services/movie/movie-service";
import { query, validationResult } from "express-validator";
import { toResultMovie } from "./result";
import type { Movie } from "../../../services/movie/movie";

const router = express.Router();

router.get(
    "/",
    query("q").exists().escape().trim(),
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const movies = MovieService.findMovies(req.query.q as string, "name");
        const resultMovies = movies.map((movie: Movie) => toResultMovie(movie));
        return res.json(resultMovies);
    }
);

export default router;
