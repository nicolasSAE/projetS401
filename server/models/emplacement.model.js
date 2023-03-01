import DataType from "sequelize";
export const Emplacement = (sequelize) => {
    return sequelize.define('emplacement', {
        id_emplacement: {
            field: 'id_emplacement',
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        prix: {
            field: 'prix',
            type: DataType.DECIMAL(6,2),
        },
        taille: {
            field: 'taille',
            type: DataType.DECIMAL(6,2),
        }
    }, {
        tableName: "emplacement",
        timestamps: false
    });
}