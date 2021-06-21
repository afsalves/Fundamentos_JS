//Funcoes tem atributos e comportamento e podem ser instanciadas

// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // se passar so um parametro ele consider o outro como undefined
imprimirSoma(2, 4, 4, 5) //se passar mais que dois parametros ele vai considerar os dois primeiros e ignorar o restante
imprimirSoma() //considera ambos os parametros undefined e retorna um NaN


//Funcao com retorno
function soma(a, b = 1) {  //aqui atribuimos um valor padrao para b
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

