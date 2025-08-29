let resAtualizar = document.getElementById("resAtualizar")
let buttonAtualizar = document.getElementById("buttonAtualizar")

buttonAtualizar.addEventListener("click", (e)=>{
    e.preventDefault()

    let produtoId = Number(document.getElementById("produtoIdAtua").value)
    let title = document.getElementById("titleAtua").value
    let description = document.getElementById("descriptioAtua").value
    let category = document.getElementById("categoryAtua").value
    let price = document.getElementById("priceAtua").value
    let discountPercentage = document.getElementById("discountPercentageAtua").value
    let stock = document.getElementById("stockAtua").value
    let brand = document.getElementById("brandAtua").value
    let thumbnail = document.getElementById("thumbnailAtua").value

    const valores = {
        title: title,
        description: description,
        category: category,
        price: price,
        discountPercentage: discountPercentage,
        stock: stock,
        brand: brand,
        thumbnail: thumbnail
    }

    fetch(`http://localhost:3000/produto/${produtoId}`, {
        method: "PUT",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        resAtualizar.innerHTML = `
                <table border="1" cellpadding="8">
            <tr>
                <th>Titulo</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Desconto</th>
                <th>Estoque</th>
                <h>marca</th>
                <th>Imagem</th>
            </tr>
            <tr>
                <td>${title}</td>
                <td>${description}</td>
                <td>${category}</td>
                <td>${price}</td>
                <td>${discountPercentage}</td>
                <td>${stock}</td>
                <td>${brand}</td>
                <td><img src="${thumbnail}"></td>
            </tr>
        </table>`
    })
})

let buscar = document.getElementById("buscar")

buscar.addEventListener("click", (e) => {
    e.preventDefault()

    let produtoId = Number(document.getElementById("produtoIdAtua").value)
    
    let title = document.getElementById("titleAtua")
    let description = document.getElementById("descriptioAtua")
    let category = document.getElementById("categoryAtua")
    let price = document.getElementById("priceAtua")
    let discountPercentage = document.getElementById("discountPercentageAtua")
    let stock = document.getElementById("stockAtua")
    let brand = document.getElementById("brandAtua")
    let thumbnail = document.getElementById("thumbnailAtua")

    fetch(`http://localhost:3000/produto/${produtoId}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {

            title.value = dados.title
            description.value = dados.description
            category.value = dados.category
            price.value = dados.price
            discountPercentage.value = dados.discountPercentage
            let precoFinal = price - (price * (discountPercentage / 100))
            precoFinal.value = dados.precoFinal
            stock.value = dados.stock
            brand.value = dados.brand
            thumbnail.value = dados.thumbnail

        })
})