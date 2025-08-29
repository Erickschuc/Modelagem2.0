let resLis = document.getElementById("resLis")
let buttonLis = document.getElementById("buttonLis")

buttonLis.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/compra`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            let html = `<table border="1" cellpadding="8">
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
            </tr>`


            dados.forEach(dad => {
                html += `            <tr>
                <td>${dad.produto_id}</td>
                <td>${dad.usuario_id}</td>
                <td>${dad.quant}</td>
                <td>${dad.dataCompra}</td>
                <td>${dad.unitario}</td>
                <td>${dad.desconto}</td>
                <td>${dad.precoFinal}</td>
                <td>${dad.formaPag}</td>
                <td>${dad.status}</td>
            </tr>`

                console.log(dad)
            })

            html += `</table>`
            resLis.innerHTML = html
        })
})