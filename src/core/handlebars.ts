import hbs = require("hbs");
import { Express } from "express";

function eq<T>(v1: T, v2: T): boolean {
    return v1 === v2;
}

function ne<T>(v1: T, v2: T): boolean {
    return v1 !== v2;
}

function lt<T>(v1: T, v2: T): boolean {
    return v1 < v2;
}

function gt<T>(v1: T, v2: T): boolean {
    return v1 > v2;
}

function lte<T>(v1: T, v2: T): boolean {
    return v1 <= v2;
}

function gte<T>(v1: T, v2: T): boolean {
    return v1 >= v2;
}

export function addHandlebarsEngine(app: Express) {
    app.set("view engine", "hbs");
    hbs.registerHelper("eq", eq);
    hbs.registerHelper("ne", ne);
    hbs.registerHelper("lt", lt);
    hbs.registerHelper("gt", gt);
    hbs.registerHelper("lte", lte);
    hbs.registerHelper("gte", gte);
}
