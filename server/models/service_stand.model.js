export const Service_Stand = (sequelize) => {
    return sequelize.define({}, {
        tableName: "service_stand",
        timestamps: false
    });
}