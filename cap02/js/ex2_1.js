const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // Obtem o nome digitado no form
    resp.innerText = `Olá ${nome}` // Exibe a resposta do programa
    e.preventDefault() // Evita envio do form
})