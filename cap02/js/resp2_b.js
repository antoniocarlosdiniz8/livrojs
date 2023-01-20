const valorminuto = document.querySelector("#valorMinuto")
const tempoeminuto =  document.querySelector("#quantMinuto")
const resp = document.querySelector("h2")
const frm = document.querySelector("form")

frm.addEventListener("submit", (e) =>{
    const tothora = Number(tempoeminuto) / 15



    resp.innerText = `O que sobra é: ${tothora}`



    e.preventDefault()








})







