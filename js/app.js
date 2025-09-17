// Objeto
/* 
    Um objeto é uma coleção de propriedade e uma 
    propriedade é uma associação entre um nome (ou chave)
    e um valor. Um valor de uma propriedade pode ser uma função,
    que é então considerada um método do objeto.
*/

let pessoa = {
    nome: "Thiago",
    idade: 25,
    feliz: true,
    pets: ["cachorro", "cavalo"],
    carros: {
        hrv: {
            placa: "1234567",
            cor: "azul"
        },
        amarok: {
            placa: "7654321",
            cor: "vermelho"
        }
    },
    andar: function(km){
        alert(pessoa.nome+" andou "+km+" km")
    }
}

// Chamando o método
pessoa.andar(20)

// Alterando valores do objeto
pessoa.nome = "Dirceu"
pessoa.pets[0] = "Passarinho"

console.log(pessoa)
console.log(pessoa.pets[0])
console.log(pessoa.carros.hrv.cor)
console.log(pessoa.carros.amarok.placa)