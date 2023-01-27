const prompt = require("prompt-sync")()
const veiculo = prompt("Digite o Veiculo: ")
const preco = Number(prompt("Digite o preço: "))
const entrada = preco * 0.50
const parcela = (preco * 0.50) / 12
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de: ${entrada.toFixed(2)}`)
console.log(` + 12x de R$ ${parcela.toFixed(2)}`)
