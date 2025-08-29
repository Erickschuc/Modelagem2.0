let resCadastro = document.getElementById("resCadastro")
let buttonCadastrar = document.getElementById("buttonCadastrar")

buttonCadastrar.addEventListener("click", (e)=>{
    e.preventDefault()

    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let age = Number(document.getElementById("age").value)
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let address = document.getElementById("address").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let birthDate = document.getElementById("birthDate").value

    const valores = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        birthDate: birthDate
    }

    fetch(`http://localhost:3000/usuario`, {
        method: "POST",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        resCadastro.innerHTML = `
                <table border="1" cellpadding="8">
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Idade</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Data de Nascimento</th>
            </tr>
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${age}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${address}</td>
                <td>${city}</td>
                <td>${state}</td>
                <td>${birthDate}</td>
            </tr>
        </table>`
    })
})