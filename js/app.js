// Seta um atributo
document.getElementById("btn-set").addEventListener("click", function(){
    document.getElementById("title").setAttribute("class", "red")
})

// Remove o atributo
document.getElementById("btn-remove").addEventListener("click", function(){
    document.getElementById("title").removeAttribute("class")
})

// Pega um atributo e atribui ele a um elemento
document.getElementById("btn-get").addEventListener("click", function(){
    var value = document.getElementById("title").getAttribute("class")
    document.getElementById("class").innerHTML = value
})