document.title = "Hello Word"
document.write("<h2>"+document.title+"</h2>")

 var button = document.createElement("button");
 button.innerText = "Clique aqui";
 document.body.appendChild(button);

function verificarAprovacao(nota) {
    
  if (nota >= 7) {
    return"Aprovado!"
  }else{
    return"Reprovado!"
  }
}

console.log(verificarAprovacao(8));//Aprovado!
console.log(verificarAprovacao(5));//Reprovado!

var idade = 23

function verificarIdade(idade) {

if (idade >= 18) {
    return "maior de idade";
}else{
    return "menor de idade";
}
}

console.log (verificarIdade(18));//maior de idade
console.log(verificarIdade(10));//menor de idade

var numero = 5
var numero2 = 2

function verificarCalculo(valorOriginal,desconto) {

const valorDesconto = (valorOriginal*desconto)/100;
const precoFinal = valorOriginal - valorDesconto;
return precoFinal;

}
const valorOriginal = 100;
const desconto = 20;
   
const precoFinal = calcularPrecoFinal(valorOriginal,desconto);

console.log(`Preço com desconto é: R${precoFinal.to.Fixed(2)}`);