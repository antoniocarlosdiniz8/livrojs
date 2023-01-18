const frm = document.querySelector("form")
//const kilo = document.querySelector("#iquilo")
//const grama = document.querySelector("#iconsumo")
const resul = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.iquilo.value)
    const consumo = Number(frm.iconsumo.value)

    const valor = (quilo / 1000) * consumo
    resul.innerText = `Valor a pagar R$ ${valor.toFixed(2)}`

    e.preventDefault()







})