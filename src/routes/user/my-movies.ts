import type { Request, Response } from "express";
import express = require("express");
import { query, validationResult } from "express-validator";
import authenticated from "../../services/authent/middleware";
import * as FavoriteService from "../../services/favorite/favorite-service";
import { toFavoriteDto } from "./favorite-dto";

const router = express.Router();

router.get(
    "/",
    authenticated,
    query("page").isInt({ min: 1 }).toInt().optional(),
    (req: Request, res: Response) => {
        let currentPage = 1;
        if (validationResult(req).isEmpty() && req.query.page) {
            currentPage = req.query.page as unknown as number;
        }
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        const userId = req.session.user!.id;

        const count = FavoriteService.favoritesCount(userId);
        const moviesPerPage = 8;
        const pages = Math.max(1, Math.floor((count - 1) / moviesPerPage) + 1);
        currentPage = Math.min(currentPage, pages);
        const from = (currentPage - 1) * moviesPerPage;
        const to = currentPage * moviesPerPage - 1;

        const favorites = FavoriteService.findFavoriteMovies(
            userId,
            from,
            to
        ).map((movie) => toFavoriteDto(movie));

        res.render("user/my-movies", {
            title: "My Movies",
            favorites: favorites,
            pages: pages,
            currentPage: currentPage,
        });
    }
);

export default router;
