/** Returns a list of `count` unique numbers randomly selected in [0..max]   */
export function getRand(count: number, max: number): number[] {
    const countLimited = Math.min(count, max);
    const rands: number[] = [];
    while (rands.length < countLimited) {
        const rand = Math.floor(Math.random() * max);
        if (rands.some((it) => it === rand)) {
            continue;
        }
        rands.push(rand);
    }
    return rands;
}
