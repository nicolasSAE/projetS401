export const Service_Attraction = (sequelize) => {
    return sequelize.define({}, {
        tableName: "service_attraction",
        timestamps: false
    });
}