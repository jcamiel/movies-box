import { Request, Response } from "express";
import { param } from "express-validator";
import * as UserService from "../../../services/authent/user-service";
import express = require("express");
import nocache from "nocache";
import { removeEtagHeader } from "../../../utils/response";

const router = express.Router();

router.delete(
    "/:username",
    nocache(),
    removeEtagHeader,
    param("username", "Username must be 4 to 32 chars long")
        .isLength({ min: 4, max: 32 })
        .trim()
        .escape(),
    (req: Request, res: Response) => {
        const username = req.params.username;
        const user = UserService.findUserByUsername(username);
        if (!user) {
            return res.status(404).json({message: `No user with username ${username}`});
        }
        UserService.deleteUser(username);
        res.status(200).json({});
    }
);

export default router;
