import DataType from "sequelize";

export const Service = (sequelize) => {
    return sequelize.define('service', {
            id_service: {
                field: 'id_service',
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nom_service: {
                field: 'nom_service',
                type: DataType.CHAR(50),
            }
        }, {
            tableName: "service",
            timestamps: false
        }
    );
}
