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

    app.post('/signin-google', (req, res) => {
        const { id_token } = req.body;

        client.verifyIdToken({ idToken: id_token, audience: CLIENT_ID })
            .then((ticket) => {
                const { email, given_name, family_name } = ticket.getPayload();
                console.log('email', email);
                console.log('given_name', given_name);
                console.log('family_name', family_name);
                res.redirect('/home');
            })
            .catch((err) => {
                console.error('Failed to verify id token', err);
                res.status(400).send('Failed to sign in with Google');
            });
    });

    app.get('/home', isLoggedIn, controller.home);
    app.get('/logout',controller.logout);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/signin');
    }
};