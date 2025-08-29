let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let compraId = Number(document.getElementById("compraIdAtua").value)
    let produto_id = document.getElementById("produto_idAtua").value
    let usuario_id = document.getElementById("usuario_idAtua").value
    let quant = document.getElementById("quantAtua").value
    let dataCompra = document.getElementById("dataCompraAtua").value
    let unitario = document.getElementById("unitarioAtua").value
    let desconto = document.getElementById("descontoAtua").value
    let precoFinal = (unitario - (unitario * desconto / 100)) * quant
    let formaPag = document.getElementById("formaPagAtua").value
    let status = document.getElementById("statusAtua").value

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

    fetch(`http://localhost:3000/compra/${compraId}`, {
        method: "PUT",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = `
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
})

let buscar = document.getElementById("buscarAtua")

buscar.addEventListener("click", (e) => {
    e.preventDefault()

    let compraId = Number(document.getElementById("compraIdAtua").value)
    
    let quant = document.getElementById("quantAtua")
    let dataCompra = document.getElementById("dataCompraAtua")
    let unitario = document.getElementById("unitarioAtua")
    let desconto = document.getElementById("descontoAtua")
    let formaPag = document.getElementById("formaPagAtua")
    let status = document.getElementById("statusAtua")

    fetch(`http://localhost:3000/compra/${compraId}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {

            console.log(dados)

            quant.value = dados.quant
            dataCompra.value = dados.dataCompra
            unitario.value = dados.unitario
            desconto.value = dados.desconto
            formaPag.value = dados.formaPag
            status.value = dados.status

        })
})