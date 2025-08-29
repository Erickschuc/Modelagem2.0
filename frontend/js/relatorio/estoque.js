let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/produto`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            let html = `<table border="1" cellpadding="8">
             <tr>
                <th>Nome</th>
                <th>categoria</th>
                <th>Estoque</th>
                <th>Imagem</th>
            </tr>`


            dados.forEach(dad => {
                if(dad.stock <= 10){
                html += `<tr>
                <td>${dad.title}</td>
                <td>${dad.category}</td>
                <td>${dad.stock}</td>
                <td><img src="${dad.thumbnail}"></td>
            </tr>`
                }

                console.log(dad)
            })

            html += `</table>`
            res.innerHTML = html
        })
})