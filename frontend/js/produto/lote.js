let resLote = document.getElementById("res")
let lote = document.getElementById("lote")

lote.addEventListener("click", (e)=>{
    e.preventDefault()

    fetch("https://dummyjson.com/products",{
        method: "GET",
        headers: { "content-type":"application/json" }
    })
    .then(resp => resp.json())
    .then(dados=> {
        dados.products.forEach(dad => {
            console.log(dad)
            const valores = {
                title: dad.title,
                description: dad.description,
                category: dad.category,
                price: dad.price,
                discountPercentage: dad.discountPercentage,
                stock: dad.stock,
                brand: dad.brand,
                thumbnail: dad.thumbnail
            }

            fetch(`http://localhost:3000/produto`, {
                method: "POST",
                headers: { "content-type":"application/json" },
                body: JSON.stringify(valores)
            })
            .then(resp => resp.body)
            .then(()=>{
                resLote.innerHTML = "lote registrado com sucesso"
            })
        })
    })
    .catch((err)=>{
        console.error("erro: ", err)
    })
})