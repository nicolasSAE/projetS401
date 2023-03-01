import db from "../models/index.js";
import {getAllAttractions} from "./attraction.service.js";
export const AllBillets = async (callback) => {
    try {
        const result = await db.billet.findAll({
            include: [
                {
                    model: db.compte,
                }
                ,{
                    model: db.attraction
                }
            ],

        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const BilletsByIDCompte = async (id, callback) => {
    try {
        const result = await db.billet.findAll({
            where:{
                id_compte: id
            }
        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const Billet = async (id_compte,id_attraction, callback) => {
    try {
        let attraction = await (db.attraction.findByPk(id_attraction));
        const billet = await db.billet.create({
            date_billet: Date.now(),
            prix: attraction.prix_adulte,
            id_compte: id_compte,
            id_attraction: id_attraction,
        });
        return callback(null, billet.dataValues);
    } catch (e){
        return callback(e, []);
    }
}