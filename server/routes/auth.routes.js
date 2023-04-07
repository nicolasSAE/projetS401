const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '1088594168504-ihgih6n9slh7kgspgafravg8q02fg6p9.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

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

    // route pour la connexion avec Google
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
    // route de rappel pour Google
    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/home',
        failureRedirect: '/signin'
    }));

    app.get('/signup', controller.signupv);
    app.post("/signin", controller.signin);
    app.get('/signin', controller.signinv);

    app.post('/signin-google', controller.signingoogle);

    app.get('/home', isLoggedIn, controller.home);
    app.get('/logout',controller.logout);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/signin');
    }
};