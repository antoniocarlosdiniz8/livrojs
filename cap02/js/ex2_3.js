//const carro = document.querySelector("#inVeiculo")
//const valor = document.querySelector("#inPreco")
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value // obtem o conteudo dos campos
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50 // Calcula o valor da entrada
    const parcela = (preco * 0.50) / 12 //  e das parcelas

    resp1.innerText = (`Promoção ${veiculo}`)
    resp2.innerText = (`Entrada de R$ ${entrada.toFixed(2)}`)
    resp3.innerText = (`+ 12 x de R$ ${parcela.toFixed(2)}`)

    e.preventDefault()

})