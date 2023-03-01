import db from "../models/index.js";
export const getAllStands = async (callback) => {
    try {
        const result = await db.stand.findAll({
            include: [
                {
                    model: db.compte,
                }
                ,{
                    model: db.type_stand
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
        const result = await db.stand.findAll({
            where:{
                id_stand: id
            }
        });
        return callback(null, result);
    } catch (e){
        return callback(e, []);
    }
}

export const getTypeOfAStand = async (id, callback) => {
    try {
        const result = await db.type_stand.findAll({
            where: {
                id_type_stand: id
            }
        });
        return callback(null, result);
    } catch (e) {
        return callback(e, []);
    }
}