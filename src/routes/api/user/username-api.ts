import { Request, Response } from "express";
import express = require("express");
import nocache from "nocache";
import { removeEtagHeader } from "../../../utils/response";
import crypto from "crypto";

const router = express.Router();

router.get(
    "/available",
    nocache(),
    removeEtagHeader,
    (req: Request, res: Response) => {
        const uuid = crypto.randomUUID();
        const username = uuid.slice(0, 16);
        return res.json({
            username: username,
        });
    }
);

export default router;
