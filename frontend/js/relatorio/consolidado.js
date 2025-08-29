let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/compra`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(compras => {
            fetch(`http://localhost:3000/usuario`,{
                method: "GET",
                headers: { "content-type":"application/json" }
            })
            .then(resp => resp.json())
            .then(usuarios =>{
            fetch(`http://localhost:3000/produto`,{
                method: "GET",
                headers: { "content-type":"application/json" }
            })
            .then(resp => resp.json())
            .then(produtos =>{
               


            let html = `<table border="1" cellpadding="8">
             <tr>
                <th>Id da compra</th>
                <th>Usuario</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Data da Compra</th>
                <th>Preço Unitário</th>
                <th>Desconto</th>
                <th>Preço Final</th>
                <th>Forma de Pagamento</th>
                <th>Status</th>
            </tr>`


            compras.forEach(dad => {
                const usuarioCorreto = usuarios.find(usu => usu.usuarioId === dad.usuario_id) 
                const produtoCorreto = produtos.find(pro => pro.produtoId === dad.produto_id)

                console.log(usuarioCorreto)

                if(usuarioCorreto && produtoCorreto){
                    html += `            <tr>
                <td>${dad.compraId}</td>
                <td>${usuarioCorreto.firstName} ${usuarioCorreto.lastName}</td>
                <td>${produtoCorreto.title}</td>
                <td>${dad.quant}</td>
                <td>${dad.dataCompra}</td>
                <td>${dad.unitario}</td>
                <td>${dad.desconto}</td>
                <td>${dad.precoFinal}</td>
                <td>${dad.formaPag}</td>
                <td>${dad.status}</td>
            </tr>`
                }
                console.log(dad)
            })

            html += `</table>`
            res.innerHTML = html
            })
            })
        })
        .catch((err)=>{
            console.error("Erro: ", err)
        })
})
