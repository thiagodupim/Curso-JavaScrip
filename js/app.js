/* 
   Functions
*/

function exibirAlert() {
    alert("Funcionou!")
}

exibirAlert()

function soma(x, y) {
    return x + y
}

// console.log(soma(4, 6))

document.getElementById("resultado").innerHTML = soma(7, 5)