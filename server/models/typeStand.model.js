import DataType from "sequelize";

export const TypeStand = (sequelize) => {
    return sequelize.define('type_stand', {
            id_type_stand: {
                field: 'id_type_stand',
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            designation: {
                field: 'designation',
                type: DataType.CHAR(50),
            }
        }, {
            tableName: "type_stand",
            timestamps: false
        }
    );
}