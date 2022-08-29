import { Express } from "express";

import home from "./home";
import login from "./login";
import userMovies from "./user/movies";
import movies from "./movies";
import logout from "./logout";

export function addRoutes(app: Express) {
    app.use("/", home);
    app.use("/login", login);
    app.use("/my-movies", userMovies);
    app.use("/logout", logout);
    app.use("/movies", movies);
}
