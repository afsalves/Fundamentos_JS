console.log (Math.ceil(6.1)) //arrendondamento para cima, o ponto acessa um atributo dentro do objeto

const obj1 = {}
obj1.name = 'Bola' //declara e atribui o valor 
obj1['nome'] = 'Bola' //equivalente ao de cima

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //como foi declarado como this fica acessivel fora do escopo
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log (obj2.nome)
console.log (obj3.nome)
obj3.exec()
