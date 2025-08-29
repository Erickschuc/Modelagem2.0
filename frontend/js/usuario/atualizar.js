let resAtualizar = document.getElementById("resAtualizar")
let buttonAtualizar = document.getElementById("buttonAtualizar")

buttonAtualizar.addEventListener("click", (e)=>{
    e.preventDefault()

    let usuarioId = Number(document.getElementById("usuarioIdAtua").value)
    let firstName = document.getElementById("firstNameAtua").value
    let lastName = document.getElementById("lastNameAtua").value
    let age = Number(document.getElementById("ageAtua").value)
    let email = document.getElementById("emailAtua").value
    let phone = document.getElementById("phoneAtua").value
    let address = document.getElementById("addressAtua").value
    let city = document.getElementById("cityAtua").value
    let state = document.getElementById("stateAtua").value
    let birthDate = document.getElementById("birthDateAtua").value

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

    fetch(`http://localhost:3000/usuario/${usuarioId}`, {
        method: "PUT",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        resAtualizar.innerHTML = `
                <table border="1" cellpadding="8">
            <tr>
                <th>Codigo Unico</th>
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
                <td>${usuarioId}</td>
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

let buscar = document.getElementById("buscar")

buscar.addEventListener("click", (e) => {
    e.preventDefault()

    let usuarioId = Number(document.getElementById("usuarioIdAtua").value)
    console.log(usuarioId)
    let firstName = document.getElementById("firstNameAtua")
    let lastName = document.getElementById("lastNameAtua")
    let age = document.getElementById("ageAtua")
    let email = document.getElementById("emailAtua")
    let phone = document.getElementById("phoneAtua")
    let address = document.getElementById("addressAtua")
    let city = document.getElementById("cityAtua")
    let state = document.getElementById("stateAtua")
    let birthDate = document.getElementById("birthDateAtua")

    fetch(`http://localhost:3000/usuario/${usuarioId}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {

            console.log(dados.firstName)
            
            firstName.value = dados.firstName
            console.log(firstName.value)
            lastName.value = dados.lastName
            age.value = dados.age
            email.value = dados.email
            phone.value = dados.phone
            address.value = dados.address
            city.value = dados.city
            state.value = dados.state
            birthDate.value = dados.birthDate

        })
})