import csurf = require("csurf");

const csrf = csurf({ cookie: false });

export default csrf;
