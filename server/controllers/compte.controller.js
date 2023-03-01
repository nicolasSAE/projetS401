import {addAccountInDB, getAccountById, getAllAccounts} from "../services/compte.service.js";
import bcrypt from "bcrypt";

export const createAccount = (req, res) => {
    let username = req.body.username;
    let mdp = req.body.password;
    let mail = req.body.mail;
    let nom =  req.body.nom;
    let prenom = req.body.prenom;
    bcrypt.hash(mdp, 10, (err, hash) => {
        if (err) {
            res.status(400).send({success:1, data: err});
        } else {
            //console.log(username, mdp, mail, nom, prenom);
            addAccountInDB(username, hash, mail, nom, prenom, (err, result) => {
                if (err) {
                    console.error(err)
                    res.status(400).send({success: 1, data: err});
                } else {
                    res.status(200).send({success: 0, data: result});
                }
            });
        }
    });
}

export const getAccountByID = (req, res) => {
    let id = req.params.id;
    getAccountById(id, (err, result) => {
        if (err) {
            console.error(err)
            res.status(400).send({success: 1, data: err});
        } else {
            res.status(200).send({success: 0, data: result});
        }
    })
}

export const authentificate = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let isValid = true;
    getAllAccounts((err, users) => {
        let user = users.find(user => user.username === username);
        if (err) {
            console.error(err)
            return res.status(400).send({success: 0, err: err});
        } else if (user===undefined){
            return res.status(404).send({success: 0, err: "Nom d'utilisateur ou mot de passe incorrect"});
        } else {
            bcrypt.compare(password, user.password, (errCompare, result) => {
                console.log("same : " + result);
                if (errCompare || !result) {
                    console.error(errCompare);
                    res.status(400).send({success: 0, err: errCompare});
                }
                else {
                    res.status(200).send({success: 1, data: user})
                }
            });
        }
    })
}