import {AllBillets,BilletsByIDCompte,Billet} from "../services/billet.service.js";

export const getAllBillets = (req, res) =>{
    AllBillets((error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(result)
        }
    })
}

export const getBilletsByIDCompte = (req, res) => {
    let id_compte = req.params.id;
    BilletsByIDCompte(id_compte, (error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(result)
        }
    })
}

export const postBillet = (req, res) => {
    let id_compte = req.params.id;
    let id_attraction = req.body.id_attraction;
    Billet(id_compte,id_attraction, (error, result) => {
        if (error){
            console.error(error);
            res.status(400).send({success:1, content: error});
        } else {
            console.log(result);
            res.status(200).send(result)
        }
    })
}