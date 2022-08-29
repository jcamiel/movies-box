import { NextFunction, Request, Response } from "express";

function authenticated(req: Request, res: Response, next: NextFunction) {
    if (req.session.user) {
        next();
    } else {
        console.log("Authenticated access needed, redirect to login");
        res.redirect("/login");
    }
}

export default authenticated;
