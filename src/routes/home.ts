import { Request, Response } from "express";
import * as MovieRepository from "../services/movie/movie-repository";
import express = require("express");

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    const popularMovies = MovieRepository.movies.slice(0, 11);
    const todayMovies = MovieRepository.movies.slice(11, 22);

    res.render("home", {
        title: "Movies Box",
        popularMovies: popularMovies,
        todayMovies: todayMovies,
    });
});

export default router;
