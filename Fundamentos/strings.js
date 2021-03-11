const escolar = 'Cod3r'

console.log(escola.charAt(4)) //imprime a letra que esta no indice 4 da cadeia de caracteres
console.log(escola.charAt(5)) //como essa posicao nao existe ele retorna vazio
console.log(escola.charCodeAt(3)) //retorna o valor da posicao na tabela UNICODE
console.log(escola.indexOf('3')) //retorna o valor da posicao em que esse caractere está
console.log(escola.substring(1)) //imprime da posicao 1 em diante
console.log(escola.substring(0, 3)) //imprime da posicao 0 ate a 3 sem incluir a posicao 3

console.log('Escola'.concat(escola).concat('!')) //contena a palavra na variavel e na exclamacao
console.log('Escola' + escola + '!') //faz o mesmo que a linha de cima
console.log(escola.replace(3, 'e')) //vai substituir o caractere na posicao tres pela letra e

console.log('Ana, Maria, Pedro'.split(',')) //transforma as cadeias de caracteres separadas por virgulas em um array