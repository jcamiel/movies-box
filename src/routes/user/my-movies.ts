import { Request, Response } from "express";
import express = require("express");
import authenticated from "../../services/authent/middleware";
import * as FavoriteService from "../../services/favorite/favorite-service";
import { toFavoriteDto } from "./favorite-dto";

const router = express.Router();

router.get("/", authenticated, (req: Request, res: Response) => {

    // TODO: finalize pagination
    const page = 0;
    const count = 20;
    const from = page * count;
    const to = (page + 1) * count;
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const userId = req.session.user!.id;

    const favorites = FavoriteService.findFavoriteMovies(userId, from, to).map(
        (movie) => toFavoriteDto(movie)
    );

    res.render("user/my-movies", {
        title: "My Movies",
        favorites: favorites,
    });
});

export default router;
