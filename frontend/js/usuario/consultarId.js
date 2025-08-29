let resId = document.getElementById("resId")
let buttonConsultarId = document.getElementById("buttonConsultarId")


buttonConsultarId.addEventListener("click", (e) => {
    e.preventDefault()

    let usuarioId = Number(document.getElementById("usuarioId").value)

    fetch(`http://localhost:3000/usuario/${usuarioId}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            console.log(dados)
            let html = `<table border="1" cellpadding="8">
            <tr>
                <th>Código</th>
                <th>Primeiro nome</th>
                <th>Sobrenome</th>
                <th>idade</th>
                <th>email</th>
                <th>telefone</th>
                <th>endereço</th>
                <th>cidade</th>
                <th>estado</th>
                <th>data de nascimento</th>
            </tr>`


                html += `<tr>
                <td>${dados.usuarioId}</td>
                <td>${dados.firstName}</td>               
                <td>${dados.lastName}</td>
                <td>${dados.age}</td>
                <td>${dados.email}</td>
                <td>${dados.phone}</td>
                <td>${dados.address}</td>
                <td>${dados.city}</td>
                <td>${dados.state}</td>
                <td>${dados.birthDate}</td>

            </tr>`



            html += `</table>`
            resId.innerHTML = html
        })
})