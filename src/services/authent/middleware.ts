import { NextFunction, Request, Response } from "express";

function authenticated(req: Request, res: Response, next: NextFunction) {
    // TODO: test if path start with api and return 403
    if (req.session.user) {
        next();
    } else {
        if (req.baseUrl.startsWith("/api")) {
            console.log("Authenticated access needed, return 401");
            res.sendStatus(401);
        } else {
            console.log("Authenticated access needed, redirect to login");
            res.redirect("/login");
        }
    }
}

export default authenticated;
