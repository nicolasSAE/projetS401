require('dotenv').config();
module.exports = {
// vous pouvez modifier cette valeur
    secret: process.env.AUTH_SECRET || "JeanH",
    jwtExpiration: 60,
    jwtRefreshExpiration: 120,
};
