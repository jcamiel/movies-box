import { Request, Response } from "express";
import csrf from "../core/csrf";
import { body, CustomValidator, validationResult } from "express-validator";
import * as UserService from "../services/authent/user-service";
import { FlashMessageType } from "../core/flash-message";
import express = require("express");

const router = express.Router();

router.get("/", csrf, (req: Request, res: Response) => {
    res.render("signup", {
        title: "Sign up",
        csrfToken: req.csrfToken(),
    });
});

const isValidUserEmail: CustomValidator = (value) => {
    const user = UserService.findUserByEmail(value);
    console.log(`user ${user}`);
    if (user) {
        throw new Error("E-mail already in use");
    }
    return value;
};

// TODo add validation on username

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
    body("email", "Password must 6 to 32 chars long").isEmail(),
    body("email", "E-mail already in use").custom(isValidUserEmail),

    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (errors && !errors.isEmpty()) {
            req.session.errors = errors.array();
            res.redirect("/signup");
            return;
        }

        const user = UserService.createUser(
            req.body.username,
            req.body.email,
            req.body.name,
            req.body.password
        );

        // Regenerate session when signing in to prevent fixation.
        req.session.regenerate(() => {
            req.session.user = user;
            req.session.flashMessages = [
                {
                    type: FlashMessageType.SUCCESS,
                    text: `Welcome ${user.name}!`,
                },
            ];
            res.redirect("/my-movies");
        });
    }
);

export default router;
