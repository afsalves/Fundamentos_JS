var numero = 1
{
    var numero = 2 //escopo de bloco é ignorado, a variavel continua global
    console.log('dentro =', numero)
}

console.log('fora=', numero)

