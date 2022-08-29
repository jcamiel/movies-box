import { Request, Response } from "express";

import express = require("express");
import authenticated from "../../services/authent/middleware";
const router = express.Router();

router.get("/", authenticated, (req: Request, res: Response) => {
    res.render("user/movies", {
        title: "My Movies",
    });
});

export default router;
