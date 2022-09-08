import type { Request, Response } from "express";
import express = require("express");
import crypto from "crypto";

const router = express.Router();

router.get("/available", (req: Request, res: Response) => {
    const uuid = crypto.randomUUID();
    const username = uuid.slice(0, 16);
    return res.json({
        username: username,
    });
});

export default router;
