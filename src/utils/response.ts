import { NextFunction, Request, Response } from "express";
import onHeaders from "on-headers";

export function removeEtagHeader(
    req: Request,
    res: Response,
    next: NextFunction
) {
    onHeaders(res, function () {
        this.removeHeader("ETag");
    });
    next();
}
