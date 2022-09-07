import { NextFunction, Request, Response } from "express";

/**
 * Middleware for authenticated endpoint.
 * If the endpoint returns HTML, the unauthenticated user are redirected to /login.
 * If the endpoint returns JSON, the repsonse is a 401, to be managed by the client.
 * @param req Incoming request
 * @param res Outgoing Reponse
 * @param next The next function in the middlewares chain.
 */
function authenticated(req: Request, res: Response, next: NextFunction) {
    if (req.session.user) {
        next();
    } else {
        if (req.baseUrl.startsWith("/api")) {
            console.log("Authenticated access needed, returns 401");
            res.status(401).json({ message: "Unauthorized" });
        } else {
            console.log("Authenticated access needed, redirect to login");
            res.redirect("/login");
        }
    }
}

export default authenticated;
