import type { Express } from "express";

import home from "./home";
import login from "./login";
import logout from "./logout";
import signup from "./signup";
import userMovies from "./user/my-movies";
import movieDetail from "./movies/detail";
import search from "./search";
import searchApi from "./api/search/search-api";
import userApi from "./api/user/user-api";
import usernameApi from "./api/user/username-api";
import favoriteApi from "./api/favorite/favorite-api";

/**
 * Adds routes to an Express app.
 * @param app Express application instance.
 */
export function addRoutes(app: Express) {
    app.use("/", home);
    app.use("/login", login);
    app.use("/logout", logout);
    app.use("/signup", signup);
    app.use("/my-movies", userMovies);
    app.use("/movies", movieDetail);
    app.use("/search", search);

    app.use("/api/search", searchApi);
    app.use("/api/users", userApi);
    app.use("/api/usernames", usernameApi);
    app.use("/api/favorites/", favoriteApi);
}
