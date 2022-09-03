import { Express } from "express";

import home from "./home";
import login from "./login";
import logout from "./logout";
import signup from "./signup";
import userMovies from "./user/movies";
import movies from "./movies";
import search from "./search";
import searchApi from "./api/search/search-api";
import userApi from "./api/user/user-api";

export function addRoutes(app: Express) {
    app.use("/", home);
    app.use("/login", login);
    app.use("/logout", logout);
    app.use("/signup", signup);
    app.use("/my-movies", userMovies);
    app.use("/movies", movies);
    app.use("/search", search);

    app.use("/api/search", searchApi);
    app.use("/api", userApi);
}
