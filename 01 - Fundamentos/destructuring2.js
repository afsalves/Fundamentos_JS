const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]  //esta desetruturando e atribuindo simultaneamente
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] /* aqui estamos dizendo para o primeiro array ignorar o primeiro elemento e
o segundo array tambem ignorar o primeiro elemento*/
console.log(nota)