import DataType from "sequelize";

export const Stand = (sequelize) => {
    return sequelize.define('stand', {
            id_stand: {
                field: 'id_stand',
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nom: {
                field: 'nom',
                type: DataType.CHAR(50),
            },
            prix: {
                field: 'prix',
                type: DataType.DECIMAL(5,2),
            },
            recette: {
                field: 'recette',
                type: DataType.DECIMAL(5,2),
            },
            nbr_clients_total: {
                field: 'nbr_clients_total',
                type: DataType.INTEGER,
            },
            attente: {
                field: 'attente',
                type: DataType.INTEGER,
            }
        }, {
            tableName: "stand",
            timestamps: false
        }
    );
}