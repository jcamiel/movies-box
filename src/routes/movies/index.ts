import { Request, Response } from "express";
import * as MovieService from "../../services/movie/movie-service";
import { toMovieDto } from "./movie-dto";
import express = require("express");
import * as FavoriteServices from "../../services/favorite/favorite-service";

const router = express.Router();

router.get("/:movieSlug", (req: Request, res: Response) => {
    const movieSlug = req.params.movieSlug;
    const movie = MovieService.findMovieBySlug(movieSlug);
    if (!movie) {
        res.sendStatus(404);
        return;
    }

    let isFavorite = false;
    if (req.session.user) {
        isFavorite = FavoriteServices.isFavorite(req.session.user.id, movie.id);
    }

    const movieDto = toMovieDto(movie);
    res.render("movies/index", {
        movie: movieDto,
        favorite: isFavorite,
    });
});

export default router;
