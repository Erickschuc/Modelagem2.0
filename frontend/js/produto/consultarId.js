let resId = document.getElementById("resId")
let buttonId = document.getElementById("buttonId")


buttonId.addEventListener("click", (e) => {
    e.preventDefault()

    let marca

    let produtoId = Number(document.getElementById("produtoId").value)

    fetch(`http://localhost:3000/produto/${produtoId}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            console.log(dados)
            let html = `<table border="1" cellpadding="8">
                         <tr>
                <th>Nome</th>
                <th>descrição</th>
                <th>categoria</th>
                <th>Preço</th>
                <th>Desconto</th>
                <th>Estoque</th>
                <th>Marca</th>
                <th>Imagem</th>
            </tr>`

            if(dados.brand){
                marca = dados.brand
            }else{
                marca = "Marca não informada"
            }
                html += `<tr>
                <td>${dados.title}</td>
                <td>${dados.description}</td>
                <td>${dados.category}</td>
                <td>${dados.price}</td>
                <td>${dados.discountPercentage}</td>
                <td>${dados.stock}</td>
                <td>${marca}</td>
                <td><img src="${dados.thumbnail}"></td>
            </tr>`



            html += `</table>`
            resId.innerHTML = html
        })
})