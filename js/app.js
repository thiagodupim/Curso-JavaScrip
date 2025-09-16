// Variáveis
// Escopo global, escopo local
// var (escopo glibal), let (dentro do bloco), const (variáveis com valor fixo)

var nome = "Thiago"

if (true) {
    nome = "Kleuber"
}

console.log(nome)

if (true) {
    // let só é considerado no escopo local
    let nome2 = "Marcos"

    console.log(nome2)
}