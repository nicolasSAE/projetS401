import {getAllAccounts} from "../services/compte.service.js";

export const inscriptionValidation = (req, res, next) => {
    let username = req.body.username;
    let mdp = req.body.password;
    let mail = req.body.mail;
    let nom =  req.body.nom;
    let prenom = req.body.prenom;
    getAllAccounts((err, users) => {
        if (err) {
            console.error(err);
            res.status(400).send({success: 1, content: err});
        } else {
            let isValid = true;
            let errorMsg;
            if (!username || !mdp || !mail || !nom || !prenom){
                errorMsg = "Une ou plusieurs informations sont manquantes";
                isValid = false;
            }
            for (let i = 0; i < users.length; i++) {
                if (users[i].mail === mail || users[i].username === username){
                    isValid = false;
                    errorMsg = "Utilisateur déja inscrit";
                    break;
                }
            }
            console.log("validated : " + isValid);
            if (!isValid){
                res.status(400).send({success:0, err:errorMsg});
            } else {
                next();
            }
        }
    });
}