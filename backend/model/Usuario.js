const { DataTypes, Model } = require("sequelize")
const db = require("../db/conn")

const Usuario = db.define("usuario", {
    usuarioId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},{
    tableName: "usuarios",
    timestamps: false
})

module.exports = Usuario