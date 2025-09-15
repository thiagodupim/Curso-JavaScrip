var p = document.createElement("p")
p.innerHTML = "Olá pessoal!"

var img = document.createElement("img")
img.src = "html.jpg"

// Inserindo um elemento filho ao elemento pai
document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

// Removendo o elemento filho
document.getElementById("conteudo").removeChild(img)