const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const RefreshToken = db.refreshToken;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.signup = (req, res) => {
// Enregistrer l'utilisateur dans la base de données
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(user => {
            res.send({ message: "L'utilisateur a été enregistré avec succès!" });
        })

        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.signin = (req, res) => {
    console.log(req.body);
    User.findOne({
        where: {
            emailId: req.body.emailId
        }
    })
        .then(async (user) => {
            if(!user) {
                return res.status(404).send({ message: "Utilisateur non trouvé." });
            }
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if(!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Mot de passe incorrect!"
                });
            }
            let token = jwt.sign({ id: user.id }, config.secret, {
                // expiresIn: 86400 // 24 heures
                expiresIn: config.jwtExpiration
            });
            let refreshToken = await RefreshToken.createToken(user);
            res.status(200).send({
                id: user.id,
                firstName: user.emailId,
                accessToken: token,
                refreshToken: refreshToken
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.refreshToken = async (req, res) => {
    const { refreshToken: requestToken } = req.body;
    if (requestToken == null) {
        return res.status(403).json({ message: "Le jeton d'actualisation est requis!" });
    }
    try {
        let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });
        console.log(refreshToken)
        if (!refreshToken) {
            res.status(403).json({ message: "Le jeton d'actualisation n'est pas dans la base de données!" });
            return;
        }
        if (RefreshToken.verifyExpiration(refreshToken)) {
            RefreshToken.destroy({ where: { id: refreshToken.id } });
            res.status(403).json({
                message: "Le jeton d'actualisation a expiré. Veuillez faire une nouvelle demande de connexion",
            });
            return;
        }
        const user = await refreshToken.getUser();
        let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: config.jwtExpiration,
        });
        return res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: refreshToken.token,
        });
    } catch (err) {
        return res.status(500).send({ message: err });
    }
};