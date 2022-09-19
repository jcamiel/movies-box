import type { Express } from "express";
import session = require("express-session");
import * as config from "../config";
import type { User } from "../services/authent/user-repository";
import type { FlashMessage } from "./flash-message";
import type { ValidationError } from "express-validator";

/**
 * Adds session support to an Express application.
 * @param app
 */
export function addSessionSupport(app: Express) {
    app.use(
        session({
            resave: false, // don't save session if unmodified
            saveUninitialized: true, // don't create session until something stored
            secret: config.APP_SECRET,

            // DEMO: default cookie session name
            // name: "x-session-id",

            // DEMO: cookie SameSite attribute
            // cookie: {
            //     sameSite: "strict",
            // },
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
