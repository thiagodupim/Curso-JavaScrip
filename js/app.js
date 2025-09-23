/* loops: 
    for in
    for of
*/

let peca = {nome: "filtro", preco: 15.69, unidade: 25}
let aparelhos = ["computador", "Impressora", "Mouse", "Teclado"]

for (let valor in peca) {
    console.log(peca[valor])
}

for (let valor of aparelhos) {
    console.log(valor)
}