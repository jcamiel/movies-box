import { Request, Response } from "express";
import express = require("express");
import authenticated from "../../../services/authent/middleware";
import * as MovieService from "../../../services/movie/movie-service";
import * as FavoriteService from "../../../services/favorite/favorite-service";

const router = express.Router();

router.put("/", authenticated, (req: Request, res: Response) => {
    const selected = req.body.selected;
    const movieSlug = req.body.movie_id;
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const userId = req.session.user!.id; // request is authenticated so user is not null

    const movie = MovieService.findMovieBySlug(movieSlug);
    if (!movie) {
        res.status(400).json({ message: `No movie with id ${movieSlug}` });
        return;
    }

    let ret;
    if (selected) {
        ret = FavoriteService.addFavorite(userId, movie.id);
    } else {
        ret = FavoriteService.removeFavorite(userId, movie.id);
    }
    if (ret) {
        res.status(200).json({ movie_id: movieSlug, selected: selected });
    } else {
        res.status(400).json({ message: `Unable to process ${movieSlug}` });
    }
});

export default router;
