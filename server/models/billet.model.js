import DataType from "sequelize";
export const Billet = (sequelize) => {
    return sequelize.define('billet', {
        id_billet:{
            field:'id_billet',
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date_billet: {
            field: 'datebillet',
            type: DataType.DATEONLY
        },
        prix: {
            field: 'prix',
            type: DataType.DECIMAL(5,2)
        },
        id_attraction: {
            field: 'id_attraction',
            type: DataType.INTEGER
        }
    }, {
        tableName: 'billet',
        timestamps: false
    })
}