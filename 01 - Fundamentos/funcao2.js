// Armezenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
        console.log(a + b)
}

imprimirSoma(2, 3)

//Armezenando uma funcao arrow em uma variavel
const soma = (a, b) => {
   return a + b 
}

console.log(soma(2,3))

//retorno implicito
const subtracao = (a, b) => a + b   //implica uma funcao com execucao em uma unica linha
console.log(subtracao(2, 3))

const imprmir2 = a => console.log(a) //quando possui apenas um parametro nao precisa envolver em parenteses
imprmir2('Legal!!!')