/* Operadores: 
    Lógicos
    Comparação
    Operador ternário
*/

let x = 5

let media = 8
let frequencia = 80

let idade = 16

// Operador ternário
let eleitor = (idade >= 16) ? "Pode votar" : "Não pode votar"
let eleitorNot = (!idade <= 15) ? "Pode votar" : "Não pode votar"

// Verificando se x é igual a 5
console.log(x == 5)
console.log(x != 4)
console.log(x != "5")

// Verificando o tipo de dado
console.log(x === "5")
console.log(x !== "5")

// Maior que... Menor que
console.log(x > 2)
console.log(x < 2)

// Maior ou igual... menor ou igual
console.log(x >= 5)
console.log(x <= 2)

// Operadores lógicos - média
console.log(media >= 7 && frequencia >= 70)
console.log(media >= 7 || frequencia >= 50)

console.log(eleitor)
console.log(eleitorNot)