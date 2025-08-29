let resCadas = document.getElementById("resCadas")
let buttonCadas = document.getElementById("buttonCadas")

buttonCadas.addEventListener("click", (e) => {
    e.preventDefault()

    let quant = Number(document.getElementById("quantCad").value)
    let produto_id = document.getElementById("produto_idCad").value

    fetch(`http://localhost:3000/produto/${produto_id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then(resp => resp.json())
    .then(dados => {

        if (dados.stock < quant) {
            res.innerHTML = "Cadastro não foi feito, pois a quantidade excede o estoque do produto."
        } else {
            const valores = {
                title: dados.title,
                description: dados.description,
                category: dados.category,
                price: dados.price,
                discountPercentage: dados.discountPercentage,
                stock: dados.stock - quant,
                brand: dados.brand,
                thumbnail: dados.thumbnail
            }
            
            fetch(`http://localhost:3000/produto/${produto_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(valores)
            })
            .then(resp => resp.json()) 
            .then(() => {
                console.log("Estoque atualizado com sucesso!")
                cadastrar()
            })
            .catch(err => {
                console.error("Algo deu errado ao diminuir o estoque: ", err);
                res.innerHTML = "Erro ao tentar atualizar o estoque. A compra não foi finalizada."
            })
        }
    })
    .catch(err => {
        console.error("Erro ao buscar o produto: ", err);
        resCadas.innerHTML = "Produto não encontrado. Verifique o ID.";
    })
})

function cadastrar() {
    let produto_id = document.getElementById("produto_idCad").value
    let usuario_id = document.getElementById("usuario_idCad").value
    let quant = document.getElementById("quantCad").value
    let dataCompra = document.getElementById("dataCompraCad").value
    let unitario = document.getElementById("unitarioCad").value
    let desconto = document.getElementById("descontoCad").value
    let precoFinal = (unitario - (unitario * desconto / 100)) * quant
    let formaPag = document.getElementById("formaPagCad").value
    let status = document.getElementById("statusCad").value

    const valores = {
        produto_id: produto_id,
        usuario_id: usuario_id,
        quant: quant,
        dataCompra: dataCompra,
        unitario: unitario,
        desconto: desconto,
        precoFinal: precoFinal,
        formaPag: formaPag,
        status: status
    }

    fetch(`http://localhost:3000/compra`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(() => {
        resCadas.innerHTML = `
        <h3>Compra Realizada com Sucesso!</h3>
        <table border="1" cellpadding="8">
            <tr>
                <th>Produto ID</th>
                <th>Usuário ID</th>
                <th>Quantidade</th>
                <th>Data da Compra</th>
                <th>Preço Unitário</th>
                <th>Desconto</th>
                <th>Preço Final</th>
                <th>Forma de Pagamento</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>${produto_id}</td>
                <td>${usuario_id}</td>
                <td>${quant}</td>
                <td>${dataCompra}</td>
                <td>${unitario}</td>
                <td>${desconto}</td>
                <td>${precoFinal}</td>
                <td>${formaPag}</td>
                <td>${status}</td>
            </tr>
        </table>`
    })
    .catch(err => {
        console.error("Erro ao registrar a compra: ", err)
    })
}

