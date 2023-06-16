const prompt = require("prompt-sync")()
const salario = Number(prompt("Digite seu salário: R$ "))
const tempo = Number(prompt("Tempo/Anos:"))
const quadrienios = Math.floor(tempo / 4)
const acrescimo = salario * quadrienios / 100
console.log(`Quadrienios ${quadrienios}`)
console.log(`Salário final R$ ${(salario + acrescimo).toFixed(2)}`)