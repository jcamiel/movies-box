import {NextFunction, Request, Response} from "express";

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req: Request, res: Response, next: NextFunction) {
  const movies : Movie[] = require("../data/movies");
  res.render("index",
      {
        title: "Movies Box",
        movies: movies
      }
  );
});

module.exports = router;
