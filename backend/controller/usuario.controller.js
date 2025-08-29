const Usuario = require("../model/Usuario")

const cadastrar = async (req,res)=>{
    const valores = req.body
    try{
        const dados = await Usuario.create(valores)
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar os dados!',err)
        res.status(500).json({message: 'Erro ao cadastrar os dados!'})
    }
}

const listar = async (req,res)=>{
    try{
        const dados = await Usuario.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar os dados!',err)
        res.status(500).json({message: 'Erro ao listar os dados!'})
    }
}

const apagar = async (req,res)=>{
    const valor = req.params.id
    try{
        const dados = await Usuario.findByPk(valor)
        if(dados){
            await Usuario.destroy({where: { usuarioId: valor}})
            res.status(204).json({message: 'Dados excluídos com sucesso!'})
        }else{
            res.status(404).json({message: 'Usuario não encontrado!'})
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
        let dados = await Usuario.findByPk(valor)
        if(dados){
            await Usuario.update(valores, {where: { usuarioId: valor}})
            dados = await Usuario.findByPk(valor)
            res.status(200).json(dados)
        }else{
            res.status(404).json({message: 'Usuario não encontrado!'})
        }
    }catch(err){
        console.error('Erro ao atualizar os dados!',err)
        res.status(500).json({message: 'Erro ao atualizar os dados!'})
    }
}

const consultarId = async (req, res) => {
    const usuarioId = req.params.id

    try {
        const usuario = await Usuario.findByPk(usuarioId)

        if (usuario) {
            res.status(200).json(usuario)
        } else {
            res.status(404).json({ message: "Usuario com o ID " + usuarioId + " não encontrada." })
        }
    } catch (err) {
        console.error('Erro ao buscar o usuario!', err)
        res.status(500).json({ message: "Erro interno ao processar a sua solicitação." })
    }
}

module.exports = { cadastrar, listar, apagar, atualizar, consultarId }