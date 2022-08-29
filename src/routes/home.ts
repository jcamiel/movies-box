import { Request, Response } from "express";
import movies from "../services/movie/movie-repository";
import express = require("express");

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.render("home", {
        title: "Movies Box",
        movies: movies,
    });
});

export default router;
