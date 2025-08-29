const grafico = document.getElementById('grafico').getContext('2d');
const button = document.getElementById('button')
let meuGrafico

button.addEventListener("click", async (e) => {
  e.preventDefault()

  const num = Number(document.getElementById('num').value)
  let array = []
  let array2 = []
  let arrayName = []
  let arrayStock = []


  fetch(`http://localhost:3000/produto`, {
    method: "GET",
    headers: { "content-type": "aplication/json" }
  })
    .then(resp => resp.json())
    .then(dados => {
      dados.forEach(dad => {
        array.push(dad.title)
        array2.push(dad.stock)
      })


      if (meuGrafico) {
        meuGrafico.destroy()
      }

      arrayName = array.slice(num, num + 10)
      arrayStock = array2.slice(num, num + 10)

      console.log(array)
      console.log(array2)

      console.log(arrayName)
      console.log(arrayStock)

      meuGrafico = new Chart(grafico, {
        type: 'bar',
        data: {
          labels: arrayName,
          datasets: [{
            label: 'Idade',
            data: arrayStock,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    })
    .catch((err) => {
      console.error("Erro ao buscar os dados: ", err)
    })
})
