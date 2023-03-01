import db from "../models/index.js";

export const addContactInDB = async (email, nom, prenom, message, callback) => {
    try {
        const formulaire = await db.formulaire_contact.create({
            email: email,
            nom: nom,
            prenom: prenom,
            message: message
        });
        return callback(null, formulaire);
    } catch (e){
        return callback(e, []);
    }
}

export const addCommentInDb = async (nom, message) => {
    try {
        let currentDate = new Date();
        return await db.livre_or.create({
            date_comment: currentDate,
            nom: nom,
            message: message
        });
    } catch(e) {
        return e;
    }
}

export const getAllComments = async () => {
    try {
        return await db.livre_or.findAll();
    } catch (e){
        return e;
    }
}
