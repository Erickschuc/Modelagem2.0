let resNome = document.getElementById("resNome")
let buttonConsultarNome = document.getElementById("buttonConsultarNome")


buttonConsultarNome.addEventListener("click", (e) => {
    e.preventDefault()

    let nome = document.getElementById("nome").value

    fetch(`http://localhost:3000/usuario`, {
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
                <th>address</th>
                <th>cidade</th>
                <th>estado</th>
                <th>data de nascimento</th>
            </tr>`

            const usuarioNome = dados.find(usu =>
                `${usu.firstName} ${usu.lastName}`.trim().toLowerCase() === nome.trim().toLowerCase() ||
                usu.firstName.trim().toLowerCase() === nome.trim().toLowerCase()
            )

            console.log(usuarioNome)


                html += `<tr>
                <td>${usuarioNome.usuarioId}</td>
                <td>${usuarioNome.firstName}</td>               
                <td>${usuarioNome.lastName}</td>
                <td>${usuarioNome.age}</td>
                <td>${usuarioNome.email}</td>
                <td>${usuarioNome.phone}</td>
                <td>${usuarioNome.address}</td>
                <td>${usuarioNome.city}</td>
                <td>${usuarioNome.state}</td>
                <td>${usuarioNome.birthDate}</td>

            </tr>`



            html += `</table>`
            resNome.innerHTML = html
        })
})