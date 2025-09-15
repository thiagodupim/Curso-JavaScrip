// Inserindo um texto
var titulo = document.querySelector("h1")
var texto = document.createTextNode("Um texto qualquer")

titulo.appendChild(texto)

// Desta maneira também conseguimos
titulo.textContent = "Um novo texto"