import { Express } from "express";

import session = require("express-session");
import config from "../config";
import { User } from "../services/authent/user";
import { FlashMessage } from "./flash-message";
import { ValidationError } from "express-validator";

export function addSessionSupport(app: Express) {
    // Demo: leaking of 'X-Powered-By' headers
    app.disable("x-powered-by");

    app.use(
        session({
            resave: false, // don't save session if unmodified
            saveUninitialized: true, // don't create session until something stored
            secret: config.APP_SECRET,
            name: "x-session-id",

            // Demo: cookie SameSite attribute
            cookie: {
                sameSite: "strict",
            },
        })
    );
}

// Extend Session types to please Typescript.
declare module "express-session" {
    export interface SessionData {
        user?: User;
        flashMessages?: FlashMessage[];
        errors: ValidationError[];
    }
}
