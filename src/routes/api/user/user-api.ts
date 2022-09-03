import { Request, Response } from "express";
import { param } from "express-validator";
import crypto = require("crypto");
import * as UserService from "../../../services/authent/user-service";
import express = require("express");

const router = express.Router();

router.delete(
    "/users/:username",
    param("username", "Username must be 4 to 32 chars long")
        .isLength({ min: 4, max: 32 })
        .trim()
        .escape(),
    (req: Request, res: Response) => {
        const username = req.params.username;
        const user = UserService.findUserByUsername(username);
        if (!user) {
            return res.status(404);
        }
        UserService.deleteUser(username);
        res.send("");
    }
);

router.get("/available-username", (req: Request, res: Response) => {
    const uuid = crypto.randomUUID();
    const username = uuid.slice(0, 16);
    return res.json({
        username: username,
    });
});

export default router;
