const { DataTypes } = require("sequelize")
const db = require("../db/conn")

const Produto = db.define("produto", {
    produtoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    },
    discountPercentage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: "produtos",
    timestamps: false
})

module.exports = Produto