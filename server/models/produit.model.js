import DataType from "sequelize";

export const Produit = (sequelize) => {
    return sequelize.define('produit', {
            id_produit: {
                field: 'id_produit',
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nom_produit: {
                field: 'nom_produit',
                type: DataType.CHAR(50),
            },
        }, {
            tableName: "produit",
            timestamps: false
        }
    );
}