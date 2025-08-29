let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
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
                <th>nome completo</th>
                <th>idade</th>
                <th>email</th>
                <th>cidade</th>
                <th>estado</th>
            </tr>`


            dados.forEach(dad =>{
                html += `<tr>
                <td>${dad.usuarioId}</td>
                <td>${dad.firstName} ${dad.lastName}</td>               
                <td>${dad.age}</td>
                <td>${dad.email}</td>
                <td>${dad.city}</td>
                <td>${dad.state}</td>
            </tr>`

            console.log(dad)
        })

            html += `</table>`
            res.innerHTML = html
        })
})