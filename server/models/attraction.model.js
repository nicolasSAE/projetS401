import DataType from "sequelize";

export const Attraction = (sequelize) => {
    return sequelize.define('attraction', {
            id_attraction: {
                field: 'id_attraction',
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nom: {
                field: 'nom',
                type: DataType.STRING,
            },
            prix_adulte: {
                field: 'prix_adulte',
                type: DataType.DECIMAL(5,2),
            },
            prix_enfant: {
                field: 'prix_enfant',
                type: DataType.DECIMAL(5,2),
            },
            taille_requise: {
                field: 'taille_requise',
                type: DataType.DECIMAL(3,2),
            },
            recette: {
                field: 'recette',
                type: DataType.DECIMAL(6,2),
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
            tableName: "attraction",
            timestamps: false
        }
    );
}