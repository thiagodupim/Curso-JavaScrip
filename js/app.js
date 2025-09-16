var lista = document.getElementsByTagName("ul")[0]

// Pegando os elementos filhos da lista
var itens = lista.children

// Criando novo item
var novoItem = document.createElement("li")

//Inserindo conteúdo no novo item
novoItem.textContent = "Suco de laranja"
lista.insertBefore(novoItem, itens[2]) // Escolher em qual indice será inserido

console.log(lista)
console.log(itens)