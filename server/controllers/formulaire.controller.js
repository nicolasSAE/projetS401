import {addCommentInDb, addContactInDB, getAllComments} from "../services/formulaire.service.js";

export const createFormulaireContact = (req, res) => {
    let message = req.body.message;
    let email = req.body.email;
    let nom =  req.body.nom;
    let prenom = req.body.prenom;
    console.log("ca marche");
    addContactInDB(email, nom, prenom, message, (err, result) => {
        if (err) {
            console.error(err);
            res.status(400).send({success: 1, content: err})
        } else {
            res.status(200).send({success: 0, content: `Formulaire ajouté : ${result}`});
        }
    });
}

export const createAvisLivreOr = (req, res) => {
    let message = req.body.message;
    let nom =  req.body.nom;
    if (!message || !nom){
        return res.status(400).send({success:0, err:"Une ou plusieurs informations sont manquantes"});
    } else {
        addCommentInDb(nom, message)
            .then(comment => {
                return res.status(200).send({success:1, data: comment});
            })
            .catch(error => {
                return res.status(500).send({success:0, err:error});
            })
    }
}

export const getLivreOr = (req, res) => {
    getAllComments()
        .then(comments => {
            return res.status(200).send({success:1, data: comments});
        })
        .catch(error => {
            return res.status(400).send({success:0, err: error});
        });
}
