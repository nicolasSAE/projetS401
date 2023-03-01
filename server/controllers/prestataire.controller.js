import {getAllPrestataires, getByID} from "../services/prestataire.service.js";

export const getPrestataires = (req, res) =>{
    getAllPrestataires((error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(result)
        }
    }).then(r => console.log(r));
}
export const getPrestataireByID = (req, res) =>{
    let id = req.params.id;
    getByID(id, (error, result) => {
        if (error) {
            console.error(error);
            res.status(400).send({success:1, content: error})
        } else {
            res.status(200).send(result)
        }
    }).then(r => console.log(r));
}