const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    const titulo = frm.inTitulo.value // obtem o conteudo dos campos
    const duracao = Number(frm.inDuracao.value) 


    const horas = Math.floor(duracao / 60) // Arredonda para baixo o resultado
    const minutos = duracao % 60 // obtem o resto da divisão

    resp1.innerText = titulo // Exibe as respostas
    resp2.innerText = `${horas} horas(s) e ${minutos} minutos`

    e.preventDefault() // Evita envio do form
})