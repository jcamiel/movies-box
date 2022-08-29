const APP_SECRET = process.env["APP_SECRET"] || "crazy cat for local dev";
const APP_SALT = process.env["APP_SALT"] || "salt for local dev";
export default { APP_SECRET, APP_SALT };
