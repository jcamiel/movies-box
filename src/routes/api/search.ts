import { Request, Response } from "express";
import express = require("express");
import { findMovies } from "../../services/movie/movie-service";
import { query, validationResult } from "express-validator";
import { toResultMovie } from "./result";

const router = express.Router();

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
