console.log (typeof Object) //isso é uma funcao
console.log (typeof new Object) //aqui estamos instanciando uma funcao

const Cliente = function () {}
console.log(typeof Cliente)
console.log (typeof new Cliente) //muda o tipo de dados para objeto

class Produto {}
console.log(typeof Produto)
console.log (typeof new Produto()) //o mesmo ocorre com classes

