const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
module.exports = function(app,passport) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/signup",
        [
            verifySignUp.checkDuplicateUsername,
        ],
        controller.signup
    );
    app.post("/signin", controller.signin);
    app.get('/signup', controller.signupv);
    app.get('/signin', controller.signinv);
    app.get('/home',isLoggedIn, controller.home);
    app.get('/logout',controller.logout);
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
};