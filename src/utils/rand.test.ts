import { unique } from "./list";
import { getRand } from "./rand";

test("returns a list of unique randoms", () => {
    const rands = getRand(5, 100);
    expect(rands.length).toBe(5);
    expect(rands).toStrictEqual(unique(rands));
});
