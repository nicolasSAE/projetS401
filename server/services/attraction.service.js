import db from "../models/index.js";
export const getAllAttractions = async (callback) => {
    try {
        const result = await db.attraction.findAll({
            include: [
                {
                model: db.compte,
                }
                ,{
                model: db.type_attraction
                }
            ],

        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const getByID = async (id, callback) => {
    try {
        const result = await db.attraction.findAll({
            where:{
                id_attraction: id
            }
        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const getTypeOfAnAttraction = async (id, nom, prix_enfant, prix_adulte) => {
    try {
        const result = await db.type_attraction.findAll({
            where: {
                id_type_attraction: id
            }
        });
        return callback(null, result);
    } catch (e) {
        return callback(e, []);
    }
}

export const updateAttractionById = async (id, nom, prix_enfant, prix_adulte, taille_requise) => {
    try {
        await db.attraction.update({
            nom: nom,
            prix_enfant:prix_enfant,
            prix_adulte:prix_adulte,
            taille_requise:taille_requise
        }, {
            where:{
                id_attraction:id
            }
        });
    } catch (e) {
        console.error(e);
        return e;
    }
}