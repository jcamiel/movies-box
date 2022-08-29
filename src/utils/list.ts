/** Returns the list `items` with duplicated removed. */
export function unique<T>(items: T[]): T[] {
    return [...new Set(items)];
}
