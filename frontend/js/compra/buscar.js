let buscarCadas = document.getElementById("buscarCadas")

buscarCadas.addEventListener("click", (e) => {
    e.preventDefault()


    let produto_id = document.getElementById("produto_idCad").value
    let preco = document.getElementById("unitarioCad")
    let desconto = document.getElementById("descontoCad")

    fetch(`http://localhost:3000/produto/${produto_id}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {

            preco.value = dados.price
            desconto.value = dados.discountPercentage

        })
})