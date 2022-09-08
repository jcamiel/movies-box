/**
 * Formats a date to ISO8601 short format.
 *
 * ```javascript
 * let d = new Date();
 * toISO8601Short(d);
 * >> "2022-09-08"
 * ```
 * @param date
 */
export function toISO8601Short(date: Date): string {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return [year, month, day].join("-");
}
