import DataType from "sequelize";
export const AvisStand = (sequelize) => {
    return sequelize.define('avis_stand', {
        date: {
            type: DataType.DATE,
            field: 'date',
            primaryKey: true
        },
        message: {
            type: DataType.STRING,
            field: 'message'
        },
        note: {
            type: DataType.SMALLINT,
            field: 'note'
        }
    }, {
        tableName: 'avis_stand',
        timestamps: false
    })
}