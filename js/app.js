/* Condicionais: 
    if
    else
    elseif
    switch
*/

let pais = "brasil"
let estado = "mg"

if (pais == "brasil") {
    console.log("Sou brasileiro!")
} else if (estado == "mg") {
    console.log("Sou mineiro!")
} else {
    console.log("Sou gringo!")
}

switch (pais) {
    case 'brasil':
        console.log("Sim, Brasil!")
        break
    case 'canada':
        console.log("Opa, Canadá")
        break
    default:
        console.log("Padrão")
        break
}