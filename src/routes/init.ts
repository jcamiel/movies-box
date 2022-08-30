import { Express } from "express";

import home from "./home";
import login from "./login";
import userMovies from "./user/movies";
import movies from "./movies";
import logout from "./logout";
import search from "./search";
import searchApi from "./api/search";

export function addRoutes(app: Express) {
    app.use("/", home);
    app.use("/login", login);
    app.use("/my-movies", userMovies);
    app.use("/logout", logout);
    app.use("/movies", movies);
    app.use("/search", search);
    app.use("/api/search", searchApi);
}
