import { NextFunction, Request, Response } from "express";
import * as config from "./config";
import { addSessionSupport } from "./core/session";
import { Error } from "./core/error";
import { addRoutes } from "./routes/init";
import createError = require("http-errors");
import express = require("express");
import path = require("path");
import cookieParser = require("cookie-parser");
import logger = require("morgan");
import { addHandlebarsEngine } from "./core/handlebars";
import * as UserService from "./services/authent/user-service";

export const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
addHandlebarsEngine(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(config.APP_SECRET));

addSessionSupport(app);

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Inject potential user in any response
app.use((req: Request, res: Response, next: NextFunction) => {
    res.locals.user = req.session.user;
    next();
});

// Flash messages
app.use((req: Request, res: Response, next: NextFunction) => {
    const messages = req.session.flashMessages;
    delete req.session.flashMessages;
    res.locals.flashMessages = messages;
    next();
});

// Error validations
app.use((req: Request, res: Response, next: NextFunction) => {
    const errors = req.session.errors;
    delete req.session.errors;
    res.locals.errors = errors;
    next();
});

addRoutes(app);

// Catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
});

// Error handler
app.use((err: Error, req: Request, res: Response) => {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render("error");
});

// Create a dummy user
UserService.createUser("bob78", "bob78@example.net", "Bob", "12345678");
