import db from "../models/index.js";
export const getAllPrestataires = async (callback) => {
    try {
        const result = await db.compte.findAll({
            where: {
                role: 'prestataire'
            }
        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

/*
export const getByID = async (id, callback) => {
    try {
        const result = await db.compte.findAll({
            where:{
                role: 'prestataire',
                id: id
            }
        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}
*/

export const getByID = async (id, callback) => {
    try {
        const result = await (db.compte).findByPk(id,{
            where: {
                role: 'prestataire'
            },
            include: [db.attraction,db.stand]
        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}