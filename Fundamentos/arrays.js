const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //quando o valor do array nao existir ele vai exibir undefined

valores [10] = 10
console.log(valores)
console.log(valores.length)

//é possível misturar todo tipo de dados em um mesmo array, mas nao é uma boa prática
valores.push({id:3}, false, null, 'teste') //funcao para adicionar valores no array
console.log(valores)

console.log(valores.pop())
delete valores [0]
console.log(valores)

console.log(typeof valores)