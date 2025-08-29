let resApagar = document.getElementById("resApagar")
let button = document.getElementById("buttonApagar")

buttonApagar.addEventListener("click", (e) => {
    e.preventDefault()

    let produtoId = Number(document.getElementById("produtoIdDel").value)

    fetch(`http://localhost:3000/produto/${produtoId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
    })
        .then(resp => {
            if (resp.status === 204) {
                resApagar.innerHTML = "produto apagado com sucesso"
            }
        })
        .then()
})