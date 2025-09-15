console.log(
    // Retorna os nós filhos de um nó (body no caso).
    document.body.childNodes
)

var lista = document.body.childNodes
alert(lista.length)
alert(lista[5].innerHTML) 

// Retorna o nome do nó.
alert(lista[5].nodeName)

// Retorna o tipo do nó. Sempre irá retorna 1, 2, 3 ou 8.
alert(lista[1].nodeType)

alert(lista[1].nodeValue)

// Retorna os nós de um outro nó
alert(lista[5].childNodes[3].childNodes[0].nodeValue)