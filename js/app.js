/* 
   Alert = Método do window que recebe apenas um parametro (string)
   Prompt = Método do window que recebe um parametro (string) e retorna um valor da caixa
   Confirm = Método do window que retorna true ou false
*/

alert("Isso é um alert")

let nome = prompt("Digite seu nome")
console.log(nome)

let resposta = confirm("Tem certeza que deseja excluir esse item?")

if (resposta == true) {
    alert("Item excluido com sucesso!")
} else {
    alert("Exclusão cancelada!")
}