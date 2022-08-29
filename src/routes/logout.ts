import { Request, Response } from "express";

import express = require("express");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    // destroy the user's session to log them out
    // will be re-created next request
    req.session.destroy(function () {
        res.redirect("/");
    });
});

export default router;
