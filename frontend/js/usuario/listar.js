let resListar = document.getElementById("resListar")
let buttonListar = document.getElementById("buttonListar")

buttonListar.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/usuario`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
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


            dados.forEach(dad =>{
                html += `<tr>
                <td>${dad.usuarioId}</td>
                <td>${dad.firstName}</td>               
                <td>${dad.lastName}</td>
                <td>${dad.age}</td>
                <td>${dad.email}</td>
                <td>${dad.phone}</td>
                <td>${dad.address}</td>
                <td>${dad.city}</td>
                <td>${dad.state}</td>
                <td>${dad.birthDate}</td>

            </tr>`

            console.log(dad)
        })

            html += `</table>`
            resListar.innerHTML = html
        })
})