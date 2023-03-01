import DataType from "sequelize";

export const Compte = (sequelize) => {
    return sequelize.define('compte', {
            id: {
                field: 'id_compte',
                type: DataType.INTEGER,
                autoIncrement: true,
                validate:{
                    isNull: false
                },
                primaryKey: true
            },
            username: {
                field: 'identifiant',
                type: DataType.CHAR(50),
            },
            password: {
                field: 'mdp',
                type: DataType.CHAR(50),
            },
            mail: {
                field: 'mail',
                type: DataType.STRING,
                validate:{
                    isEmail: true
                },
            },
            nom: {
                field: 'nom',
                type: DataType.CHAR(50),
            },
            prenom: {
                field: 'prenom',
                type: DataType.CHAR(50),
            },
            role: {
                field: 'role',
                type: DataType.CHAR(50),
            }
        }, {
            tableName: "compte",
            timestamps: false
        }
    );
}