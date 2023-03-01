import DataType from "sequelize";
export const FormulaireContact = (sequelize) => {
    return sequelize.define('formulaire_contact', {
        id_formulaire: {
            type: DataType.INTEGER,
            field: 'id_formulaire',
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            field: 'email',
            type: DataType.STRING,
        },
        prenom:{
            field:'prenom',
            type: DataType.STRING,
        },
        nom:{
            field:'nom',
            type: DataType.STRING,
        },
        message: {
            type: DataType.STRING,
            field: 'message'
        }
    }, {
        tableName: 'formulaire_contact',
        timestamps: false
    })
}