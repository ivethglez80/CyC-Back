
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Guest",
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, 
            nombre:{
                type: DataTypes.STRING,
                allowNull: false
            },
            apellido:{
                type: DataTypes.STRING,
                allowNull: false
            }, 
            email:{
                type: DataTypes.STRING,
                unique: true
            },
            telefono:{
                type: DataTypes.STRING,
                allowNull: true
            },
            cantidad:{
                type: DataTypes.INTEGER,
                defaultValue: 1                
            },
            asiste:{
                type:DataTypes.BOOLEAN,
                defaultValue: true
            }

        },
        {timestamps: false}
    )
};