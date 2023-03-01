import DataType from "sequelize";
export const AvisAttraction = (sequelize) => {
    return sequelize.define('avis_attraction', {
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
        tableName: 'avis_attraction',
        timestamps: false
    })
}