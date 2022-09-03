import { Request, Response } from "express";
import express = require("express");
import * as MovieService from "../../../services/movie/movie-service";
import { query, validationResult } from "express-validator";
import { toResultMovie } from "./result";
import { Movie } from "../../../services/movie/movie";
import nocache from "nocache";
import onHeaders from "on-headers";

const router = express.Router();

router.get(
    "/",
    query("q").exists().escape().trim(),
    nocache(),
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        removeEtagHeader(res);
        const movies = MovieService.findMovies(req.query.q as string, "name");
        const resultMovies = movies.map((movie: Movie) => toResultMovie(movie));
        return res.json(resultMovies);
    }
);

function removeEtagHeader(res: Response) {
    onHeaders(res, function () {
        this.removeHeader("ETag");
    });
}

export default router;
