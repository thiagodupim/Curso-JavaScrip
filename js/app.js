var lista = document.getElementsByTagName("ul")[0]

// Pegando os elementos filhos da lista
var itens = lista.children

// Criando novo item
var novoItem = document.createElement("li")

//Inserindo conteúdo no novo item
novoItem.textContent = "Suco de laranja"
lista.insertBefore(novoItem, itens[2]) // Escolher em qual indice será inserido


var lista2 = document.getElementsByTagName("ul")[1]
var itens2 = lista2.children
var novoItem2 = document.createElement("li")
novoItem2.textContent = "Margarina"

// Trocando item da lista por um novo
lista2.replaceChild(novoItem2, itens2[2])


console.log(lista)
console.log(itens)
console.log(lista2)