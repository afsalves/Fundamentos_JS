const a = {name: 'Teste'}
const b = a //a e b recebem o mesmo endereco de memoria (apenas em casos de objeto)
b.name = 'Opa'  //atribuicao por referencia
console.log (a)

let valor // nao inicializada
console/log(valor)

valor = null //ausencia de valor
console.log(valor)