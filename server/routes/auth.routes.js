const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '1088594168504-ihgih6n9slh7kgspgafravg8q02fg6p9.apps.googleusercontent.com';
const client = new OAuth2Client('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');

const GitHubStrategy = require('passport-github').Strategy;
const GITHUB_CLIENT_ID = 'b5f70dc9af1cad8f94de';
const GITHUB_CLIENT_SECRET = 'c42a6733a18757aa79f2ee1e9ee44789262a382e';
const GITHUB_CALLBACK_URL = 'http://localhost:3000/auth/github/callback';

const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
module.exports = function(app,passport) {

    // Google
    // // route pour la connexion avec Google
    // app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
    // // route de rappel pour Google
    // app.get('/auth/google/callback', passport.authenticate('google', {
    //     successRedirect: '/home',
    //     failureRedirect: '/signin'
    // }));


    app.post('/auth/google', async (req, res) => {
        console.log("test post");
        const { id_token } = req.body;

        try {
            // Vérification de l'authenticité du jeton d'identification
            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: CLIENT_ID,
            });

            const { name, email } = ticket.getPayload();

            // Vérification de la présence de l'utilisateur dans la base de données
            const user = await User.findOne({ email: email });

            if (user) {
                // Si l'utilisateur existe déjà dans la base de données, on le connecte
                req.logIn(user, function(err) {
                    if (err) { return next(err); }
                    return res.send({ success: true });
                });
            } else {
                // Si l'utilisateur n'existe pas dans la base de données, on le crée
                const newUser = new User({
                    email: email,
                    firstName: name.split(' ')[0],
                    lastName: name.split(' ')[1],
                });

                await newUser.save();

                req.logIn(newUser, function(err) {
                    if (err) { return next(err); }
                    return res.send({ success: true });
                });
            }
        } catch (error) {
            console.error(error);
            res.status(401).send({ success: false });
        }
    });

    // GitHub
    passport.use(new GitHubStrategy({
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: GITHUB_CALLBACK_URL
        },
        function(accessToken, refreshToken, profile, cb) {
            User.findOne({ githubId: profile.id }, function(err, user) {
                if (err) { return cb(err); }
                if (user) {
                    return cb(null, user);
                } else {
                    var newUser = new User({
                        githubId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value
                    });
                    newUser.save(function(err) {
                        if (err) { return cb(err); }
                        return cb(null, newUser);
                    });
                }
            });
        }
    ));

    // Route pour l'authentification GitHub
    app.get('/auth/github', passport.authenticate('github'));

    // Route de rappel pour l'authentification GitHub
    app.get('/auth/github/callback',
        passport.authenticate('github', { failureRedirect: '/signin' }),
        function(req, res) {
            // Si l'authentification réussit, redirigez l'utilisateur vers la page d'accueil
            res.redirect('/home');
        }
    );



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

    app.get('/signup', controller.signupv);
    app.post("/signin", controller.signin);
    app.get('/signin', controller.signinv);

    app.get('/home', isLoggedIn, controller.home);
    app.get('/logout',controller.logout);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/signin');
    }
};