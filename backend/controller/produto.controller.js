const Produto = require("../model/Produto")

const cadastrar = async (req,res)=>{
    const valores = req.body
    try{
        const dados = await Produto.create(valores)
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar os dados!',err)
        res.status(500).json({message: 'Erro ao cadastrar os dados!'})
    }
}

const listar = async (req,res)=>{
    try{
        const dados = await Produto.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar os dados!',err)
        res.status(500).json({message: 'Erro ao listar os dados!'})
    }
}

const apagar = async (req,res)=>{
    const valor = req.params.id
    try{
        const dados = await Produto.findByPk(valor)
        if(dados){
            await Produto.destroy({where: { produtoId: valor}})
            res.status(204).json({message: 'Dados excluídos com sucesso!'})
        }else{
            res.status(404).json({message: 'Produto não encontrado!'})
        }    
    }catch(err){
        console.error('Erro ao apagar os dados!',err)
        res.status(500).json({message: 'Erro ao apagar os dados!'})
    }
}

const atualizar = async (req,res)=>{
    const valor = req.params.id
    const valores = req.body
    try{
        let dados = await Produto.findByPk(valor)
        if(dados){
            await Produto.update(valores, {where: { produtoId: valor}})
            dados = await Produto.findByPk(valor)
            res.status(200).json(dados)
        }else{
            res.status(404).json({message: 'Produto não encontrado!'})
        }
    }catch(err){
        console.error('Erro ao atualizar os dados!',err)
        res.status(500).json({message: 'Erro ao atualizar os dados!'})
    }
}

const consultarId = async (req, res) => {
    const produtoId = req.params.id

    try {
        const produto = await Produto.findByPk(produtoId)

        if (produto) {
            res.status(200).json(produto)
        } else {
            res.status(404).json({ message: "Compra com o ID " + produtoId + " não encontrada." })
        }
    } catch (err) {
        console.error('Erro ao buscar o produto!', err)
        res.status(500).json({ message: "Erro interno ao processar a sua solicitação." })
    }
}

module.exports = { cadastrar, listar, apagar, atualizar, consultarId }