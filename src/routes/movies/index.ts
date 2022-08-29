import { Request, Response } from "express";
import { findMovieBySlug } from "../../services/movie/movie-service";
import { toMovieDto } from "./movie-dto";
import express = require("express");

const router = express.Router();

router.get("/:movieSlug", (req: Request, res: Response) => {
    const movieSlug = req.params.movieSlug;
    const movie = findMovieBySlug(movieSlug);
    if (!movie) {
        res.sendStatus(404);
        return;
    }
    const movieDto = toMovieDto(movie);
    res.render("movies/index", {
        movie: movieDto,
    });
});

export default router;
