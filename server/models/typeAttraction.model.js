import DataType from "sequelize";

export const TypeAttraction = (sequelize) => {
    return sequelize.define('type_attraction', {
            id_type_attraction: {
                field: 'id_type_attraction',
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            designation: {
                field: 'designation',
                type: DataType.CHAR(50),
            }
        }, {
            tableName: "type_attraction",
            timestamps: false
        }
    );
}