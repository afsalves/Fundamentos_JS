let isAtivo = false  //use o ler quando for preciso alterar a variavel posteriormente
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //usar o comando de negacao mostra o resultado booleano, negando duas vezes volta ao valor original

console.log(!!3)
console.log(!!-1)  //todos os numeros inteiros exceto 0 sao verdadeiros
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


//resultados falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || 'epa')) //retorna o que for verdadeiro


//operacao  lógica em cima de uma string 
let nome = ''
console.log(nome || 'Desconhecido') //se o nome estiver vazio imprime a palavra desconhecido