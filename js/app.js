console.log(
    document.querySelectorAll(".times")
)

// Pegar apenas o times do futebol europeu
console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")
)

// Pegar apenas um time específico do futebol europeu
console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")[0].innerHTML
)