import { NextFunction, Request, Response } from "express";
import { User } from "../services/authent/user";
import * as UserService from "../services/authent/user-service";
import csrf from "../core/csrf";
import { FlashMessageType } from "../core/flash-message";
import express = require("express");
import { body, validationResult } from "express-validator";

const router = express.Router();

router.get("/", csrf, (req: Request, res: Response) => {
    res.render("login", {
        title: "Login",
        csrfToken: req.csrfToken(),
    });
});

router.post(
    "/",
    csrf,
    body("username", "Username must be 4 to 32 chars long")
        .isLength({ min: 4, max: 32 })
        .trim()
        .escape(),
    body("password", "Password must 6 to 32 chars long")
        .isLength({ min: 6, max: 32 })
        .trim()
        .escape(),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (errors && !errors.isEmpty()) {
            req.session.errors = errors.array();
            res.redirect("/login");
            return;
        }

        UserService.authenticate(
            req.body.username,
            req.body.password,
            (user: User | null, err: Error | null) => {
                if (err) {
                    return next(err);
                }
                if (user) {
                    // Regenerate session when signing in to prevent fixation.
                    req.session.regenerate(() => {
                        req.session.user = user;
                        req.session.flashMessages = [
                            {
                                type: FlashMessageType.SUCCESS,
                                text: `Welcome back ${user.name}!`,
                            },
                        ];
                        res.redirect("/my-movies");
                    });
                } else {
                    req.session.flashMessages = [
                        {
                            type: FlashMessageType.ERROR,
                            text: `Authentication failed, please check your username and password`,
                        },
                    ];
                    res.redirect("/login");
                }
            }
        );
    }
);

export default router;
