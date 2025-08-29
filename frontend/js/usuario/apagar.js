let resApagar = document.getElementById("resApagar")
let buttonApagar = document.getElementById("buttonApagar")

buttonApagar.addEventListener("click", (e) => {
    e.preventDefault()

    let usuarioId = Number(document.getElementById("usuarioIdDel").value)

    fetch(`http://localhost:3000/usuario/${usuarioId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
    })
        .then(resp => {
            if (resp.status === 204) {
                resApagar.innerHTML = "usuario apagado com sucesso"
            }
        })
        .then()
})