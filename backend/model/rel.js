const Usuario = require("./Usuario")
const Compra = require("./Compra")
const Produto = require("./Produto")

Produto.hasMany(Compra,{
    foreignKey: "produto_id",
    as: "produtoCom",
    onDelete: "CASCADE"
})

Compra.belongsTo(Produto,{
    foreignKey: 'produto_id',
    as: 'produtoId',
    allowNull: false
})

Usuario.hasMany(Compra,{
    foreignKey: "usuario_id",
    as: "usuarioCom",
    onDelete: 'CASCADE'
})

Compra.belongsTo(Usuario,{
    foreignKey: 'usuario_id',
    as: 'usuarioId',
    allowNull: false
})

module.exports = { Compra, Usuario, Produto }