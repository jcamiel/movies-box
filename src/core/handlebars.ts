import hbs = require("hbs");
import { Express } from "express";

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import handlebars_helper_range = require("handlebars-helper-range");

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

function add(v1: number, v2: number): number {
    return v1 + v2;
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
function section(name, options) {
    // @ts-ignore
    if (!this.sections) this.sections = {};

    // @ts-ignore
    this.sections[name] = options.fn(this);
    return null;
}

export function addHandlebarsEngine(app: Express) {
    app.set("view engine", "hbs");
    hbs.registerHelper("eq", eq);
    hbs.registerHelper("ne", ne);
    hbs.registerHelper("lt", lt);
    hbs.registerHelper("gt", gt);
    hbs.registerHelper("lte", lte);
    hbs.registerHelper("gte", gte);
    hbs.registerHelper("add", add);
    hbs.registerHelper("section", section);
    hbs.registerHelper("range", handlebars_helper_range);
}
