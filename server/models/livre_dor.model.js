import DataType from "sequelize";
export const Livre_Or = (sequelize) => {
    return sequelize.define('livre_or', {
        id_comment:{
            field: 'id_comment',
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        date_comment:{
            field: 'date_comment',
            type: DataType.DATE,
            allowNull: false
        },
        nom:{
            field: 'nom',
            type: DataType.STRING,
            allowNull: false
        },
        message:{
            field: 'message',
            type: DataType.STRING,
            allowNull: false
        }
    },{
        timestamps: false,
        tableName: 'livre_or'
    })
}