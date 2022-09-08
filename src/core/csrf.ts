import csurf = require("csurf");

/**
 * CSRF token middleware.
 */
const csrf = csurf({ cookie: false });

export default csrf;
