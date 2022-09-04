import { Request, Response } from "express";
import express = require("express");
import { removeEtagHeader } from "../../../utils/response";
import authenticated from "../../../services/authent/middleware";
import nocache from "nocache";

const router = express.Router();

router.put(
    "/",
    nocache(),
    removeEtagHeader,
    authenticated,
    (req: Request, res: Response) => {
        res.sendStatus(200);
    }
);

export default router;
